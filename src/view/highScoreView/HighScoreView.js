import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./highScoreView.css";
import "../../index.css";
import RoutingPath from "../../routes/RoutingPath";
import { UserContext} from "../../shared/provider/UserProvider";
import { CountContext } from "../../shared/provider/CountProvider";

export const HighScoreView = () => {
  const navigate = useNavigate(); // Ok
  const [AuthenticatedUser, setAuthenticatedUser] = useContext(UserContext); // Ok. 
  const [count, setCount] = useContext(CountContext); // Ok

  const restartGame = () => {
    //om man vill köra igen så ska count nollställas
    setCount(0);
    navigate(RoutingPath.quizView); // Skickar vidare till Quiz, ok. 
  };

  
  // Allt ok. 
  const logOut = () => {
    try{
        setAuthenticatedUser(null); 
        setCount(0);
        navigate(RoutingPath.logInView); 
    }catch(error){
        console.log(error); 
    }
};   

  return (
    <>
      <div className="container">
        <div>
          <h1>RESULT</h1>
        </div>
        <div className="final-results">

 
       

          <h3>
            You scored {count} out of 10 questions. 
          </h3>

          <div className="top3">
          {/* Här hade vi velat addera en top 3 */}
          </div>
       
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


