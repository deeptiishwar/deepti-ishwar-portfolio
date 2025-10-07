import React, { useState } from "react";
import "../styles/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ theme, toggleTheme }) => {
  const [open, setOpen] = useState(false); // for mobile menu

  return (
    <nav className="navbar">
      <div className="logo">Deepti Ishwar</div>

      {/* Hamburger icon for mobile */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation links */}
      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
        <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>

        {/* Theme toggle button */}
        <li>
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
