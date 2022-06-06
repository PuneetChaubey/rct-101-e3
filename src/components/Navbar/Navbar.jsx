import React, {  useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";





const Navbar = () => {
  const navigate = useNavigate()

const {isAuth,fnLogOut} =  useContext(AuthContext);

  const handleclick = ()=>{
    if(isAuth){
      fnLogOut();
      navigate("/login");
    }
     else navigate("/login")
   
  
}

  return (
    <div data-cy="navbar">
      <Link to="/" data-cy="navbar-home-link">Home</Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}</span>
      <button onClick={handleclick} data-cy="navbar-login-logout-button">{isAuth ? "logut":"login"}</button>
    </div>
  );
};

export default Navbar;
