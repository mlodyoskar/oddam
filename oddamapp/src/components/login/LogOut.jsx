import React from "react";
import Navigation from "../Home/Navigation";
import Decoration from "../../assets/Decoration.svg";
import '../../scss/loginStyle/logOut.scss'
const LogOut = () => {
  return (
    <>
      <Navigation />
      <section className="logOut-block">
        <p className="logOut_text">Wylogowanie nastąpiło pomyślnie!</p>
        <img src={Decoration} alt="decoration"/>
        <button className="logOut_btn">Strona główna</button>
      </section>
    </>
  );
};

export default LogOut;
