import RoutingPath from "./RoutingPath";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import { LogInView } from "../view/logInView/LogInView";
import { QuizView} from "../view/quizView/QuizView"; 
import { HighScoreView } from "../view/highScoreView/HighScoreView"; 
import { useContext, useEffect } from "react";
import { UserContext } from "../shared/provider/UserProvider";


// Exporterar denna direkt
export const Routing = ({children}) => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

    const isUserAuthenticated = () => {
        const loggedInUser = localStorage.getItem(localStorage.username); // Hämtar användarnamn från localStorage
        setAuthenticatedUser(loggedInUser);
    };

    useEffect(() => {
        isUserAuthenticated();
    }, []);
 
    
    const blockIfAuthenticated = (view) => {
        return authenticatedUser ? <LogInView /> : view;
    };

    const authenticationRequired = (view) => {
        return authenticatedUser ? view : <QuizView/>;
        }


    return (
        <BrowserRouter>
        {children}
        {/* Routes ser till att endast en del läggs till i taget */}
            <Routes>
            <Route path={RoutingPath.logInView} element={<LogInView/>}/> 
            <Route
            exact 
            path={RoutingPath.logInView}
            element={blockIfAuthenticated(<LogInView />)}
            />

            <Route exact path= {RoutingPath.quizView} element={<QuizView/>}/>
            <Route
            exact
            path= {RoutingPath.quizView} 
            element={authenticationRequired(<QuizView />)}
            />

            <Route exact path= {RoutingPath.highScoreView} element={<HighScoreView/>}/>
            <Route
            exact
            path= {RoutingPath.highScoreView}
            element={authenticationRequired(<HighScoreView />)}
            />
           
            </Routes>
        </BrowserRouter>
    )
}