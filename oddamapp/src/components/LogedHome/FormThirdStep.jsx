import React, { useState } from "react";
import Bear from "../../assets/Background-Form.jpg";
import "../../scss/HomeLogedStyle/formSteps.scss";
import ArrowDown from "../../assets/Icon-Arrow-Down.svg";

const FormThirdStep = ({ onNext, onPrev }) => {
  const [activeOption, setActiveOption] = useState(null);
  const [arrowDown, setArrowDown] = useState(false);
  const handleNext = () => {
    onNext();
  };

  const handlePrev = () => {
    onPrev();
  };
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
            <h1 className="firstStep-heading">Lokalizacja:</h1>
            <div className="select-block">
              <select
                className="select"
                for="choose"
                onClick={() => setArrowDown(!arrowDown)}
              >
                <option className="option" value="">
                  — wybierz —
                </option>
                <option className="option" value="first">
                  Poznań
                </option>
                <option className="option" value="second">
                  Warszawa
                </option>
                <option className="option" value="third">
                  Kraków
                </option>
                <option className="option" value="fourth">
                  Wrocław
                </option>
                <option className="option" value="fifth">
                  Katowice
                </option>
              </select>
              <img
                className={`select-Arrow ${arrowDown ? "upside-down" : ""}`}
                src={ArrowDown}
                alt="arrow down"
              />
            </div>
            <div className="thirdStepForm">
              <h1 className="thirdStep-heading">Komu chcesz pomóc?</h1>
              <div className="thirdStepForm_options">
                <span
                  className={`thirdStepForm_choose-option ${
                    activeOption === "dzieciom" ? "active" : ""
                  }`}
                  onClick={() => handleOptionClick("dzieciom")}
                >
                  dzieciom
                </span>
                <span
                  className={`thirdStepForm_choose-option ${
                    activeOption === "samotnym matkom" ? "active" : ""
                  }`}
                  onClick={() => handleOptionClick("samotnym matkom")}
                >
                  samotnym matkom
                </span>
                <span
                  className={`thirdStepForm_choose-option ${
                    activeOption === "bezdomnym" ? "active" : ""
                  }`}
                  onClick={() => handleOptionClick("bezdomnym")}
                >
                  bezdomnym
                </span>
                <span
                  className={`thirdStepForm_choose-option ${
                    activeOption === "niepełnosprawnym" ? "active" : ""
                  }`}
                  onClick={() => handleOptionClick("niepełnosprawnym")}
                >
                  niepełnosprawnym
                </span>
                <span
                  className={`thirdStepForm_choose-option ${
                    activeOption === "osobom starszym" ? "active" : ""
                  }`}
                  onClick={() => handleOptionClick("osobom starszym")}
                >
                  osobom starszym
                </span>
              </div>
              <div className="thirdStepForm-inputBlock">
                <h1 className="thirdStep-heading">
                  Wpisz nazwę konkretnej organizacji (opcjonalnie)
                </h1>
                <input
                  className="ThirdStep-Input"
                  type="text"
                  htmlFor="text"
                ></input>
              </div>
            </div>

            <div className="form-btns thirds">
              <button className="form-btn" onClick={handlePrev}>
                Wstecz
              </button>
              <button className="form-btn" onClick={handleNext}>
                Dalej
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormThirdStep;
