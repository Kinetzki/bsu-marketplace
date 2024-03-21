import { useState } from 'react'
import {Routes, Route} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import LogIn from './pages/LogIn';
import Register from './pages/Register';

function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="/login" element={<LogIn/>}/>
        <Route exact path="/register" element={<Register/>}/>
      </Routes>
    </>
  )
}

export default App
