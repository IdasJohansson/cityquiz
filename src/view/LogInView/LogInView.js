import { useState, useContext } from "react"; 
import { UserContext} from "../../shared/provider/UserProvider";
import LocalStorage from "../../shared/storage/LocalStorage";
import "./logInView.css";
import "../../index.css"; 



export const LogInView = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
    const [username, setUserName] = useState(); // Lagrar och uppdaterar username 
    const [password, setPassword] = useState(); // Lagrar och uppdaterar password

    const logIn = () => {
        // Lägg in axios get. 

        setAuthenticatedUser(username); 
        // localStorage är ett namn som finns i webbläsaren 
        // lokalstorage.username är key, username är value
        localStorage.setItem(LocalStorage.username, username); // key, value
    }; 

    return (
        <div className="container">
            <h1 className="headline"> LOG IN</h1>
            <h2 className="userName">Username: {username}</h2>
            <input placeholder="Enter username"
            type="text" 
            name="username" 
            onChange={(event) => setUserName(event.target.value)}/> <br/>
            <h2 className="passWord">Password:</h2>
            <input placeholder="Enter password"
            type="password" 
            name="password"
            onChange={(event) => setPassword(event.target.value)}/><br/>
            <button className="logInButton" type="submit" onClick={()=> logIn()}> LOG IN</button>

            {/* vi vill komma till quizView vid inlogg */}
        
         
        </div>
    )
}

