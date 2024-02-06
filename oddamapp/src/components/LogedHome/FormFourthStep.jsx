import React, { useState } from "react";
import Bear from "../../assets/Background-Form.jpg";
import "../../scss/HomeLogedStyle/formSteps.scss";
import ArrowDown from "../../assets/Icon-Arrow-Down.svg";

const FormFourthStep = () => {
  const [activeOption, setActiveOption] = useState(null);
  const [arrowDown, setArrowDown] = useState(false);

  const handleOptionClick = (option) => {
    setActiveOption(option === activeOption ? null : option);
  };

  return (
    <>
      <section className="firstStep">
        <div className="firstStep_info">
          <h1 className="firstStep_info_heading">Ważne!</h1>
          <p className="firstStep_info_text">
            Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w
            wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji
            bądź celu ich pomocy.
          </p>
        </div>
        <div className="firstStep_block">
          <img className="bear-bg" src={Bear} alt="Bear" />
          <div className="firstStep-form">
            <p className="whichStep">Krok 3/4</p>
            <h1 className="firstStep-heading">
              Podaj adres oraz termin odbioru rzecz przez kuriera
            </h1>
            <div className="inputs-containers">
              <div>
                <h1>Adres odbioru:</h1>
                <div>
                  <label>Ulica</label>
                  <input></input>
                </div>
                <div>
                  <label>Miasto</label>
                  <input></input>
                </div>
                <div>
                  <label>Ulica:</label>
                  <input></input>
                </div>
                <div>
                  <label>Kod pocztowy</label>
                  <input></input>
                </div>
                <div>
                  <label>Numer telefonu</label>
                  <input></input>
                </div>
              </div>
              <div>
                <h1>Adres odbioru:</h1>
                <div>
                  <label>Data</label>
                  <input></input>
                </div>
                <div>
                  <label>Godzina</label>
                  <input></input>
                </div>
                <div>
                  <label>Uwagi dla kuriera</label>
                  <textarea></textarea>
                </div>
              </div>
            </div>

            <div className="form-btns thirds">
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
