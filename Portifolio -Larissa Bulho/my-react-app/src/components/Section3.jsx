import React from 'react';
import '../styles/Section3.css';

const Section3 = () => (
  <section id="section3">
    <div className="services-header">
      <h4>Meus serviços</h4>
      <h5>Como posso ajudar o seu negócio</h5>
    </div>
    <div className="services-container">
      <div className="service-box">
        <div className="service-icon">
          <img src="assets/desktop-tower-bold.png" alt="Ícone de Websites" />
        </div>
        <h6>Websites e Aplicativos</h6>
        <p>Desenvolvimento de interfaces</p>
      </div>
      <div className="service-box">
        <div className="service-icon">
          <img src="assets/hard-drives-bold.png" alt="Ícone de APIs" />
        </div>
        <h6>API e banco de dados</h6>
        <p>Criação de serviços do sistema</p>
      </div>
      <div className="service-box">
        <div className="service-icon">
          <img src="assets/infinity-bold.png" alt="Ícone de DevOps" />
        </div>
        <h6>DevOps</h6>
        <p>Gestão e infraestrutura da aplicação</p>
      </div>
    </div>
  </section>
);

export default Section3;
