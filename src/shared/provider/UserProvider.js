import { useState, createContext } from "react";    

// Här skapar vi UserContext och Userprovider wrappar in allt i App.js så att det är globalt 
export const UserContext = createContext(null) 

export const UserProvider = ({children}) => {
    const [authenticatedUser, setAuthenticatedUser] = useState(null); 
    return (
        <UserContext.Provider value = {[authenticatedUser, setAuthenticatedUser]}>
            {children}
        </UserContext.Provider>
    ); 
}; 