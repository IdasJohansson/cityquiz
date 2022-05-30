import "./quiz.css"
import { useState, useContext } from "react"; 

export const Quiz = () => {
// Minns ej vad jag tänkte med denna delen? :)(:
const [country, setCountry] = useState(">insert country here<"); 
const [option1, setOption1] = useState("city1"); 
const [option2, setOption2] = useState("city2"); 
const [option3, setOption3] = useState("city3"); 

const [count, setCount] = useState(0);
// Lägg till ett onclick event, att om det är rätt svar så ökar count med 1

var maxNumber = 100; // Detta ska vara antal rader i databasen, gör om till antal rader

// Detta är randomgeneratorn som slumpar fram landet samt den rätta staden
var correctNr = Math.floor((Math.random() * maxNumber) + 1); 
// Slumpar fram två andra options
var randomOption = Math.floor((Math.random() * maxNumber) + 1);
var randomOption2 = Math.floor((Math.random() * maxNumber) + 1);
// Math.floor gör att det endast blir integers. +1 är för att man ska börja på 1. 

    // unKnown styr switch-satsen. 
    let unKnown =   Math.floor(Math.random() * 3) + 1;
  
 
    const options =() => {
      
        switch (unKnown) {
            case 1:
                return (
                <> 
                <div className="question">
                <h2>Which city is located in: {correctNr} ? </h2>
                </div>
                    
                <div className="option-buttons">
                <button className="option-btn" onclick="">{correctNr}</button>
                <button className="option-btn" onclick="">{randomOption}</button>
                <button className="option-btn" onclick="">{randomOption2}</button>
                </div>
                </>
                )
                break;
            case 2:
                return (
                <> 
                <div className="question">
                <h2>Which city is located in: {correctNr} ? </h2>
                </div>
                        
                <div className="option-buttons">
                <button className="option-btn" onclick="">{randomOption}</button>
                <button className="option-btn" onclick="">{randomOption2}</button>
                <button className="option-btn" onclick="">{correctNr}</button>
                </div>
                </>
                )
            break; 
            case 3: 
                return (
                <> 
                <div className="question">
                <h2>Which city is located in: {correctNr} ? </h2>
                </div>
                    
                <div className="option-buttons">
                <button className="option-btn" onclick="">{randomOption2}</button>
                <button className="option-btn" onclick="">{correctNr}</button>
                <button className="option-btn" onclick="">{randomOption}</button>
                 </div>
                 </>
            )
            default:
            break;
    }

    
    }

    return (
        <div> {options()}</div>
    )
    }; 