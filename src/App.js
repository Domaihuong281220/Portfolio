import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import Login from "./pages/Login/Login";
import MathGamee from "./pages/MathGame/Mathgamee";
import Profile from "./pages/Profile/Profile";
import ReadingGame from "./pages/ReadingGame/ReadingGame";
import ColorsGame from "./pages/ReadingGame/MiniGame/ColorsPage";
import NumbersGame from "./pages/ReadingGame/MiniGame/NumberPage";
import AlphabetsGame from "./pages/ReadingGame/MiniGame/AlphabetsPage";
import AnimalsGame from "./pages/ReadingGame/MiniGame/AnimalsPage";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/readinggame" element={<ReadingGame />} />
          <Route path="/colorsgame" element={<ColorsGame />} />
          <Route path="/numbersgame" element={<NumbersGame />} />
          <Route path="/alphabetsgame" element={<AlphabetsGame />} />
          <Route path="/animalsgame" element={<AnimalsGame />} />
          <Route path="*" element={<Navigate to="/"/>} />
          <Route path="/MathGamee" element={<MathGamee/>} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
