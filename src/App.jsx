import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import Index from "./pages/Index";

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          
        <Route path="/" element={ <Index/> }></Route>
        <Route path="/about" element={ <AboutPage /> }></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
