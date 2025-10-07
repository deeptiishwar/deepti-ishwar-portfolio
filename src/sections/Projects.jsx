/*import React from "react";

const projects = [
  {
    title: "Pragmatic Cyber Data Retrieval & Attack Code Generation",
    description:
      "Cybersecurity search engine fetching real-time threat data, identifying attacks, and generating simulated attack code using AJAX and JavaScript.",
  },
  
  {
    title: "Face Recognition Attendance System",
    description: "Web-based attendance system using face recognition, KNN & Haar Cascade.",
  },
  {
    title: "Canteen Management System",
    description: "User-friendly platform for college students to place food orders online for pickup using Java Swing.",
  },
  {
    title: "Survey Management System",
    description: "React + Flask web app for survey creation, management and analytics.",
  },
  {
    title: "Cancer Detection App",
    description: "Android app for detecting cancer from medical images using ML models.",
  }
];
    
const Projects = () => {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;*/

import React from "react";

const projects = [
  {
    title: "Pragmatic Cyber Data Retrieval & Attack Code Generation",
    description:
      "Cybersecurity search engine fetching real-time threat data, identifying attacks, and generating simulated attack code using AJAX and JavaScript.",
  },
  
  {
    title: "Face Recognition Attendance System",
    description: "Web-based attendance system using face recognition, KNN & Haar Cascade.",
  },
  {
    title: "Canteen Management System",
    description: "User-friendly platform for college students to place food orders online for pickup using Java Swing.",
  },
  {
    title: "Survey Management System",
    description: "React + Flask web app for survey creation, management and analytics.",
  },
  {
    title: "Cancer Detection App",
    description: "Android app for detecting cancer from medical images using ML models.",
  }
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="highlight">Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

