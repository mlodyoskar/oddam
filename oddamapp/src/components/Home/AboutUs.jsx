import React from "react";
import "../../scss/HomeStyle/aboutUs.scss";
import Decoration from "../../assets/Decoration.svg";
import Signature from "../../assets/Signature.svg";
import People from "../../assets/People.jpg";
const AboutUs = () =>{
return(
    <>
    <section className="aboutUs" id="about">
<div className="aboutUs_container">
    <h1 className="aboutUs_heading">
        O nas
    </h1>
    <img className="aboutUs_decoration" src={Decoration} alt='decoration'/>
    <p className="aboutUs_description">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
    <img className='aboutUs_signature' src={Signature} alt='signature'/>
</div>
<div className="img-container">
    <img className="img-people" src={People} alt='people'/>
</div>
    </section>
    </>
);
};

export default AboutUs;