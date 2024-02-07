import React from "react";
import Bear from "../../assets/Background-Form.jpg";
import "../../scss/HomeLogedStyle/formSteps.scss";
import Decoration from "../../assets/Decoration.svg";

const ThanksForm = () => {
  return (
    <>
      {" "}
      <section className="firstStep">
        <div className="firstStep_info">
          <h1 className="firstStep_info_heading">Ważne!</h1>
          <p className="firstStep_info_text">
            Podaj adres oraz termin odbioru rzeczy.
          </p>
        </div>
        <div className="firstStep_block">
          <img className="bear-bg" src={Bear} alt="Bear" />
          <div className="thanks-block">
            <p>
              Dziękujemy za przesłanie formularza Na maila prześlemy wszelkie
              informacje o odbiorze.
            </p>
            <img src={Decoration} alt="Decoration" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ThanksForm;
