import React from "react";
import Bear from "../../assets/Background-Form.jpg";
import "../../scss/HomeLogedStyle/formSteps.scss";
import Shirt from "../../assets/Icon-1.svg";
import Circle from "../../assets/Icon-4.svg";
const FormSummary = ({ onNext, onPrev }) => {
  const handleNext = () => {
    onNext();
  };
  const handlePrev = () => {
    onPrev();
  };
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
              <div className="summary-form-containers">
                <div className="summary-block">
                  <h1 className="donate-heading-form">Adres odbioru:</h1>
                  <table className="table-block">
                    <tbody>
                      <tr>
                        <td>Ulica</td>
                        <td>Prosta 51</td>
                      </tr>
                      <tr>
                        <td>Miasto</td>
                        <td>Warszawa</td>
                      </tr>
                      <tr>
                        <td>Kod pocztowy</td>
                        <td>90-209</td>
                      </tr>
                      <tr>
                        <td>Numer telefonu</td>
                        <td>473 839 483</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="summary-block">
                  <h1 className="donate-heading-form">Termin odbioru:</h1>
                  <table className="table-block">
                    <tbody>
                      <tr>
                        <td>Data</td>
                        <td>17.10.2019</td>
                      </tr>
                      <tr>
                        <td>Godzina</td>
                        <td>17:30</td>
                      </tr>
                      <tr>
                        <td>Uwagi dla kuriera</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="form-btns fourth">
              <button className="form-btn" onClick={handlePrev}>
                Wstecz
              </button>
              <button className="form-btn" onClick={handleNext}>
                Potwierdzam
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormSummary;
