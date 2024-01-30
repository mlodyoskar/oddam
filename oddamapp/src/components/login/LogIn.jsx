import React, { useState } from "react";
import Navigation from "../Home/Navigation";
import Decoration from "../../assets/Decoration.svg";
import '../../scss/loginStyle/logIn.scss'
import { Link as RouterLink } from "react-router-dom";
import { supabase } from "../../supabase";
const LogIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateForm = () => {
    let isValid = true;
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError("Podaj poprawny adres email");
      isValid = false;
    } else {
      setEmailError("");
    }
    if (!password) {
      setPasswordError("Podaj hasło");
      isValid = false;
    } else {
      setPasswordError("");
    }
    return isValid;
  };

  const handleLogin = async (e) =>{
    e.preventDefault();

    if(validateForm()){
try{
  const {user, error} = await supabase.auth.signInWithPassword({
    email:email,
    password:password,
  });
  if (error){
    console.error('Bład logowania:', error.message);
  }else{
    console.log('Zalogowano pomyślnie', user);
  }
}catch (error){
  console.error('Bład logowania:', error.message);
}
    }else{
      console.log('Bład walidacji');
    }
  };
  

  return (
    <>
      <Navigation/>
      <section className="log-section">
        <div className="log-heading-block">
          <h1 className="log-heading">Zaloguj się</h1>
          <img src={Decoration} alt="decoration" />
        </div>
        <form className="log-form">
          <div className="input-block">
            <label>Email</label>
            <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <span className="error-message">{emailError}</span>
            </div>
            <div className="input-block">
            <label htmlFor="password">Hasło</label>
            <input type="password"  value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <span className="error-message">{passwordError}</span>
            </div>
        </form>
        <div className="log-btn-block">
        <RouterLink to="/registration">  <button className="register-btn">Załóż konto</button> </RouterLink>
        <button className="log-btn" onClick={handleLogin}>Zaloguj się </button>
        </div>
      </section>
    </>
  );
};

export default LogIn;
