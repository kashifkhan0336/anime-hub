import "./scss/style.scss"
import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AnimeDetail from "./pages/AnimeDetail";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime/:id" element={<AnimeDetail />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
