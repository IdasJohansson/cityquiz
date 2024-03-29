import { useState, useContext } from "react"; 
import { UserContext} from "../../shared/provider/UserProvider";
import LocalStorage from "../../shared/storage/LocalStorage"; // Ligger kvar om vi skulle behöva lagra inloggad användare här? 
import "./logInView.css";
import "../../index.css"; 
import { useNavigate } from "react-router-dom";
import RoutingPath from "../../routes/RoutingPath"
import {getLoginCheck} from "../../shared/api/service/LocalhostAPIService"

export const LogInView = () => {
    const [AuthenticatedUser, setAuthenticatedUser] = useContext(UserContext); // Authenticated user lagrad globalt.
    const navigate = useNavigate(); 
    const [user, setUser] = useState({inputusername:null, inputpassword:null}); // Användare som är lagrat i databasen
    const [username, SetUserName] = useState("Guest") // Gästanvändare,(aktivera Setusername för at kunna lagra i databasen med post-funktionen i backend)
    
    const logIn = () => {
        try{
            getLoginCheck(user).then(response => {
                if(response === true){
                    setAuthenticatedUser(user.inputusername);
                    navigate(RoutingPath.quizView); // Hit skickas man efter inlogg
                    console.log(setAuthenticatedUser); 
                }
                else{
                    alert("Invalid USERNAME or PASSWORD")
                }
            });   
        }catch(error) {
            console.log(error); 
            alert("Something went wrong, please try again")
            }
        }; 

        const addUser = () => {
            try{
                setAuthenticatedUser(username); 
                //localStorage.setItem(LocalStorage.username, username);
                //SetUserName(event.target.value)
                navigate(RoutingPath.quizView);
            }catch(error){
                console.log(error); 
            }
        }; 

    return (
        <div className="container">
            <h1 className="headline">WELCOME</h1>
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
            <button className="logInButton" type="submit" onClick={() => logIn()}> LOG IN</button>  <br/>
            <button className="logInButton" type="submit" onClick={() => addUser()}> GUEST USER </button> <br/>
            (No input required for Guest User)
        </div>
    )
}

