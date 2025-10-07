/*import React from "react";

const Hero = () => {
  return (
    <section className="hero-section">
      <h1>Hello, I’m <span className="highlight">Deepti Ishwar</span></h1>
      <p>Software Engineer | Frontend Developer | CSE @ Anna University</p>
    </section>
  );
};

export default Hero;*/
/*import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("deeptiishwar@gmail.com");
    alert("Email copied to clipboard!");
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Hello, I’m <span className="highlight">Deepti Ishwar</span></h1>
        <p>Software Engineer | Frontend Developer | CSE @ Anna University</p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View My Projects</a>
          <button className="btn-secondary" onClick={handleCopyEmail}>Copy Email</button>
        </div>
        

        
      </div>
    </section>
  );
};

export default Hero;*/

import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import resume from "../assets/Deepti-Ishwar-Resume.pdf"; // 👈 make sure your resume file is placed inside /src/assets

const Hero = () => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("deeptiishwar@gmail.com");
    alert("Email copied to clipboard!");
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
          Hello, I’m <span className="highlight">Deepti Ishwar</span>
        </h1>
        <p>Software Development | Frontend Developer | CSE @ Anna University</p>

        <div className="hero-buttons">
         <a href="#contact" className="btn-primary">
  Contact Me
</a>

          

          <button className="btn-secondary" onClick={handleCopyEmail}>
            Copy Email
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

