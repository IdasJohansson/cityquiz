import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
//osäker på hur importen ska ligga här
import "./highScoreView.css";
import LocalStorage from "../../shared/storage/LocalStorage";
import "../../index.css";
import RoutingPath from "../../routes/RoutingPath";
import { UserContext} from "../../shared/provider/UserProvider";

export const HighScoreView = () => {
  const navigate = useNavigate(); // Ok
  const [AuthenticatedUser, setAuthenticatedUser] = useContext(UserContext); // Ok. 
  const [count, setCount] = useState(0); // Behöver bli global så att man kommer åt i highscore
  const [questionNumber, setQuestionNumber] = useState(1); // Behlöver bli global så att man kommer åt i Highscore

  // Count Ska bli en global variabel.
  // QuestionNumber Ska bli en global variabel.
  
  const restartGame = () => {
    
    //om man vill köra igen så ska count nollställas
    //setCount(0);nollställer count, ska bli global
    //setQuestionNumber(0);nollställer antal frågor 
  
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
          {" "}
          {/*namnet på classen där alla resultat visas*/}
          <h2>Final Results</h2>
          <h3>

            {/* Här vill vi visa antal poäng (count) utav antal frågor (10) */ }
            {/*
            {count} out of {questions.length} correct - (
            {(count / questions.length) * 100}%){" "}
            */}
          </h3>
          {/*skriver ut hur många rätt svar som har gjorts av totalt antal frågor*/}
          <div className="top3">
            <h3>
              1. {/* Här vill vi skriva ut det bästa resultatet, poäng och användarnamn? */}
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


/*
          /*startar om spelet*/
          /*LÄGG TILL ATT VISA TOP 3*/
          /*LÄGG TILL logga ut / avsluta spel knapp*/
          /*ngn funktion för att få in tätt värde på rätt pats top 3

*/
