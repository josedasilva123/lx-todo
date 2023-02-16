import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const CategoriesContext = createContext({});

export const CategoriesProvider = ({ children }) => {
   const [categories, setCategories] = useState([]);

   useEffect(() => {
      const token = localStorage.getItem("@TOKEN");
      if (token) {
         const loadCategories = async () => {
            try {
               const response = await api.get("/categories", {
                  headers: {
                     auth: token,
                  },
               });
               setCategories(response.data.categories);
            } catch (error) {
               console.log(error);
            }
         };
         loadCategories();
      }
   }, []);

   //formData - slug, label
   const categoriesCreate = async (formData) => {
      try {
         const token = localStorage.getItem("@TOKEN");
         //Back-end
         const response = await api.post("/categories", formData, {
            headers: {
               auth: token,
            },
         });

         //Futuro toast
         console.log(response.data.message);

         //Front-end
         setCategories([...categories, response.data.category]);
      } catch (error) {}
   };

   //categoryId - string
   const categoriesRemove = async (categoryId) => {
      try {
         const token = localStorage.getItem("@TOKEN");
         //Back-end
         const response = await api.delete(`/categories/${categoryId}`, {
            headers: {
               auth: token,
            },
         });

         //Front-end
         const newCategories = categories.filter((category) => category.id !== categoryId);
         setCategories(newCategories);
      } catch (error) {
         console.log(error);
      }
   };

   return <CategoriesContext.Provider value={{ categories, categoriesCreate, categoriesRemove }}>{children}</CategoriesContext.Provider>;
};
