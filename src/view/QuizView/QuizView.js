import { useState, useContext } from "react"; 

export const QuizView = () => {
const [country, setCountry] = useState(">insert country here<"); 
const [option1, setOption1] = useState("city1"); 
const [option2, setOption2] = useState("city2"); 
const [option3, setOption3] = useState("city3"); 

const [count, setCount] = useState(0);
/* Lägg till ett onclick event, att om det är rätt svar så ökar count med 1*/

    return (
        <>  
        <div>
            <h1> QUIZVIEW</h1>
        </div>

        {/*Lägg in villkor att quiz-container visar 10 frågor, men sen skickas man till highscoreview */ }
        <div className="quiz-container">
            <div className="question">
                <h2>Which city is located in: {country} ? </h2>
            </div>
            <div> Insert googlemaps picture here (Som visar vart på kartan det rätta svaret ligger)</div>
            <div className="option-buttons">
                <button>{option1}</button>
                <button>{option2}</button>
                <button>{option3}</button>
            </div>
        </div>
        </>
    
    )
}


