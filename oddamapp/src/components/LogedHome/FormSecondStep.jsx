import React, { useState } from "react";
import Bear from "../../assets/Background-Form.jpg";
import "../../scss/HomeLogedStyle/formSteps.scss";
import ArrowDown from "../../assets/Icon-Arrow-Down.svg";

const FormSecondStep = () => {
  const [arrowDown, setArrowDown] = useState(false);

  const handleArrowClick = () => {
    setArrowDown(!arrowDown);
  };
  return (
    <>
      <section className="firstStep">
        <div className="firstStep_info">
          <h1 className="firstStep_info_heading">Ważne!</h1>
          <p className="firstStep_info_text">
            Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję
            jak poprawnie spakować rzeczy znajdziesz TUTAJ.
          </p>
        </div>
        <div className="firstStep_block">
          <img className="bear-bg" src={Bear} alt="Bear" />
          <div className="firstStep-form">
            <p className="whichStep">Krok 2/4</p>
            <h1 className="firstStep-heading">
              Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
            </h1>
            <div className="select-block">
              <label className="select-label">Liczba 60l worków:</label>
              <select
                className="select"
                for="choose"
                onClick={() => setArrowDown(!arrowDown)}
              >
                <option className="option" value="">
                  — wybierz —
                </option>
                <option className="option" value="first">
                  1
                </option>
                <option className="option" value="second">
                  2
                </option>
                <option className="option" value="third">
                  3
                </option>
                <option className="option" value="fourth">
                  4
                </option>
                <option className="option" value="fifth">
                  5
                </option>
              </select>
              <img
                className={`select-Arrow ${arrowDown ? "upside-down" : ""}`}
                src={ArrowDown}
                alt="arrow down"
              />
            </div>
            <div className="form-btns">
              <button className="form-btn">Wstecz</button>
              <button className="form-btn">Dalej</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormSecondStep;
