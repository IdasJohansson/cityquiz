import { useState, useContext } from "react"; 
import "./quizView.css"
import "../../index.css"; 
import {Map} from "../../components/map/Map.js"; 
import { Quiz } from "../../components/quiz/Quiz";

export const QuizView = () => {

 
    return (
        <>  
        {/*Lägg in villkor att quiz-container visar 10 frågor, men sen skickas man till highscoreview */ }
        <div className="container">
        <div>
            <h1> LET'S QUIZ</h1>
        </div>
            <div> Insert googlemaps picture here (Som visar vart på kartan det rätta svaret ligger, den blåa rutan symboliserar Detta)</div>
            <Map></Map>
            <Quiz></Quiz>
        </div>
        </>
    
    )
}


