import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate, Navigate } from "react-router-dom";
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
    <>
        {user ? <Outlet />: <Navigate to="/" />}
    </>
  )
}

export default ProtectedRoutes