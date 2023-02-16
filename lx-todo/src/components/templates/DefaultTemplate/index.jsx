import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../../providers/DarkModeContext";

const DefaultTemplate = ({ children }) => {
   const { setDarkMode } = useContext(DarkModeContext);
   return (
      <>
         <header>
            <nav>
               <ul>
                  <li>
                     <Link to="/">Home</Link>
                  </li>
                  <li>
                     <Link to="/login">Login</Link>
                  </li>
                  <li>
                     <Link to="/register">Register</Link>
                  </li>
               </ul>
            </nav>
         </header>
         <main>{children}</main>
         <button onClick={() => setDarkMode((darkMode) => darkMode === "TRUE" ? "FALSE" : "TRUE")}>Alterar tema</button>
      </>
   );
};

export default DefaultTemplate;
