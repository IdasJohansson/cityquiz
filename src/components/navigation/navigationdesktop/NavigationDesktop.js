import "./NavigationDesktop.css";
import { Link } from "react-router-dom";
import RoutingPath from "../../../routes/RoutingPath";
import { UserContext } from "../../../shared/provider/UserProvider";
import { useContext } from "react";

export const NavigationDesktop = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
    
    return (
        <nav className="nav-desktop">
            <span className="nav-desktop-logo"> Insert logo here </span>
            <span> Loged in user: {authenticatedUser}</span>
            <ul className="nav-desktop-list">
                <li>
                <Link to={RoutingPath.logInView}>LOGIN </Link>
                </li>
                <li>
                <Link to={RoutingPath.quizView}>QUIZ</Link>
                </li>
                <li>
                <Link to={RoutingPath.highScoreView}> HIGH SCORE</Link>
                </li>
            </ul>
        </nav>
    ); 
}; 