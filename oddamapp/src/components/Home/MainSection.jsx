import React from "react";
import "../../scss/HomeStyle/mainSection.scss";
import HeroImage from "../../assets/Home-Hero-Image.jpg";
import Decoration from "../../assets/Decoration.svg";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
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
              <RouterLink to="/logowanie">
                <button className="login-button">Zaloguj</button>
              </RouterLink>
              <RouterLink to="/rejestracja">
                <button className="register-button">Załóż konto</button>
              </RouterLink>
            </div>
            <nav className="navigation-container">
              <ul className="navigation-list">
                <li className="navigation-list_element">Start</li>

                <li className="navigation-list_element">
                  <ScrollLink
                    to="steps"
                    spy={true}
                    smooth={true}
                    offset={10}
                    duration={500}
                  >
                    O co chodzi?
                  </ScrollLink>
                </li>

                <li className="navigation-list_element">
                  <ScrollLink
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    O nas
                  </ScrollLink>
                </li>
                <li className="navigation-list_element"><ScrollLink
                    to="whoWeHelp"
                    spy={true}
                    smooth={true}
                    offset={15}
                    duration={500}
                    >
                  Fundacja i organizacje
                  </ScrollLink>
                </li>
                <li className="navigation-list_element"><ScrollLink
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={100}
                    duration={500}
                  >Kontakt</ScrollLink></li>
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
              <RouterLink to="/logowanie">
                <button className="first-btn">Oddaj rzeczy</button>
              </RouterLink>
              <RouterLink to="/logowanie">
                <button className="first-btn">zorganizuj zbiórkę</button>
              </RouterLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSection;
