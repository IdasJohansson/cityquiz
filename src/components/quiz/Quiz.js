import "./quiz.css"
import React, { useState, useContext,createContext , useEffect } from "react"; 
import { useNavigate } from "react-router-dom";
import RoutingPath from "../../routes/RoutingPath"
import { Map } from "../map/Map";
import LocalhostAPI from "../../shared/api/LocalhostAPI"; // Denna ska användas om man kör axios get? 
import {getQuestion, getAnswerCheck} from "../../shared/api/service/LocalhostAPIService"
import Axios from "axios";
import { CountContext } from "../../shared/provider/CountProvider";

// Lägg till en useEffect() som renderar om sidan varje gång man har svarat på en fråga. 
// Hämta lat och lng from question objectet. 
// Gör så att rätt svar visas på map när man har tryckt på ett option. 
// Gör så att nästa fråga visas när man har tryckt på ett option oavsett true eller false i CheckAnswer
// ---> Svagheter: Slumpen kan göra att "rätt" svar visas på två ställen men bara ett är rätt....

export const Quiz = () => {
// Count är antal rätt svar, svarar man rätt ökar count med 1.
const [count, setCount] = useContext(CountContext); // Behöver bli global så att man kommer åt i highscore
// Lägg till useContext här för att kunna skicka vidare värdet till highscore

// Vi börjar på fråga 1 därav useState(1)
const [questionNumber, setQuestionNumber] = useState(1); // Behlöver bli global så att man kommer åt i Highscore
// När man har svarat på 10 frågor så skickas man till highscoreView i arrowfunctionen TenQuestion() 
const navigate = useNavigate(); 
/*
// tror att vi ska ta bort denna rackaren :) 
const [question, setQuestion] = useState({id:null,countryname:null, cityname:null, long:null, lati:null });
*/

const [answer, setAnswer] = useState("");
const [correctAnswer, setCorrectAnswer] = useState(""); 

// Här i når man city och country, long och latitude
// Detta är "rätt land och stad"
const [serverResponse, setServerResponse] = useState("");
// Detta är random city2
const [serverResponse2, setServerResponse2] = useState("");
// Detta är random city3
const [serverResponse3, setServerResponse3] = useState("");





// Handle serverresponse add

// Detta är randomgeneratorn som slumpar fram landet samt den rätta staden i backend
const fetchData =  async () => {
    console.log("fetch");

    const API_URL ="https://localhost:5001/api/Question/Random";
    try {
            const response =  await Axios.get("https://localhost:5001/api/Question/Random");
            // handleServerResponse
            console.log(response); 
            // Answer har inget värde i detta läget, ska man lägga till det? 
         
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
          console.log("after fetch");



};



// Wrappar alla fetch, denna function anropas varje gång man trycker på en svarsknapp samt i useeffect när man kommer in på sidan. 
const WrapperFunction = async () => {
    console.log("wrapper");

     fetchData(); 

}; 






// Anropar WrapperFunction direkt när man kommer in på sidan. 
useEffect(() => {
    console.log("start");
    WrapperFunction(); 
 }, []);

 

 const Options = () => {


    // tre tal 1-3 random (1,1,2)
    var i1 = Math.floor(Math.random() * 3) + 0;
    var i2 = Math.floor(Math.random() * 3) + 0;
    var i3 = Math.floor(Math.random() * 3) + 0;

    // så länge nån är lika, slumpa nya
    while(i1 == i2 || i2 == i3 || i1 == i3){
        console.log("rnd");
        i1 = Math.floor(Math.random() * 3) + 0;
        i2 = Math.floor(Math.random() * 3) + 0;
        i3 = Math.floor(Math.random() * 3) + 0;
    }

    const options = [serverResponse?.data?.city,serverResponse2?.data?.city,serverResponse3?.data?.city];
    setCorrectAnswer(serverResponse?.data?.city)

    console.log(i1 + " " +i2+ " " + i3)

    return (
        <div className="option-buttons">
            <button className="option-btn" value={options[i1]}  onClick={(e) => CheckAnswer(e.target.value)}> {options[i1]} </button>
            <button className="option-btn" value={options[i2]}  onClick={(e) => CheckAnswer(e.target.value)}>{options[i2]}</button>
            <button className="option-btn" value={options[i3]}  onClick={(e) => CheckAnswer(e.target.value)}>{options[i3]}</button>
        </div>);
 }

  /*
    // fel 415 unsupported media type, hämtar fel format...Behöver troligtvis dekonstukta objektet?
    const CheckAnswer = () => {
      TenQuestions(); 
        // getAnswerCheck ska returnera true eller false (just nu är den true pga kollar på alla objekt i db)
        try {
            getAnswerCheck(question).then(response => {
                if(response === true){
                    // Om response är true ökas count med 1 
                    setCount(count +1)
                     // Håller koll på antalet frågor man har svarat på. 
                     setQuestionNumber(questionNumber +1)
                    // Lägg till att man skickas till nästa fråga. Använd useEffect istället för navigate?
                    WrapperFunction(); 
                }
                else {
                      // Håller koll på antalet frågor man har svarat på. 
                     setQuestionNumber(questionNumber +1)
                    // Om response är false ska man skickas till nästa fråga. 
                    WrapperFunction(); 
                    alert("Wrong answer!"); 
                }
            });  
        }catch(error){
            console.log(error); 
            alert("Something went wrong...")
        }
    }; 
    */


    
    const CheckAnswer = (ans) => { 
       
        console.log(ans);
        console.log(correctAnswer);
        if(ans === correctAnswer)
            setCount(count +1)
     
        // När question är lika med 10 så skickas man till highscoreView. 
        setQuestionNumber(questionNumber +1) 
        TenQuestions(); 
        // Renderar om land och city options genom de tre olika apianropen...  
        WrapperFunction(); 
    } 


    const TenQuestions = () => {
        if(questionNumber === 10)
        {
            // TODO:: save high score and reset
            navigate(RoutingPath.highScoreView)
        }
    }
    
  
    return (
        <React.Fragment> 
            {/* 
            <Map lat={57.7088} lng={11.9745} /> */}
            <Map lat={+serverResponse?.data?.longitude} lng={+serverResponse?.data?.latitude} /> 

            <div className="question">

                <h2> Fråga {questionNumber}: Which city is located in: {serverResponse?.data?.country} ? </h2>
               Om man svarar så ska count öka här: {count} 
                </div>
                
                <Options/>
                

        </React.Fragment>
    )
}; 