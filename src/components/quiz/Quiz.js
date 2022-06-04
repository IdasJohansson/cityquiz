import "./quiz.css"
import React, { useState, useContext, useEffect } from "react"; 
import { useNavigate } from "react-router-dom";
import RoutingPath from "../../routes/RoutingPath"
import { Map } from "../map/Map";
import LocalhostAPI from "../../shared/api/LocalhostAPI"; // Denna ska användas om man kör axios get? 
import {getQuestion, getAnswerCheck} from "../../shared/api/service/LocalhostAPIService"

// Lägg till en useEffect() som renderar om sidan varje gång man har svarat på en fråga. 
// Hämta lat och lng from question objectet. 
// Gör så att rätt svar visas på map när man har tryckt på ett option. 
// Gör så att nästa fråga visas när man har tryckt på ett option oavsett true eller false i CheckAnswer

export const Quiz = () => {
// Måste skicka med vära värden här :)(:
// setCounty ska väl vara lika med correctNr? 
const [country, setCountry] = useState(0); 
const [option1, setOption1] = useState(0); 
const [option2, setOption2] = useState(0); 
const [option3, setOption3] = useState(0); 

const [count, setCount] = useState(0);
/*
const [question, setQuestion] = useState({id:null,countryname:null, cityname:null, long:null, lati:null });
*/
const [question, setQuestion] = useState(1); 
const navigate = useNavigate(); 

const maxNumber = 100; // Detta ska vara antal rader i databasen ---> gör om till antal rader
// ---> Svagheter: Slumpen kan göra att "rätt" svar visas på två ställen men bara ett är rätt. 
// Detta är randomgeneratorn som slumpar fram landet samt den rätta staden
const correctNr = Math.floor((Math.random() * maxNumber) + 1); 
// Slumpar fram två andra options
const randomOption = Math.floor((Math.random() * maxNumber) + 1);
const randomOption2 = Math.floor((Math.random() * maxNumber) + 1);
// Math.floor gör att det endast blir integers. +1 är för att man ska börja på 1. 

    // unKnown styr switch-satsen. 
    const unKnown =   Math.floor(Math.random() * 3) + 1; // Slumpar ett nummer mellan 1 och 3
    
        /*
    const CheckAnswer = () => {
        // getAnswerCheck ska returnera true eller false (just nu är den true pga kollar på alla objekt i db)
        try {
            getAnswerCheck(question).then(response => {
                if(response === true){
                    // Om response är true ökas count med 1 
                    setCount(count +1)
                    // Lägg till att man skickas till nästa fråga. Använd useEffect istället för navigate?
                    navigate(RoutingPath.quizView);
                }
                else {
                    // Om response är false ska man skickas till nästa fråga. 
                    navigate(RoutingPath.quizView); 
                    alert("Wrong answer!"); 
                }
            });  
        }catch(error){
            console.log(error); 
            alert("Something went wrong...")
        }
    }; 
    */

    const CheckAnswer = () => {
        // Metod ovan är utkommenterad just nu pga att den inte funkar helt hundra :D 
        setCount(count +1)
    }

   const Options =() => {
        switch (1) {
            case 1:
                return (
                <> 
                <div className="question">
                <h2>Which city is located in: {correctNr} ? </h2>
                Case 1. Om man svarar så ska count öka här: {count} :) 
                </div>
                {/* lägg till onChange={(event) => setInput(event.target.value)*/}
                <div className="option-buttons"> 
                <button className="option-btn" value={correctNr} onClick={()=> CheckAnswer()}> {correctNr} </button>
                <button className="option-btn" value={randomOption} onClick={() => CheckAnswer()}>{randomOption}</button>
                <button className="option-btn" value={randomOption2} onClick={() => CheckAnswer()}>{randomOption2}</button>
                </div>
                </>
                )
            case 2:
                return (
                <> 
                <div className="question">
                <h2>Which city is located in: {correctNr} ? </h2>
                Case 2. Om man svarar så ska count öka här:{count} :) 
                </div>
                        
                <div className="option-buttons">
                <button className="option-btn" onClick={() => CheckAnswer()}>{randomOption}</button>
                <button className="option-btn" onClick={() => CheckAnswer()}>{randomOption2}</button>
                <button className="option-btn" onClick={() => CheckAnswer()}>{correctNr}</button>
                </div>
                </>
                )

            case 3: 
                return (
                <> 
                <div className="question">
                <h2>Which city is located in: {correctNr} ? </h2>
                Case 3. Om man svarar så ska count öka här: {count} :) 
                </div>
                    
                <div className="option-buttons">
                <button className="option-btn" onClick={() => CheckAnswer()}>{randomOption2}</button>
                <button className="option-btn" onClick={() => CheckAnswer()}>{correctNr}</button>
                <button className="option-btn" onClick={() => CheckAnswer()}>{randomOption}</button>
                 </div>
                 </>
            )
  
            default: 
                <p>Something went wrong...</p>
               break; 
        }
    }
    return (
        <React.Fragment> 
        <Map lat={57.7088} lng={11.9745} /> 
        <Options/>
        </React.Fragment>
    )
    }; 
