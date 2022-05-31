import { useContext } from "react";
import { UserContext } from "../../shared/provider/UserProvider";
import "./Profile.css";
import { ProfileDropDown } from "././ProfileDropDown";

export const Profile = () => {
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
  return (
    <div className="profile">
      <img
        className="profile-img"
        src="https://thispersondoesnotexist.com/image"
        alt="AI generated person"
      />
      <span>{authenticatedUser}</span>
      <ProfileDropDown />
    </div>
  );
};
