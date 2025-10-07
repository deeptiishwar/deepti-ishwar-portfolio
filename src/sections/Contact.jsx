/*import React from "react";

const Contact = () => {
  return (
    <footer className="contact-section">
      <h2>Work With Me</h2>
      <p>Let’s connect and create something impactful!</p>
      <div className="contact-info">
        <p>Email: <a href="mailto:deeptimona07@gmail.com">deeptimona07@gmail.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/deeptiishwar" target="_blank">linkedin.com/in/deeptiishwar</a></p>
        <p>Instagram: <a href="https://instagram.com/deeptiishwar" target="_blank">@deeptiishwar</a></p>
      </div>
    </footer>
  );
};

export default Contact;*/
import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="highlight">Contact Me</h2>
      <p>Let’s connect and collaborate!</p>
      <div className="hero-icons">
        <a href="https://github.com/deeptiishwar" target="_blank"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/deeptiishwar" target="_blank"><FaLinkedin /></a>
       <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=deeptimona07@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaEnvelope />
</a>


       
      </div>
      <div className="phone-contact">
        <FaPhoneAlt className="phone-icon" />
        <a href="tel:+917305420837" className="phone-number">
          7305420837
        </a>
      </div>
      <p className="footer-text">© 2025 Deepti Ishwar</p>
    </section>
  );
};

export default Contact;
