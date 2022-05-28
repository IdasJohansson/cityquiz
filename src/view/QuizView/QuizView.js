import { useState, useContext } from "react"; 
import "./quizView.css"
import "../../index.css"; 

export const QuizView = () => {
const [country, setCountry] = useState(">insert country here<"); 
const [option1, setOption1] = useState("city1"); 
const [option2, setOption2] = useState("city2"); 
const [option3, setOption3] = useState("city3"); 

const [count, setCount] = useState(0);
// Lägg till ett onclick event, att om det är rätt svar så ökar count med 1

// Detta är randomgeneratorn som slumpar fram landet samt den rätta staden
var maxNumber = 100; // Detta ska vara antal rader i databasen

var randomNr = Math.floor((Math.random() * maxNumber) + 1); // Math.floor gör att det endast blir integers. +1 är för att man även ska få med den sista raden i databasen. 

var randomOption2 = Math.floor((Math.random() * maxNumber) + 1);

var randomOption3 = Math.floor((Math.random() * maxNumber) + 1);

    return (
        <>  
        {/*Lägg in villkor att quiz-container visar 10 frågor, men sen skickas man till highscoreview */ }
        <div className="container">
        <div>
            <h1> QUIZVIEW</h1>
        </div>
            <div className="question">
                <h2>Which city is located in: {randomNr} ? </h2>
            </div>
            <div> Insert googlemaps picture here (Som visar vart på kartan det rätta svaret ligger)</div>
            <div className="option-buttons">
                <button className="option-btn">{randomNr}</button>
                <button className="option-btn">{randomOption2}</button>
                <button className="option-btn">{randomOption3}</button>
            </div>
        </div>
        </>
    
    )
}


