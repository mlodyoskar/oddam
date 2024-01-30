import React, { useState } from "react";
import BackgroundContact from "../../assets/Background-Contact-Form.jpg";
import Decoration from "../../assets/Decoration.svg";
import "../../scss/HomeStyle/contact.scss";
import Facebook from "../../assets/Facebook.svg";
import Instagram from "../../assets/Instagram.svg";

const Contact = () => {
  const initialFormData = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Walidacja formularza
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Wysłanie danych do API
    try {
      const response = await fetch(
        "https://fer-api.coderslab.pl/v1/portfolio/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.status === 200) {
        // Obsługa poprawnego wysłania formularza
        setIsFormSubmitted(true);
        setTimeout(() => {
          setIsFormSubmitted(false);
        }, 10000);
        setFormData(initialFormData); 
        console.log("Formularz wysłany pomyślnie!");
      } else if (response.status === 400) {
        // Obsługa błędów walidacji
        const responseData = await response.json();
        setErrors(responseData.errors);
      } else {
        // Inne błędy
        console.error("Wystąpił błąd podczas wysyłania formularza");
      }
    } catch (error) {
      console.error("Wystąpił błąd:", error);
    }
  };

  const validateForm = (data) => {
    const errors = {};

    // Walidacja imienia
    if (!data.name.trim()) {
      errors.name = "Pole imienia nie może być puste";
    } else if (!/^\S+$/.test(data.name)) {
      errors.name = "Imię powinno być jednym wyrazem";
    }

    // Walidacja emaila
    if (!data.email.trim()) {
      errors.email = "Pole emaila nie może być puste";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Podaj poprawny adres email";
    }

    // Walidacja wiadomości
    if (!data.message.trim()) {
      errors.message = "Pole wiadomości nie może być puste";
    } else if (data.message.length < 120) {
      errors.message = "Wiadomość musi mieć co najmniej 120 znaków";
    }

    return errors;
  };

  return (
    <>
      <section className="form-section" id="contact">
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
          {isFormSubmitted && (
            <p className="success-message">
              Wiadomość została wysłana! <br />
              Wkrótce sie skontaktujmy.
            </p>
          )}
          <form className="form-container" onSubmit={handleSubmit}>
            <div>
              <div className="row-columns">
                <label className={`two-labels ${errors.name ? "error" : ""}`} htmlFor="text">
                  Wpisz swoje imię
                  <input
                    type="text"
                    placeholder="Krzysztof"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? "error-input" : "" }
                  />
                  {errors.name && (
                    <span className="error-message">{errors.name}</span>
                  )}
                </label>
                <label
                  className={`two-labels ${errors.email ? "error" : ""}`}
                  htmlFor="text"
                >
                  Wpisz swój Email
                  <input
                    type="text"
                    placeholder="abc@xyz.pl"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "error-input" : ""}
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                </label>
              </div>
              <div>
                <label className={`third-label ${errors.message ? "error" : ""}`}>
                  Wpisz swoją wiadomość
                  <textarea
                    type="text"
                    placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? "error-input" : ""}
                  />
                  {errors.message && (
                    <span className="error-message">{errors.message}</span>
                  )}
                </label>
              </div>
              <div className="form-btn-block">
                <button className="form-btn" type="submit">
                  Wyślij
                </button>
              </div>
            </div>
          </form>
        </div>
        <footer className="footer-block">
          <div className="Copyright-block">
            <p>Copyright by Coders Lab</p>
          </div>
          <div className="footer-icon-block">
            <img className="footer-fb-icon" src={Facebook} alt="Facebook icon" />
            <img src={Instagram} alt="Instagram icon" />
          </div>
        </footer>
      </section>
    </>
  );
};

export default Contact;
