import LoginForm from "../../components/forms/LoginForm";
import { Link } from "react-router-dom";

const LoginPage = () => {
   return (
      <div>
         <h1>Login</h1>

         <LoginForm />

         <p>ou</p>

         <Link to="/register">Cadastre-se</Link>
      </div>
   );
};

export default LoginPage;
