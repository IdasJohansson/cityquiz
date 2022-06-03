import Axios from "axios";
import { useState, useContext } from "react"; 
import { UserContext} from "../../shared/provider/UserProvider";
import LocalStorage from "../../shared/storage/LocalStorage";
import "./logInView.css";
import "../../index.css"; 
import { useNavigate } from "react-router-dom";
import RoutingPath from "../../routes/RoutingPath"
import {getLoginCheck} from "../../shared/api/service/LocalhostAPIService"



export const LogInView = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
    const [username, setUserName] = useState(); // Lagrar och uppdaterar username 
    const [password, setPassword] = useState(); // Lagrar och uppdaterar password, ta bort denna? password är ju lagrat i databasen...?
    const navigate = useNavigate(); 
    const [user, setUser] = useState({inputusername:null, inputpassword:null});

    const [serverResponse, setServerResponse] = useState();
    // Lägg in axios get som kollar om användaren finns i databasen. Går det att logga in (om användaren finns i databasen) så sparar man användaren i localstorage
    // annars så kan man få ett felmedelande
    // Detta ska ske innan setauthenticated user, 
    const checkUserDb = async () => {
        try{
            /*
            const BASE_URL = "https://localhost:44357/api/User/CheckLogin"; 
            const response = await Axios.get(BASE_URL);
            */

            getLoginCheck(user)
           
        }catch(error) {
            console.log(error); 
            alert("Invalid USERNAME or PASSWORD")
            }
        };
    const logIn = () => {
        setUser((prevState) => ({...prevState,inputusername:username, inputpassword:password})) // Någonting är fel här hehe, hittar ej objeket 
        console.log(user)
        checkUserDb(); 
        setAuthenticatedUser(username); 
        // localStorage är det som sparas i webbläsaren 
        // lokalstorage.username är key, username är value
        localStorage.setItem(LocalStorage.username, username); // key, value
        navigate(RoutingPath.quizView); // Lägg till här vart man skickas efter inlogg. 
    }; 

    return (
        <div className="container">
            <h1 className="headline"> LOG IN</h1>
            <h2 className="userName">Username: </h2>
            <input placeholder="Enter username"
            type="text" 
            name="username" 
            onChange={(event) => setUser({...user, inputusername: event.target.value})}/> <br/>
            <h2 className="passWord">Password:</h2>
            <input placeholder="Enter password"
            type="password" 
            name="password"
            onChange={(event) => setUser({...user, inputpassword: event.target.value})}/><br/>
            <button className="logInButton" type="submit" onClick={() => logIn()}> LOG IN</button>

            {/* vi vill komma vidare till quizView efter inlogg */}
        
        </div>
    )
}

