/*import React from "react";
import profile from "../assets/profile.jpg";

const About = () => {
  return (
    <section className="about-section">
      <img src={profile} alt="Deepti" className="about-img" />
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          I’m a fresher passionate about software engineering and front-end
          development. I love building clean, user-focused web applications
          and continuously improving my skills in React, JavaScript, and
          modern UI design.
        </p>
        
      </div>
    </section>
  );
};

export default About;
*/

import React from "react";
import profile from "../assets/profile.jpg";
import { FaReact, FaFigma, FaJava, FaDatabase } from "react-icons/fa";
import { SiFlask, SiC } from "react-icons/si";

const About = () => {
  return (
    <section className="about-section">
      <img src={profile} alt="Deepti" className="about-img" />

      <div className="about-text">
        <h2 className="highlight">About Me</h2>
        <p>
  I’m a recent Computer Science graduate from Anna University, passionate about software and front-end development. I enjoy building clean, user-focused web applications and continuously honing my skills in React, JavaScript, and modern UI design.
</p>
<p>
  I completed a front-end development internship at <strong>Jindal Steel & Power</strong>, where I developed the front-end of a Survey Management System web application and worked on database connectivity and feature integration.
</p>
<p>
  Outside of coding, I enjoy painting, dancing, bowling, and binge-watching — activities that keep my creativity alive beyond the screen.
</p>


        <h3 className="highlight" style={{ marginTop: "2.5rem" }}>Skills</h3>
        <div className="skills-icons">
          <div title="Java"><FaJava className="skill-icon" /></div>
          <div title="C"><SiC className="skill-icon" /></div>
          <div title="SQL"><FaDatabase className="skill-icon" /></div>
          <div title="React"><FaReact className="skill-icon" /></div>
          <div title="Flask"><SiFlask className="skill-icon" /></div>
          <div title="Figma"><FaFigma className="skill-icon" /></div>
        </div>
      </div>
    </section>
  );
};

export default About;
