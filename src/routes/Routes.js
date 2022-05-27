import RoutingPath from "./RoutingPath";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import { LogInView } from "../view/logInView/LogInView";
import { QuizView} from "../view/quizView/QuizView"; 
import { HighScoreView } from "../view/highScoreView/HighScoreView"; 

// Exporterar denna direkt
export const Routing = ({children}) => {
    return (
        <BrowserRouter>
        {children}
        {/* Routes ser till att endast en del läggs till i taget */}
            <Routes>
            <Route path={RoutingPath.logInView} element={<LogInView/>}/> 
            <Route exact path= {RoutingPath.quizView} element={<QuizView/>}/>
            <Route exact path= {RoutingPath.highScoreView} element={<HighScoreView/>}/>
            </Routes>
        </BrowserRouter>
    )
}