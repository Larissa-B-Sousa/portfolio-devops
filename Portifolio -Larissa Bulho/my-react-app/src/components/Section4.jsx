import React from 'react';
import '../styles/Section4.css';

const Section4 = () => (
  <section id="section4">
    <div className="contact-header">
      <h4>Contato</h4>
      <h5>Gostou do meu trabalho?</h5>
      <p>Entre em contato ou acompanhe as minhas redes sociais!</p>
    </div>
    <div className="contact-links">
      <a href="https://www.linkedin.com/in/larissa-bulho-5b1a80207" target="_blank" className="contact-box">
        <img src="assets/linkedin-logo-bold.png" alt="LinkedIn Ícone" className="icon-left" />
        <span>LinkedIn</span>
        <img src="assets/arrow-up-right-bold.png" alt="Ícone de seta" className="icon-right" />
      </a>
      <a href="https://www.instagram.com" target="_blank" className="contact-box">
        <img src="assets/instagram-logo-bold.png" alt="Instagram Ícone" className="icon-left" />
        <span>Instagram</span>
        <img src="assets/arrow-up-right-bold.png" alt="Ícone de seta" className="icon-right" />
      </a>
      <a href="https://github.com" target="_blank" className="contact-box">
        <img src="assets/github-logo-bold.png" alt="GitHub Ícone" className="icon-left" />
        <span>GitHub</span>
        <img src="assets/arrow-up-right-bold.png" alt="Ícone de seta" className="icon-right" />
      </a>
      <a href="mailto:larissabulho2017@gmail.com" className="contact-box">
        <img src="assets/envelope-simple-bold.png" alt="E-mail Ícone" className="icon-left" />
        <span>E-mail</span>
        <img src="assets/arrow-up-right-bold.png" alt="Ícone de seta" className="icon-right" />
      </a>
    </div>
  </section>
);

export default Section4;
