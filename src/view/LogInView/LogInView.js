import { useState, useContext } from "react"; 
import { UserContext} from "../../shared/provider/UserProvider";
import LocalStorage from "../../shared/storage/LocalStorage";

export const LogInView = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
    const [username, setUserName] = useState("Anna"); // Lagrar och uppdaterar username 
    const [password, setPassword] = useState(); // Lagrar och uppdaterar password

    const logIn = () => {
        setAuthenticatedUser(username); 
        // localStorage är ett namn som finns i webbläsaren 
        // lokalstorage.username är key, username är value
        localStorage.setItem(LocalStorage.username, username); // key, value
    }; 

    return (
        <div>
            <h1> LOG IN</h1>
            <h2>Username: {username}</h2>
            <input placeholder="Enter username"
            type="text" 
            name="username" 
            onChange={(event) => setUserName(event.target.value)}/> <br/>
            <h2>Password:</h2>
            <input placeholder="Enter password"
            type="password" 
            name="password"
            onChange={(event) => setPassword(event.target.value)}/><br/>
            <button type="submit" onClick={()=> logIn()}> LOG IN</button>
        </div>
    )
}

