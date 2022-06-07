import "./quiz.css"
import React, { useState, useContext,createContext , useEffect } from "react"; 
import { useNavigate } from "react-router-dom";
import RoutingPath from "../../routes/RoutingPath"
import { Map } from "../map/Map";
import LocalhostAPI from "../../shared/api/LocalhostAPI"; // Denna ska användas om man kör axios get? 
import {getQuestion, getAnswerCheck} from "../../shared/api/service/LocalhostAPIService"
import Axios from "axios";

// Lägg till en useEffect() som renderar om sidan varje gång man har svarat på en fråga. 
// Byt ut FetchCountry knappen mot en useEffect() 
// Hämta lat och lng from question objectet. 
// Gör så att rätt svar visas på map när man har tryckt på ett option. 
// Gör så att nästa fråga visas när man har tryckt på ett option oavsett true eller false i CheckAnswer
// ---> Svagheter: Slumpen kan göra att "rätt" svar visas på två ställen men bara ett är rätt. 

export const Quiz = () => {
// Count är antal rätt svar, svarar man rätt ökar count med 1.
const [count, setCount] = useState(0);
// Lägg till useContext här för att kunna skicka vidare värdet till highscore
const UserCount = createContext(null);
// Vi börjar på fråga 1 därav useState(1)
const [questionNumber, setQuestionNumber] = useState(1);
// När man har svarat på 10 frågor så skickas man till highscoreView i arrowfunctionen TenQuestion() 
const navigate = useNavigate(); 
/*
// tror att vi ska ta bort denna rackaren :) 
const [question, setQuestion] = useState({id:null,countryname:null, cityname:null, long:null, lati:null });
*/

// Kaaaaanske ska använda denna? 
const [question, setQuestion] = useState({}); 
const [answer, setAnswer] = useState({
    id: null,
    answerSelected: null,
  });

// Här i når man city och country, long och latitude
// Detta är "rätt land och stad"
const [serverResponse, setServerResponse] = useState();
// Detta är random city2
const [serverResponse2, setServerResponse2] = useState();
// Detta är random city3
const [serverResponse3, setServerResponse3] = useState();

// Detta är randomgeneratorn som slumpar fram landet samt den rätta staden i backend
const fetchData = async () => {
    const API_URL ="https://localhost:5001/api/Question/Random";
    try {
            const response = await Axios.get(API_URL);
            setServerResponse(response);
          } catch (error) {
            alert("Error retrieving desired data from server: " + error);
          }
        
};

// Slumpar fram city2
const fetchData2 = async () => {
    const API_URL ="https://localhost:5001/api/Question/Random";
    try {
            const response2 = await Axios.get(API_URL);
            setServerResponse2(response2);
          } catch (error) {
            alert("Error retrieving desired data from server: " + error);
          }   
};

// Slumpar fram city3
const fetchData3 = async () => {
    const API_URL ="https://localhost:5001/api/Question/Random";
    try {
            const response3 = await Axios.get(API_URL);
            setServerResponse3(response3);
          } catch (error) {
            alert("Error retrieving desired data from server: " + error);
          }   
};


// Wrappar alla fetch, denna function anropas varje gång man trycker på en svarsknapp samt i useeffect när man kommer in på sidan. 
const WrapperFunction = () => {
    fetchData(); 
    fetchData2();
    fetchData3();
}; 

// Anropar WrapperFunction direkt när man kommer in på sidan. 
useEffect(() => {
 WrapperFunction(); 
  }, []);


    // fel 415 unsupported media type, hämtar fel format...Behöver troligtvis dekonstukta objektet?
    /*
    const CheckAnswer = () => {
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
    
    
    
    const CheckAnswer = () => {
        // Metod ovan är utkommenterad just nu pga att den inte funkar helt hundra :D 
        setCount(count +1)
        // När question är lika med 10 så ska man skickas till highscoreView.
        setQuestionNumber(questionNumber +1)
        TenQuestions(); 
        // Skriver 
        console.log(questionNumber)
        // I denna ska vi också lägga till så att cordinaterna till maps, läggs in så att rätt svar visas på kartan. 
        
        // Renderar om land och city options genom de tre olika apianropen... 
        WrapperFunction(); 
    }

    const TenQuestions = () => {
        if(questionNumber === 10)
        {
            navigate(RoutingPath.highScoreView)
        }
    }
    
    
    // unKnown styr switch-satsen. 
    const unKnown =   Math.floor(Math.random() * 3) + 1; // Slumpar ett nummer mellan 1 och 3

   const Options =() => {
        switch (unKnown) {
            case 1:
                return (
                <> 
                <div className="question">

                <h2>Which city is located in: {serverResponse?.data?.country} ? </h2>
                Case 1. Om man svarar så ska count öka här: {count} 
                </div>
                {/* lägg till onChange={(event) => setInput(event.target.value)*/}
                <div className="option-buttons"> 
                <button className="option-btn" value={serverResponse?.data?.city} onClick={()=> CheckAnswer()}> {serverResponse?.data?.city} </button>
                <button className="option-btn" value={serverResponse2?.data?.city} onClick={() => CheckAnswer()}>{serverResponse2?.data?.city}</button>
                <button className="option-btn" value={serverResponse3?.data?.city} onClick={() => CheckAnswer()}>{serverResponse3?.data?.city}</button>
                </div>
                </>
                )
            case 2:
                return (
                <> 
                <div className="question">

                <h2>Which city is located in: {serverResponse?.data?.country} ? </h2>
                Case 2. Om man svarar så ska count öka här:{count} 
                </div>   
                <div className="option-buttons">
                <button className="option-btn" value={serverResponse2?.data?.city} onClick={()=> CheckAnswer()}> {serverResponse2?.data?.city} </button>
                <button className="option-btn" value={serverResponse3?.data?.city} onClick={() => CheckAnswer()}>{serverResponse3?.data?.city}</button>
                <button className="option-btn" value={serverResponse?.data?.city} onClick={() => CheckAnswer()}>{serverResponse?.data?.city}</button>
                </div>
                </>
                )

            case 3: 
                return (
                <> 
                <div className="question">

                <h2>Which city is located in: {serverResponse?.data?.country} ? </h2>
                Case 3. Om man svarar så ska count öka här: {count} 
                </div>
                <div className="option-buttons">
                <button className="option-btn" value={serverResponse3?.data?.city} onClick={()=> CheckAnswer()}> {serverResponse3?.data?.city} </button>
                <button className="option-btn" value={serverResponse?.data?.city} onClick={() => CheckAnswer()}>{serverResponse?.data?.city}</button>
                <button className="option-btn" value={serverResponse2?.data?.city} onClick={() => CheckAnswer()}>{serverResponse2?.data?.city}</button>
                 </div>
                 </>
            )
            default: 
                <p>Something went wrong...</p>
               break; 
        }
    }
    return (
        <React.Fragment> 
            <Map lat={57.7088} lng={11.9745} /> 
             {/* 
            <Map lat={+serverResponse?.data?.longitude} lng={+serverResponse?.data?.latitude} /> */}
        <Options/>
        </React.Fragment>
    )
    }; 



    // Här ligger test-kod. 
    /*
useEffect(() => {
    fetch("https://localhost:5001/api/Question/Random")
      .then((response) => response.json())
      .then((data) => setQuestion(data));
  }, []);


  const checkAnswer = (e) => {
    setAnswer({
      id: question.id,
      answerSelected: e,
    });
    console.log(answer);
    console.log(question);
  };

  const Options =() => {
      return (
        <div>
        {console.log(question.country)}
        <h2>What city is located in {question.country}?</h2>
        <button
          onClick={(e) => checkAnswer(e.target.value)}
          value={question.city}
        >
          {question.city}
        </button>
        <button
          onClick={(e) => checkAnswer(e.target.value)}
          value={question.city}
        >
          {question.city}
        </button>
        <button
          onClick={(e) => checkAnswer(e.target.value)}
          value={question.city}
        >
          {question.city}
        </button>
      </div>
      )
  }
*/


