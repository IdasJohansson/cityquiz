import "./ProfileDropDown.css";
import { useNavigate } from "react-router-dom";
import RoutingPath from "../../../../routes/RoutingPath";
import { useContext } from "react";
import { UserContext } from "../../../../shared/provider/UserProvider";
import LocalStorage from "../../../../shared/services/LocalStorage";

export const ProfileDropDown = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
    const navigate = useNavigate();

    const logOut = () => {
        LocalStorage.removeItem(LocalStorage.username);
        setAuthenticatedUser(false);
        navigate(RoutingPath.logInView);
    };

    return (
        <div className="profiledropdown">
            <p>Name</p>
            <p>{authenticatedUser}</p>
            <p onClick={() => navigate(RoutingPath.profileView)}> Profile </p>
            <button onClick={()=>logOut()}>Log out</button>
        </div>
    );

    };
