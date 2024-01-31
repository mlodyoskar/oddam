import React from "react";
import Bear from "../../assets/Background-Form.jpg";
const FormFirstStep = () => {
  return (
    <>
      <section className="firstStep">
        <div className="firstStep_info">
          <h1 className="firstStep_info_heading">Ważne!</h1>
          <p className="firstStep_info_text">
            Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
            wiedzieć komu najlepiej je przekazać.
          </p>
        </div>
        <div className="firstStep_block">
          <div className="firstStep-form">
            <p className="whichStep">Krok 1/4</p>
            <h1 className="firstStep-heading">Zaznacz co chcesz oddać:</h1>
            <div>
                <input type="checkbox" name="giveaway"/>
                <label htmlFor="ubrania">ubrania, które nadają się do ponownego użycia</label>
            </div>
            <div>
                <input type="checkbox" name="giveaway"/>
                <label htmlFor="ubrania">ubrania, do wyrzucenia</label>
            </div>
            <div>
                <input type="checkbox" name="giveaway"/>
                <label htmlFor="ubrania">zabawki</label>
            </div>
            <div>
                <input type="checkbox" name="giveaway"/>
                <label htmlFor="ubrania">książki</label>
            </div>
            <div>
                <input type="checkbox" name="giveaway"/>
                <label htmlFor="ubrania">Inne</label>
            </div>
          </div>
          <div>
            <img src={Bear} alt="Bear" />
          </div>
        </div>
      </section>
    </>
  );
};

export default FormFirstStep;
