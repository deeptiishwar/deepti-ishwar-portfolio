/*import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import "./styles/global.css";
import "./styles/navbar.css";

function App() {
  const [theme, setTheme] = useState("dark");

  // Load saved theme (if exists)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // Apply the theme and save to localStorage
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <Background />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div id="home" className="section"><Hero /></div>
      <div id="about" className="section"><About /></div>
      <div id="projects" className="section"><Projects /></div>
      <div id="contact" className="section"><Contact /></div>
    </>
  );
}

export default App; */


import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import "./styles/global.css";
import "./styles/Navbar.css";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      {/* 👇 pass theme here */}
      <Background theme={theme} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div id="home" className="section"><Hero /></div>
      <div id="about" className="section"><About /></div>
      <div id="projects" className="section"><Projects /></div>
      <div id="contact" className="section"><Contact /></div>
    </>
  );
}

export default App;
