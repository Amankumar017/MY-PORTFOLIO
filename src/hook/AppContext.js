import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider ({children}){
    const [side, setSide] = useState(true);

    const values = {
        side, 
        setSide
    };

    return <AppContext.Provider value={values}>
        {children}
    </AppContext.Provider>
}