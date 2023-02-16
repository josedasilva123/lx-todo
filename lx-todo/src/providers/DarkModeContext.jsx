import { createContext, useState, useEffect } from "react";

//Criar contexto
export const DarkModeContext = createContext({});

//Criar componente de provider
export const DarkModeProvider = ({ children }) => {
   // useState, useEffect
   const localDarkMode = localStorage.getItem("@DARKMODE");
   
   const [darkMode, setDarkMode] = useState(localDarkMode ? localDarkMode : "FALSE");

   useEffect(() => {
      localStorage.setItem("@DARKMODE", darkMode);
   }, [darkMode]);

   return <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>{children}</DarkModeContext.Provider>;
};
