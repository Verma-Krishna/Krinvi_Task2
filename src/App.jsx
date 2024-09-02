import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Footer from "./Pages/Footer";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}
