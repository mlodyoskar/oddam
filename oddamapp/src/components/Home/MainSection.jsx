import React from "react";
import "../../scss/HomeStyle/MainSection.scss";
import HeroImage from "../../assets/Home-Hero-Image.jpg";
import Decoration from "../../assets/Decoration.svg";
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
              <button className="login-button">Zaloguj</button>
              <button className="register-button">Załóż konto</button>
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
            <img className='firstSection-heading-container_img' src={Decoration} alt="decoration" />
            <div className="firstSection-buttons">
              <button className="first-btn">Oddaj rzeczy</button>
              <button className="first-btn">zorganizuj zbiórkę</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSection;
