import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./highScoreView.css";
import LocalStorage from "../../shared/storage/LocalStorage";
import "../../index.css";
import RoutingPath from "../../routes/RoutingPath";
import { UserContext} from "../../shared/provider/UserProvider";
import { CountContext } from "../../shared/provider/CountProvider";

export const HighScoreView = () => {
  const navigate = useNavigate(); // Ok
  const [AuthenticatedUser, setAuthenticatedUser] = useContext(UserContext); // Ok. 
  const [count, setCount] = useContext(CountContext); // Behöver bli global så att man kommer åt i highscore

  const restartGame = () => {
    //om man vill köra igen så ska count nollställas
    //setCount(0);nollställer count
    navigate(RoutingPath.quizView); // Skickar vidare till Quiz, ok. 
  };

  
  // Allt ok. 
  const logOut = () => {
    try{
        setAuthenticatedUser(null); 
        navigate(RoutingPath.logInView); 
    }catch(error){
        console.log(error); 
    }
};   

  return (
    <>
      <div className="container">
        <div>
          <h1>HIGHSCORE</h1>
        </div>
        <div className="final-results">

 
          <h2>Final Results</h2>

          <h3>
            You scored {count} out of 10 questions. 
          </h3>

          <div className="top3">
            <h3>
              1. {/* Här vill vi skriva ut det bästa resultatet, poäng och användarnamn? dett ska lagras i databasen */}
              <br />
              2.
              <br />
              3.
              <br />
            </h3>
          </div>
          {/* Allt ok med knappar*/}
          <button className="restartBtn" onClick={() => restartGame()}>
          QUIZ AGAIN
          </button> <br/>
          <button className="logInButton" type="submit" onClick={() => logOut()}>
          LOG OUT</button>
          {/* Flytta log out till profile ? */}
        </div>
      </div>
    </>
  );
};


