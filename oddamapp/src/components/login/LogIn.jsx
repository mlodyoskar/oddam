import React from "react";
import Navigation from "../Home/Navigation";
import Decoration from "../../assets/Decoration.svg";
import '../../scss/loginStyle/logIn.scss'
import { Link as RouterLink } from "react-router-dom";
const LogIn = () => {
  return (
    <>
      <Navigation/>
      <section className="log-section">
        <div className="log-heading-block">
          <h1 className="log-heading">Zaloguj się</h1>
          <img src={Decoration} alt="decoration" />
        </div>
        <form className="log-form">
          <div className="input-block">
            <label>Email</label>
            <input type="text"/>
            </div>
            <div className="input-block">
            <label htmlFor="password">Hasło</label>
            <input type="password"/>
            </div>
        </form>
        <div className="log-btn-block">
        <RouterLink to="/registration">  <button className="register-btn">Załóż konto</button> </RouterLink>
        <button className="log-btn">Zaloguj się </button>
        </div>
      </section>
    </>
  );
};

export default LogIn;
