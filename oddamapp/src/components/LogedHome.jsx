import React from "react";
import Navigation from "./Home/Navigation";
import Start from "./LogedHome/Start";
// import FormFourthStep from "./LogedHome/FormFourthStep";
// import FormSummary from "./LogedHome/FormSummary";
import ThanksForm from "./LogedHome/ThanksForm";

const LogedHome = () => {
  return (
    <>
      <Navigation />
      <Start />
      <ThanksForm />
    </>
  );
};

export default LogedHome;
