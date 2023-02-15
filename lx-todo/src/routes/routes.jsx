import { Routes, Route } from "react-router-dom";
import Page404 from "../pages/404";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import ProtectedRoutes from "../pages/ProtectedRoutes";
import PublicRoutes from "../pages/PublicRoutes";
import RegisterPage from "../pages/RegisterPage";
import { TodosProvider } from "../providers/TodosContext";

const AppRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<PublicRoutes />}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<Page404 />} />
         </Route>

         <Route path="/profile" element={<ProtectedRoutes />}>
            <Route
               index
               element={
                  <TodosProvider>
                     <ProfilePage />
                  </TodosProvider>
               }
            />
         </Route>
      </Routes>
   );
};

export default AppRoutes;
