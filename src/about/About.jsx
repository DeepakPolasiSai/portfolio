import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';
import profilepicture from '../assets/profile.jpg';

export default function About() {
  // const navigate = useNavigate();

  // const handleArrowClick = () => {
  //   navigate('/education'); 
  // };

  return (
    <>
      <section className="about-section">
        <div className="about-container">
          <div className="logo-container">
            <img src={profilepicture} alt="Deepak Polasi Sai" className="circular-logo" />
          </div>
          <div className="about-content">
            <h1 className="name">Deepak Polasi Sai</h1>
            <h3>Full Stack Developer</h3>
            <p className="about">
            Passionate Full-Stack Developer with 4 years of experience in designing, developing, and optimizing scalable web applications using Vue.js, Angular, React, Node.js, Java Spring Boot, Golang, and .NET Core. Adept at building RESTful APIs, microservices architecture, and AI-powered integrations with a strong foundation in backend development, cloud deployment (AWS, Azure), and DevOps practices.

Proficient in .NET Core (MVC, Web API, Entity Framework Core, Dependency Injection, Identity Server) and Java Spring Boot (Spring MVC, Spring Security, Spring Data JPA, Spring Cloud, Spring Batch) for developing high-performance, modular, and secure enterprise applications.

Strong expertise in database management (PostgreSQL, MySQL, MongoDB, SQL Server), CI/CD pipelines (Jenkins, GitHub Actions, Azure DevOps), and containerization (Docker, Kubernetes) for automated, scalable deployments. Experienced in message brokers and event-driven architectures using Kafka and RabbitMQ.

Skilled in leading cross-functional teams, troubleshooting production issues, and implementing best software engineering practices. Passionate about performance optimization, security (OAuth2, JWT, Role-Based Access Control), and scalable system design, ensuring robust and future-proof applications.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
