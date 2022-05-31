import "./quiz.css"
import { useState, useContext, useEffect } from "react"; 
import { useNavigate } from "react-router-dom";
import RoutingPath from "../../routes/RoutingPath"


export const Quiz = () => {
// Minns ej vad jag tänkte med denna delen? :)(:
const [country, setCountry] = useState({correctNr}); 
const [option1, setOption1] = useState("city1"); 
const [option2, setOption2] = useState("city2"); 
const [option3, setOption3] = useState("city3"); 

const [count, setCount] = useState(0);


var maxNumber = 100; // Detta ska vara antal rader i databasen, gör om till antal rader
// Detta är randomgeneratorn som slumpar fram landet samt den rätta staden
var correctNr = Math.floor((Math.random() * maxNumber) + 1); 
// Slumpar fram två andra options
var randomOption = Math.floor((Math.random() * maxNumber) + 1);
var randomOption2 = Math.floor((Math.random() * maxNumber) + 1);
// Math.floor gör att det endast blir integers. +1 är för att man ska börja på 1. 

    // unKnown styr switch-satsen. 
    let unKnown =   Math.floor(Math.random() * 3) + 1; // Slumpar ett nummer mellan 1 och 3

    const CheckAnswer = () => {
        console.log();
        setCount(count +1)
        /*
        const navigate = useNavigate(0); 
        navigate(RoutingPath.quizView); 
        */
    }

   const Options =() => {
        switch (unKnown) {

            case 1:
                return (
                <> 
                <div className="question">
                <h2>Which city is located in: {correctNr} ? </h2>
                Case 1. Om man svarar så ska count öka här: {count} :) 
                </div>
                <div className="option-buttons"> 
                <button className="option-btn" value={correctNr} onClick={()=> CheckAnswer()}> {correctNr} </button>
                <button className="option-btn" value={randomOption} onClick={() => CheckAnswer()}>{randomOption}</button>
                <button className="option-btn" value={randomOption2} onClick={() => CheckAnswer()}>{randomOption2}</button>
                </div>
                </>
                )
                break;
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
            break; 
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
            break;
    }
    }
    return (
        <Options/>
    )
    }; 