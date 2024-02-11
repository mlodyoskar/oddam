import React, { useState } from "react";
import Bear from "../../assets/Background-Form.jpg";
import "../../scss/HomeLogedStyle/formSteps.scss";

const FormFirstStep = ({ onNext }) => {
  const [formData, setFormData] = useState({
    giveaway: {
      reusableClothes: false,
      clothesToDiscard: false,
      toys: false,
      books: false,
      others: false,
    },
  });

  const handleCheckboxChange = (category) => {
    setFormData((prevData) => ({
      ...prevData,
      giveaway: {
        ...prevData.giveaway,
        [category]: !prevData.giveaway[category],
      },
    }));
  };
  const handleNext = () => {
    onNext();
  };

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
          <img className="bear-bg" src={Bear} alt="Bear" />
          <div className="firstStep-form">
            <p className="whichStep">Krok 1/4</p>
            <h1 className="firstStep-heading">Zaznacz co chcesz oddać:</h1>
            <div className="checkbox-block">
              <input
                className="checkbox"
                type="checkbox"
                name="reusableClothes"
                checked={formData.giveaway.reusableClothes}
                onChange={() => handleCheckboxChange("reusableClothes")}
              />
              <label htmlFor="ubrania">
                ubrania, które nadają się do ponownego użycia
              </label>
            </div>
            <div className="checkbox-block">
              <input
                type="checkbox"
                name="clothesToDiscard"
                checked={formData.giveaway.clothesToDiscard}
                onChange={() => handleCheckboxChange("clothesToDiscard")}
              />
              <label htmlFor="ubrania">ubrania, do wyrzucenia</label>
            </div>
            <div className="checkbox-block">
              <input
                type="checkbox"
                name="books"
                checked={formData.giveaway.toys}
                onChange={() => handleCheckboxChange("toys")}
              />
              <label htmlFor="ubrania">zabawki</label>
            </div>
            <div className="checkbox-block">
              <input
                type="checkbox"
                name=""
                checked={formData.giveaway.books}
                onChange={() => handleCheckboxChange("books")}
              />
              <label htmlFor="ubrania">książki</label>
            </div>
            <div className="checkbox-block">
              <input
                type="checkbox"
                name="others"
                checked={formData.giveaway.others}
                onChange={() => handleCheckboxChange("others")}
              />
              <label htmlFor="ubrania">Inne</label>
            </div>
            <button className="form-btn" onClick={handleNext}>
              Dalej
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormFirstStep;
