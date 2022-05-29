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

var maxNumber = 100; // Detta ska vara antal rader i databasen

// Detta är randomgeneratorn som slumpar fram landet samt den rätta staden
var correctNr = Math.floor((Math.random() * maxNumber) + 1); 
// Slumpar fram två andra options
var randomOption = Math.floor((Math.random() * maxNumber) + 1);
var randomOption2 = Math.floor((Math.random() * maxNumber) + 1);
// Math.floor gör att det endast blir integers. +1 är för att man även ska få med den sista raden i databasen. 



    let unKnown = Math.floor(Math.random() * 4); // Kolla upp om  dett blir mellan 1-3 eller 0-3? 
    /*
    document.querySelector("option-buttons").classList.toggle("unKnown")
    */

    switch (unKnown) {
        case 1:
            <div className="option-buttons">
            <button className="option-btn" onclick="">{correctNr}</button>
            <button className="option-btn" onclick="">{randomOption}</button>
            <button className="option-btn" onclick="">{randomOption2}</button>
        </div>
        break;
        case 2:
            <div className="option-buttons">
            <button className="option-btn" onclick="">{randomOption}</button>
            <button className="option-btn" onclick="">{randomOption2}</button>
            <button className="option-btn" onclick="">{correctNr}</button>
        </div>
        break; 
        case 3: 
        <div className="option-buttons">
            <button className="option-btn" onclick="">{randomOption2}</button>
            <button className="option-btn" onclick="">{correctNr}</button>
            <button className="option-btn" onclick="">{randomOption}</button>
        </div>
        default:
        break;
    }

    return (
        <div> Return correct options here</div>
    )

    }; 