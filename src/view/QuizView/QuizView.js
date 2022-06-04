import { useState, useContext } from "react"; 
import "./quizView.css"
import "../../index.css"; 
import { Quiz } from "../../components/quiz/Quiz";

export const QuizView = () => {

 
    return (
        <>  
        {/*Lägg in villkor att quiz-container visar 10 frågor, men sen skickas man till highscoreview */ }
        <div className="quiz-container">
        <div>
            <h1> LET'S QUIZ</h1>
        </div> 
            <Quiz>
                
            </Quiz>
        </div>
        </>
    
    )
}


