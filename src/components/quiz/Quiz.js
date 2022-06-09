import "./quiz.css"
import React, { useState, useContext, useEffect } from "react"; 
import { useNavigate } from "react-router-dom";
import RoutingPath from "../../routes/RoutingPath"
import { Map } from "../map/Map";
import {getQuestion, getAnswerCheck} from "../../shared/api/service/LocalhostAPIService" // Används ej
import Axios from "axios";
import { CountContext } from "../../shared/provider/CountProvider";

// Gör så att rätt svar visas på map först efter man har svarat på en fråga. 
// ---> Svagheter: Slumpen kan göra att "rätt" svar visas på två ställen men bara ett är rätt....

export const Quiz = () => {

// Count är antal rätt svar, svarar man rätt ökar count med 1.
const [count, setCount] = useContext(CountContext); 

// Vi börjar på fråga 1 därav useState(1)
const [questionNumber, setQuestionNumber] = useState(1); // Behlöver bli global så att man kommer åt i Highscore

// När man har svarat på 10 frågor så skickas man till highscoreView i arrowfunctionen TenQuestion() 
const navigate = useNavigate(); 

// Här i lagras rätt svar
const [correctAnswer, setCorrectAnswer] = useState(""); 

// Här i når man RÄTT city och country, long och latitude
// Detta är "rätt land och stad"
const [serverResponse, setServerResponse] = useState("");
// Detta är random city2
const [serverResponse2, setServerResponse2] = useState("");
// Detta är random city3
const [serverResponse3, setServerResponse3] = useState("");

// FetchData hämtar anropar Question/Random tre gånger, lagrar värdena i serverresponse. 
const fetchData =  async () => {
    console.log("Fetch");

    const API_URL ="https://localhost:5001/api/Question/Random";
    try {
            const response =  await Axios.get("https://localhost:5001/api/Question/Random");
            
            console.log(response); 
         
            const response2 =  await Axios.get("https://localhost:5001/api/Question/Random");
            console.log(response2); 

            const response3 =  await Axios.get("https://localhost:5001/api/Question/Random");
            console.log(response3); 

            setServerResponse3(response3);
            setServerResponse2(response2);
            setServerResponse(response);

            } catch (error) {
            alert("Error retrieving desired data from server: " + error);
            }   

          console.log({correctAnswer,serverResponse});
          console.log("After fetch");
};



// Wrappar alla fetch, denna function anropas varje gång man trycker på en svarsknapp samt i useeffect när man kommer in på sidan. 
const StartFunction = async () => {
    console.log("Start");
    fetchData(); 
}; 

// Anropar StartFunction direkt när man kommer in på sidan. 
useEffect(() => {
    console.log("Start");
    StartFunction(); 
 }, []);

 

 const Options = () => {

    // Slumpar tre tal mellan 1 och 3 och placerar ut i options
    var i1 = Math.floor(Math.random() * 3) + 0;
    var i2 = Math.floor(Math.random() * 3) + 0;
    var i3 = Math.floor(Math.random() * 3) + 0;

    // Så länge något index är lika, slumpar while-loopen nya tal.
    while(i1 == i2 || i2 == i3 || i1 == i3){
        console.log("rnd");
        i1 = Math.floor(Math.random() * 3) + 0;
        i2 = Math.floor(Math.random() * 3) + 0;
        i3 = Math.floor(Math.random() * 3) + 0;
    }

    // Array med serverResponse 
    const options = [serverResponse?.data?.city,serverResponse2?.data?.city,serverResponse3?.data?.city];
    setCorrectAnswer(serverResponse?.data?.city)

    // Loggar svaren, index 0 är alltid rätt. 
    console.log(i1 + " " +i2+ " " + i3)

    return (
        <div className="option-buttons">
            <button className="option-btn" value={options[i1]}  onClick={(e) => CheckAnswer(e.target.value)}> {options[i1]} </button>
            <button className="option-btn" value={options[i2]}  onClick={(e) => CheckAnswer(e.target.value)}>{options[i2]}</button>
            <button className="option-btn" value={options[i3]}  onClick={(e) => CheckAnswer(e.target.value)}>{options[i3]}</button>
        </div>);
    }

    const CheckAnswer = (ans) => { 
       
        console.log(ans);
        console.log(correctAnswer);
        if(ans === correctAnswer)
            setCount(count +1)
     
        // När question är lika med 10 så skickas man till highscoreView. 
        setQuestionNumber(questionNumber +1) 
        // Räknar antal frågor
        TenQuestions(); 
        // Renderar om land och city options genom de tre olika apianropen...  
        StartFunction(); 
    } 

    // När questionNumer är 10 skickas man vidare
    const TenQuestions = () => {
        if(questionNumber === 10)
        {
            // Lägg till att resultatet sparas i en highscore
            navigate(RoutingPath.highScoreView)
        }
    }
    
    return (
        <React.Fragment> 
            {/* 
            <Map lat={57.7088} lng={11.9745} /> */}
        
            <Map lat={+serverResponse?.data?.longitude} lng={+serverResponse?.data?.latitude} /> 
            <div className="question">
                <h2> Question {questionNumber}: Which city is located in: {serverResponse?.data?.country} ? </h2>
                <h2>Score: {count} </h2> 
                <p> (Hover for clue)</p>
                </div>
                <Options/>
        </React.Fragment>
    )
}; 


