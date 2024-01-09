import React from "react";
import "../../scss/HomeStyle/mainSection.scss";
import HeroImage from "../../assets/Home-Hero-Image.jpg";
import Decoration from "../../assets/Decoration.svg";
import { Link } from "react-router-dom";
const MainSection = () => {
  return (
    <>
      <section className="homeSectionContainer">
        <div className="homeSectionContainer_image">
          <img src={HeroImage} alt="losowe rzeczy" />
        </div>
        <div>
          <div>
            <div className="login-container">
              <Link to="/logowanie">
                <button className="login-button">Zaloguj</button>
              </Link>
              <Link to="/rejestracja">
                <button className="register-button">Załóż konto</button>
              </Link>
            </div>
            <nav className="navigation-container">
              <ul className="navigation-list">
                <li className="navigation-list_element">Start</li>
                <li className="navigation-list_element">O co chodzi?</li>
                <li className="navigation-list_element">O nas</li>
                <li className="navigation-list_element">
                  Fundacja i organizacje
                </li>
                <li className="navigation-list_element">Kontakt</li>
              </ul>
            </nav>
          </div>
          <div className="firstSection-heading-container">
            <h1 className="firstSection-heading">
              Zacznij pomagać <br /> Oddaj niechciane rzeczy w zaufane ręce
            </h1>
            <img
              className="firstSection-heading-container_img"
              src={Decoration}
              alt="decoration"
            />
            <div className="firstSection-buttons">
             <Link to='/logowanie'><button className="first-btn">Oddaj rzeczy</button></Link>
             <Link to='/logowanie'><button className="first-btn">zorganizuj zbiórkę</button></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSection;
