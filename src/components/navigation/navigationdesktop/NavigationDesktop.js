import "./NavigationDesktop.css";
import { Link } from "react-router-dom";
import RoutingPath from "../../../routes/RoutingPath";
import { UserContext } from "../../../shared/provider/UserProvider";
import { useContext } from "react";
import logo512 from "../../img/logo512.png"

export const NavigationDesktop = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
    
    return (
        <nav className="nav-desktop">
            <span className="nav-desktop-logo"> <img className='icon' src ={logo512} alt = "Questionmarklogo"/> </span>
            <span> Logged in user: {authenticatedUser}</span>
            <ul className="nav-desktop-list">
                <li className="nav-desktop-link">
                <Link to={RoutingPath.logInView}>LOGIN </Link>
                </li>
                <li className="nav-desktop-link">
                <Link to={RoutingPath.quizView}>QUIZ</Link>
                </li>
                <li className="nav-desktop-link">
                <Link to={RoutingPath.highScoreView}> HIGH SCORE</Link>
                </li>
            </ul>
        </nav>
    ); 
}; 