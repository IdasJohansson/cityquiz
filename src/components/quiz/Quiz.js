import "./quiz.css"
import { useState, useContext, useEffect } from "react"; 
import { useNavigate } from "react-router-dom";
import RoutingPath from "../../routes/RoutingPath"


export const Quiz = () => {

// Måste skicka med vära värden här :)(:
// setCounty ska väl vara lika med correctNr? 
const [country, setCountry] = useState(0); 
const [option1, setOption1] = useState(0); 
const [option2, setOption2] = useState(0); 
const [option3, setOption3] = useState(0); 

const [count, setCount] = useState(0);


const maxNumber = 100; // Detta ska vara antal rader i databasen, gör om till antal rader
// Svagheter: Slumpen kan göra att "rätt" svar visas på två ställen men bara ett är rätt. 

// Detta är randomgeneratorn som slumpar fram landet samt den rätta staden
const correctNr = Math.floor((Math.random() * maxNumber) + 1); 
// Slumpar fram två andra options
const randomOption = Math.floor((Math.random() * maxNumber) + 1);
const randomOption2 = Math.floor((Math.random() * maxNumber) + 1);
// Math.floor gör att det endast blir integers. +1 är för att man ska börja på 1. 

    // unKnown styr switch-satsen. 
    const unKnown =   Math.floor(Math.random() * 3) + 1; // Slumpar ett nummer mellan 1 och 3
    
    const isCorrect = true; 

    const CheckAnswer = () => {
        if (isCorrect)
        {
            setCount(count +1)
        } else {
            /*
            const navigate = useNavigate(0); 
            navigate(RoutingPath.quizView); 
            */
        }
    }

   const Options =() => {
        switch (unKnown) {
            // OBS! break, ligger fel, ser inte vart de ska vara? Ligger som Unreachable code just nu... 
            case 1:
                return (
                <> 
                <div className="question">
                <h2>Which city is located in: {correctNr} ? </h2>
                Case 1. Om man svarar så ska count öka här: {count} :) 
                </div>
                <div className="option-buttons"> 
                <button className="option-btn" value={isCorrect} onClick={()=> CheckAnswer()}> {correctNr} </button>
                <button className="option-btn" value={isCorrect} onClick={() => CheckAnswer()}>{randomOption}</button>
                <button className="option-btn" value={isCorrect} onClick={() => CheckAnswer()}>{randomOption2}</button>
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
            break;
            default: 
                <p>Something went wrong...</p>
               break; 
        }
    }
    return (
        <Options/>
    )
    }; 