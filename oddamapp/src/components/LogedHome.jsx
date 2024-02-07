import React from "react";
import Navigation from "./Home/Navigation";
import Start from "./LogedHome/Start";
// import FormFourthStep from "./LogedHome/FormFourthStep";
import FormSummary from "./LogedHome/FormSummary";

const LogedHome = () => {
  return (
    <>
      <Navigation />
      <Start />
      <FormSummary />
    </>
  );
};

export default LogedHome;
