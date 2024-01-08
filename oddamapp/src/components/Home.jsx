import React from "react";
import MainSection from "./Home/MainSection";
import ThreeColumns from "./Home/ThreeColumns";
import Steps from "./Home/Steps";
import AboutUs from "./Home/AboutUs";
import WhoWeHelp from "./Home/WhoWeHelp";
import Contact from "./Home/Contact";

const Home=()=>{
return(
    <>
    <MainSection/>
    <ThreeColumns/>
    <Steps/>
    <AboutUs/>
    <WhoWeHelp/>
    <Contact/>
    </>
);
}

export default Home;