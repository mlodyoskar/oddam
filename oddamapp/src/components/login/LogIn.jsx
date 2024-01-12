import React from "react";
import Navigation from "../Home/Navigation";
import Decoration from "../../assets/Decoration.svg";
import '../../scss/loginStyle/logIn.scss'
const LogIn = () => {
  return (
    <>
      <Navigation />
      <section className="log-section">
        <div className="log-heading-block">
          <h1 className="log-heading">Zaloguj się</h1>
          <img src={Decoration} alt="decoration" />
        </div>
        <form className="log-form">
            <label>Email</label>
            <input type="text"/>
            <label htmlFor="password">Hasło</label>
            <input type="password"/>
        </form>
        <div>
            <button>Załóż konto</button>
            <button>Zaloguj się</button>
        </div>
      </section>
    </>
  );
};

export default LogIn;
