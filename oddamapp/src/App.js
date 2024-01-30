import React from 'react';
import './scss/App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import LogIn from './components/login//LogIn';
import Registration from './components/login/Registration';
import LogOut from './components/login/LogOut';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/logowanie' element={<LogIn/>}/>
    <Route path='/registration' element={<Registration/>}/>
    <Route path= '/logOut' element={<LogOut/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
