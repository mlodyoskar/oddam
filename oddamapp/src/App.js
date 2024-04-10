import React from "react";
import "./scss/App.scss";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LogIn from "./components/login//LogIn";
import Registration from "./components/login/Registration";
import LogOut from "./components/login/LogOut";
import LogedHome from "./components/LogedHome";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logowanie" element={<LogIn />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/logOut" element={<LogOut />} />
          <Route path="/LogedSection" element={<LogedHome />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
