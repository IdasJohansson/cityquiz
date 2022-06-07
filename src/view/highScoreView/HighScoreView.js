import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
//osäker på hur importen ska ligga här
import "./highScoreView.css";
import LocalStorage from "../../shared/storage/LocalStorage";
import "../../index.css";
import RoutingPath from "../../routes/RoutingPath";

export const HighScoreView = () => {
  const count = 0;
  const questions = 10;
  const setCount = 0;
  const setQuestionNumber = 0;
  const navigate = useNavigate(); 

  const [showResults, setShowResults] = useState(false); //tillhör idas on clickevent
  const restartGame = () => {
    //om man vill köra igen, nollställer spelet
    setCount(0); //nollställer count
    setQuestionNumber(0); //nollställer currentquestion
    setShowResults(false); //nollställer showresults
    navigate(RoutingPath.quizView); 
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
            {count} out of {questions.length} correct - (
            {(count / questions.length) * 100}%){" "}
          </h3>
          {/*skriver ut hur många rätt svar som har gjorts av totalt antal frågor*/}
          <div className="top3">
            <h3>
              1.
              <br />
              2.
              <br />
              3.
              <br />
            </h3>
          </div>
          <button className="restartBtn" onClick={() => restartGame()}>
            Re-start game
          </button>{" "}
          {/*startar om spelet*/}
          {/*LÄGG TILL ATT VISA TOP 3*/}
          {/*LÄGG TILL logga ut / avsluta spel knapp*/}
          {/*ngn funktion för att få in tätt värde på rätt pats top 3*/}
        </div>
      </div>
    </>
  );
};
