import React from "react";
import FormImg from "../../assets/Form-Hero-Image.jpg";
import Decoration from "../../assets/Decoration.svg";
import '../../scss/HomeLogedStyle/Start.scss'
const Start = () => {
  return (
    <>
      <section className="start-section">
        <img className='start-img' src={FormImg} alt="clouth" />
        <div className="stepsContainer">
          <h1 className="start-heading">Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM</h1>
          <img src={Decoration} alt="decoration" />
          <p className="start-text">Wystarczą 4 proste kroki:</p>
          <div className="fourSteps">
            <div className="step-block">
              <h1 className="step-block-number">1</h1>
              <p className="steps-text">Wybierz rzeczy</p>
            </div>
            <div className="step-block">
              <h1 className="step-block-number">2</h1>
              <p className="steps-text">Spakuj je w worki</p>
            </div>
            <div className="step-block">
              <h1 className="step-block-number">3</h1>
              <p className="steps-text"> Wybierz fundacje</p>
            </div>
            <div className="step-block">
              <h1 className="step-block-number">4</h1>
              <p className="steps-text">Zamów kuriera</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Start;
