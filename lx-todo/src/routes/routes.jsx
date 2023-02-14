import { Routes, Route } from "react-router-dom";
import Page404 from "../pages/404";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import PublicRoutes from "../pages/PublicRoutes";
import RegisterPage from "../pages/RegisterPage";

const AppRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<PublicRoutes />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<Page404 />} />
         </Route>

         <Route path="/profile" element={<ProfilePage />} />
      </Routes>
   );
};

export default AppRoutes;
