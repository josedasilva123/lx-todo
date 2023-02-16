import React from "react";
import { DarkModeProvider } from "./DarkModeContext";
import { UserProvider } from "./UserContext";

const Providers = ({ children }) => {
   return (
      <UserProvider>
         <DarkModeProvider>{children}</DarkModeProvider>
      </UserProvider>
   );
};

export default Providers;
