import React, { useContext } from 'react'
import { Outlet, Navigate } from "react-router-dom";
import { CategoriesProvider } from '../../providers/CategoriesContext';
import { UserContext } from '../../providers/UserContext';

const ProtectedRoutes = () => {
  const { user } = useContext(UserContext);

  /*
  const navigate = useNavigate();

  useEffect(() => {
    if(!user){
        navigate('/');  
    }
  }, [])
  */

  window.location.pathname;

  return (
    <CategoriesProvider>
        {user ? <Outlet />: <Navigate to="/" />}
    </CategoriesProvider>
  )
}

export default ProtectedRoutes