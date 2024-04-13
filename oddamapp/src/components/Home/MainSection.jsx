import React from "react";
import "../../scss/HomeStyle/MainSection.scss";
import HeroImage from "../../assets/Home-Hero-Image.jpg";
import Decoration from "../../assets/Decoration.svg";
import { Link as RouterLink } from "react-router-dom";
import Navigation from "./Navigation";
const MainSection = () => {
 return (
  <>
   <section className="homeSectionContainer">
    <div className="homeSectionContainer_image">
     <img src={HeroImage} alt="losowe rzeczy" />
    </div>
    <div>
     <Navigation />
     <div className="firstSection-heading-container">
      <h1 className="firstSection-heading">
       Zacznij pomagać <br /> Oddaj niechciane rzeczy w zaufane ręce
      </h1>
      <img className="firstSection-heading-container_img" src={Decoration} alt="decoration" />
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
