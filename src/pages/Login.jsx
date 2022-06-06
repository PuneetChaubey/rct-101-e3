import React, { useState, useContext, createContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import style from "./Login.module.css"

const Login = () => {
  const navigate = useNavigate();
  const {fnLogin,isAuth, setIsAuth} = useContext(AuthContext)

  const handleClick = ()=>{
   
    fnLogin()
   
    
  }
  
  return (
    <div className={ style.login}>
      <input type="email" data-cy="login-email" placeholder="Enter Email..." />
      <input type="password" data-cy="login-password" placeholder="Enter Password...."/>
      <button onClick={()=>{handleClick()}} data-cy="login-submit">Log In</button>
    </div>
  );
};

export default Login;
