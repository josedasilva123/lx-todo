import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
   const navigate = useNavigate();
   /* null, objeto */
   // um para vários (Global)
   const [user, setUser] = useState(null);

   useEffect(() => {
      const token = localStorage.getItem("@TOKEN");
      if (token) {
         const userAutoLogin = async () => {
            try {
               const response = await api.get("/users/profile", {
                  headers: {
                     auth: token,
                  },
               });
               setUser(response.data);
               navigate("/profile");
            } catch (error) {
               console.log(error);
            }
         };

         userAutoLogin();
      }
   }, []);

   //formData: name, email, password
   const userRegister = async (formData) => {
      try {
         const response = await api.post("/users", formData);
         //futuro toast
         console.log(response.data.message);

         navigate("/");
      } catch (error) {
         console.log(error);
      }
   };

   //formData: email, password
   const userLogin = async (formData) => {
      try {
         const response = await api.post("/users/login", formData);
         setUser(response.data.user);
         localStorage.setItem("@TOKEN", response.data.token);
         //Possibilidades (explore outras possibilidades)
         navigate("/profile");
      } catch (error) {
         console.log(error);
      }
   };

   const userLogout = () => {
      setUser(null);
      localStorage.removeItem("@TOKEN");
      navigate("/");
   };

   return <UserContext.Provider value={{ user, userRegister, userLogin, userLogout }}>{children}</UserContext.Provider>;
};
