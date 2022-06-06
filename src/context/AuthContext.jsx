import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false)

  const fnLogin = ()=>{
    setIsAuth("true");
    navigate("/");
  }

  const fnLogOut = ()=>{
    setIsAuth("false")
  }



  return(
    <AuthContext.Provider value={{isAuth, setIsAuth,fnLogin,fnLogOut}}>{children}</AuthContext.Provider>
  );
};
