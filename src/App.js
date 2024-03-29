import "./App.css";
import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import NavBar from "./components/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/Resume";
import ResumeNew from "./components/Resume/ResumeNew";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      upadateLoad(false);
    }, 1200);
  }, []);
  
  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/project" element={<Projects/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/resume" element={<Resume/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;