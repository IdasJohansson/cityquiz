import { useState, createContext } from "react";    

// Här skapar vi CountContext och Countprovider wrappar in allt i App.js så att det är globalt 
export const CountContext = createContext(0) 

export const CountProvider = ({children}) => {
    const [count, setCount] = useState(0);
    return (
        <CountContext.Provider value = {[count, setCount]}>
            {children}
        </CountContext.Provider>
    ); 
}; 
