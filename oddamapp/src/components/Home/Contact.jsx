import React from "react";
import BackgroundContact from "../../assets/Background-Contact-Form.jpg";
import Decoration from "../../assets/Decoration.svg";
import "../../scss/HomeStyle/contact.scss";
const Contact = () => {
  return (
    <>
      <section className="form-section">
        <div>
          <img
            className="form-bg"
            src={BackgroundContact}
            alt="background clouths"
          />
        </div>
        <div className="form-block">
          <div className="form-heading-block">
            <h1 className="form-heading">Skontaktuj się z nami</h1>
            <img src={Decoration} alt="decoration" />
          </div>
          <form className="form-container">
            <div>
              <div className="row-columns">
                <label className="two-labels" htmlFor="text">
                  Wpisz swoje imię
                  <input type="text" placeholder="Krzysztof"/>
                </label>
                <label className="two-labels" htmlFor="text">
                  Wpisz swój Email
                  <input type="text" placeholder="abc@xyz.pl" />
                </label>
              </div>
              <div>
                <label className="third-label">
                  Wpisz swoją wiadomość
                  <textarea type="text" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                </label>
              </div>
              <button>Wyślij</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
export default Contact;
