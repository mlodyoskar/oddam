import React, { useState } from "react";
import Navigation from "../Home/Navigation";
import Decoration from "../../assets/Decoration.svg";
import "../../scss/loginStyle/logIn.scss";
import { Link as RouterLink, Navigate  } from "react-router-dom";
import { supabase } from "../../supabase";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [redirect, setRedirect] = useState(false);

  const validateForm = () => {
    let isValid = true;

    //walidacja emaila
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError("Podaj poprawny adres email");
      isValid = false;
    } else {
      setPasswordError("");
    }
    //walidacja hasła
    if (!password || password.length < 6) {
      setPasswordError("Hasło powinno mieć wiecej niż 6 znaków");
      isValid = false;
    } else {
      setPasswordError("");
    }
    //walidacja powtórzenia hasła
    if (password !== confirmPassword) {
      setConfirmPasswordError("Hasła nie są takie same");
      isValid = false;
    } else {
      setConfirmPassword("");
    }
    return isValid;
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const { user, error } = await supabase.auth.signUp({
          email: email,
          password: password,
        });
        if (error) {
          console.error("bład rejestracji:", error.message);
        } else {
          console.log("rejestracja udana:", user);
           setRedirect(true);
        }
      } catch (error) {
        console.error("Błąd rejestracji:", error.message);
      }
    } else {
      console.log("bład walidacji");
    }
  };
//clsx, classNames
  return (
    <>
     {redirect && <Navigate to="/logowanie" />}
      <Navigation />
      <section className="log-section">
        <div className="log-heading-block">
          <h1 className="log-heading">Zarejestruj się</h1>
          <img src={Decoration} alt="decoration" />
        </div>
        <form className="log-form">
          <div className="input-block">
            <label>Email</label>
            <input className={emailError ? "error-input" : ""} type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <span className="error-message">{emailError}</span>
          </div>
          <div className="input-block">
            <label htmlFor="password">Hasło</label>
            <input className={passwordError ? "error-input" : ""}  type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <span className="error-message">{passwordError}</span>
          </div>
          <div className="input-block">
            <label htmlFor="password">powtórz Hasło</label>
            <input className={confirmPasswordError ? "error-input" : ""} type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
            <span className="error-message">{confirmPasswordError}</span>
          </div>
        </form>
        <div className="log-btn-block">
          <RouterLink to="/logowanie">
           
            <button className="register-btn">Zaloguj się</button>
          </RouterLink>
          <button className="log-btn" onClick={handleRegistration}>Załóż konto</button>
        </div>
      </section>
    </>
  );
};

export default Registration;
