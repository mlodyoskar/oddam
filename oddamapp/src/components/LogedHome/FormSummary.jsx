import React from "react";
import Bear from "../../assets/Background-Form.jpg";
import "../../scss/HomeLogedStyle/formSteps.scss";
import Shirt from "../../assets/Icon-1.svg";
import Circle from "../../assets/Icon-4.svg";
const FormSummary = () => {
  return (
    <>
      <section className="firstStep">
        <div className="firstStep_block">
          <img className="bear-bg" src={Bear} alt="Bear" />
          <div className="firstStep-form">
            <h1 className="firstStep-heading">Podsumowanie Twojej darowizny</h1>
            <div className="summary-containers">
              <div className="donate-blocks">
                <h1 className="donate-heading">Oddajesz:</h1>
                <div className="donate-block">
                  <img className="donate-img" src={Shirt} alt="shirt" />
                  <p className="donate-paragraph">
                    4 worki, ubrania w dobrym stanie, dzieciom
                  </p>
                </div>
                <div className="donate-block">
                  <img className="donate-img" src={Circle} alt="circle" />
                  <p className="donate-paragraph">dla lokalizacji: Warszawa</p>
                </div>
              </div>
            </div>

            <div className="form-btns fourth">
              <button className="form-btn">Wstecz</button>
              <button className="form-btn">Potwierdzam</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormSummary;
