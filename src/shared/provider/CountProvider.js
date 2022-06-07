import { useState, createContext } from "react";    

// Här skapar vi CountContext och Countprovider wrappar in allt i App.js så att det är globalt 
export const CountContext = createContext(null) 

export const CountProvider = ({children}) => {
    const [count, setCount] = useState(null);
    return (
        <CountContext.Provider value = {[count, setCount]}>
            {children}
        </CountContext.Provider>
    ); 
}; 
