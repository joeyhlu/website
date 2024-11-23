import React from "react";
import Star from "./components/Star";
import "./App.css";
import TypingText from "./components/TypingText";

import { Routes, Route, Link, Router } from "react-router-dom";
import NavBar from "./components/navbar";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import Projects from "./pages/projects";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/blogs" element={<Blogs />} /> 
        <Route path="/projects" element={<Projects />} /> 
      </Routes>
    </div>
  );
}

export default App;