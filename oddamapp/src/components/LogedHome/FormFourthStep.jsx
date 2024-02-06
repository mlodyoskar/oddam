import React from "react";
import Bear from "../../assets/Background-Form.jpg";
import "../../scss/HomeLogedStyle/formSteps.scss";

const FormFourthStep = () => {
  return (
    <>
      <section className="firstStep">
        <div className="firstStep_info">
          <h1 className="firstStep_info_heading">Ważne!</h1>
          <p className="firstStep_info_text">
            Podaj adres oraz termin odbioru rzeczy.
          </p>
        </div>
        <div className="firstStep_block">
          <img className="bear-bg" src={Bear} alt="Bear" />
          <div className="firstStep-form">
            <p className="whichStep">Krok 4/4</p>
            <h1 className="firstStep-heading">
              Podaj adres oraz termin odbioru rzecz przez kuriera
            </h1>
            <div className="inputs-containers">
              <div className="input-first-container">
                <h1 className="input-heading">Adres odbioru:</h1>
                <div className="input-container">
                  <label>Ulica</label>
                  <input></input>
                </div>
                <div className="input-container">
                  <label>Miasto</label>
                  <input></input>
                </div>
                <div className="input-container">
                  <label>Ulica:</label>
                  <input></input>
                </div>
                <div className="input-container">
                  <label>Kod pocztowy</label>
                  <input></input>
                </div>
                <div className="input-container">
                  <label>Numer telefonu</label>
                  <input></input>
                </div>
              </div>
              <div className="input-second-container">
                <h1 className="input-heading">Adres odbioru:</h1>
                <div className="input-container">
                  <label>Data</label>
                  <input></input>
                </div>
                <div className="input-container">
                  <label>Godzina</label>
                  <input></input>
                </div>
                <div className="input-container">
                  <label>Uwagi dla kuriera</label>
                  <textarea className="textarea-input"></textarea>
                </div>
              </div>
            </div>

            <div className="form-btns fourth">
              <button className="form-btn">Wstecz</button>
              <button className="form-btn">Dalej</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormFourthStep;
