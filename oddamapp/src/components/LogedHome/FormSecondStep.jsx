import React from "react";
import Bear from "../../assets/Background-Form.jpg";
import "../../scss/HomeLogedStyle/formSteps.scss";
import ArrowDown from "../../assets/Icon-Arrow-Down.svg";
import ArrowUp from "../../assets/Icon-Arrow-Up.svg";

const FormSecondStep = () => {
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
              <select className="select" for="choose">
                <option value="">— wybierz —</option>
                <option value="first">1</option>
                <option value="second">2</option>
                <option value="third">3</option>
                <option value="fourth">4</option>
                <option value="fifth">5</option>
              </select>
              <img className="select-Arrow" src={ArrowDown} alt="arrow down" />
              {/* <img className="select-ArrowUp" src={ArrowUp} alt="arrow up" /> */}
            </div>
            <div>
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
