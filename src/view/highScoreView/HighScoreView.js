import { useState, useContext } from "react";
//osäker på hur importen ska ligga här

export const HighScoreView = () => {
  const count = 2;
  const questions = 10;
  const setCount = 0;
  const setCurrentQuestion = 0;

  const [showResults, setShowResults] = useState(false); //tillhör idas on clickevent
  const restartGame = () => {
    //om man vill köra igen, nollställer spelet
    setCount(0); //nollställer count
    setCurrentQuestion(0); //nollställer currentquestion
    setShowResults(false); //nollställer showresults
  };

  return (
    <>
      <div className="container">
        <div>
          <h1>HIGHSCORE VIEW</h1>
        </div>
        <div className="final-results">
          //namnet på classen där alla resultat visas
          <h1>Final Results</h1>
          <h2>
            {count} out of {questions.length} correct - (
            {(count / questions.length) * 100}%) //skriver ut hur många rätt
            svar som har gjorts av totalt antal frågor
          </h2>
          <button onClick={() => restartGame()}>Restart game</button> //startar
          om spelet
        </div>
      </div>
    </>
  );
};
