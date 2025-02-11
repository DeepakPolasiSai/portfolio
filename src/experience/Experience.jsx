import React, { useState } from "react";
import "./Experience.css";

export default function Experience() {
  const [modalContent, setModalContent] = useState(null);

  const experiences = [
    {
      company: "Real Life Church – Clermont, Florida",
      title: "Full Stack Developer Intern",
      duration: "August 2024 - December 2024",
      details: [
        "Project: Church Web Application",
        "Developed a modern church web application that allows users to sign up, access event updates, and engage with church activities online.",
        "Technologies Used:",
        "- Frontend: Vue.js, Vuex, Tailwind CSS, JavaScript",
        "- Backend: Node.js, Express.js",
        "- Database: MongoDB, Firebase (for real-time updates)",
        "- Authentication & Security: JWT Authentication, OAuth",
        "- DevOps & Cloud: Firebase Hosting, GitHub Actions",
        "- Performance Optimization: Lazy loading, caching strategies, mobile-first design",
        "Key Contributions:",
        "Developed a modern church web application using Vue.js (Frontend) & Node.js (Backend), enabling seamless event updates and community engagement.",
        "Implemented multi-language Bible support (100+ languages), enhancing accessibility and inclusivity.",
        "Designed a scalable cloud-based backend using Node.js, Express.js, MongoDB, and Firebase for real-time updates and user data storage.",
        "Integrated JWT authentication & OAuth for secure and seamless cross-device login.",
        "Optimized performance by reducing page load times by 30%, increasing user retention through a responsive mobile-friendly UI."
      ],
    },
    {
      company: "Accenture – Chennai, Tamil Nadu",
      title: "Application Development Analyst",
      duration: "December 2021 - December 2023",
      details: [
        "Project: Internal Job Portal & AI-Powered Resume Screening",
        "Led the development of an enterprise-level job portal that streamlined recruitment processes.",
        "Technologies Used:",
        "- Frontend: Angular, TypeScript, Bootstrap",
        "- Backend: Java (Spring Boot, Spring MVC, Spring Security)",
        "- Database: PostgreSQL, Hibernate ORM",
        "- AI & Messaging: Apache Kafka (AI-driven job matching), RabbitMQ",
        "- Authentication & Security: OAuth2, JWT, RBAC",
        "- Cloud & DevOps: AWS (EC2, RDS, S3), Docker, Kubernetes, Jenkins",
        "Key Contributions:",
        "Led development of an internal job portal, streamlining recruitment processes and increasing hiring efficiency by 30%.",
        "Built a high-performance backend with Java Spring Boot, REST APIs, Spring Security (JWT), Hibernate ORM, PostgreSQL for scalability & security.",
        "Integrated AI-driven resume screening via Apache Kafka, enabling automated skill matching & job recommendations.",
        "Automated interview scheduling & offer letter generation, reducing manual effort by 25% using Spring Scheduler & Spring Mail.",
        "Migrated frontend to Angular, improving page load speeds by 20% for a seamless user experience.",
        "Orchestrated AWS cloud deployment: EC2 (backend hosting), RDS (PostgreSQL), S3 (resume storage) for high availability & scalability."
      ],
    },
    {
      company: "Infosys – Chennai, Tamil Nadu",
      title: "Full Stack Developer Intern",
      duration: "January 2021 - December 2021",
      details: [
        "Project: AI-Powered Learning Management System (LMS)",
        "Developed an LMS platform with AI-driven learning recommendations.",
        "Technologies Used:",
        "- Frontend: React.js, Redux, React Hooks",
        "- Backend: .NET Core (ASP.NET Core MVC, Web API)",
        "- Database: PostgreSQL (EF Core, Repository Pattern)",
        "- Real-Time Communication: SignalR, WebSockets",
        "- AI & Messaging: Apache Kafka (AI-driven recommendations)",
        "- Authentication & Security: Identity Server, OAuth2, JWT",
        "- Cloud & DevOps: Azure, GitHub Actions",
        "Key Contributions:",
        "Developed an enterprise-grade Learning Management System (LMS) using .NET Core, enabling streamlined course management, student enrollment, and progress tracking.",
        "Backend Development: Built a scalable .NET Core Web API with ASP.NET Core MVC, following Domain-Driven Design (DDD) and Microservices Architecture.",
        "Authentication & Security: Implemented JWT-based authentication, OAuth2, and Identity Server for role-based access control (RBAC).",
        "Database Management: Used Entity Framework Core (EF Core) with PostgreSQL, optimizing queries and data access using Repository & Unit of Work patterns.",
        "AI-Driven Course Recommendations: Integrated Apache Kafka to track user engagement and implemented AI-based course recommendations for personalized learning experiences.",
        "Real-Time Updates & Notifications: Used SignalR and WebSockets to push live course progress tracking and notifications, reducing admin workload by 35%.",
        "Frontend Development: Developed a React.js UI with Redux & React Hooks, ensuring a responsive and real-time learning interface.",
        "CI/CD & Cloud Deployment: Deployed on Azure (App Services, SQL Database, Blob Storage) with Azure DevOps for CI/CD, ensuring 99.9% deployment success rate and zero downtime."
      ],
    },
    {
      company: "Kaashiv Infotech – Chennai, Tamil Nadu",
      title: "Front-End Developer Intern",
      duration: "May 2019 - October 2019",
      details: [
        "Project: Oil Field Data Management Application",
        "Developed a Vue.js web app to visualize and track oil field data.",
        "Technologies Used:",
        "- Frontend: Vue.js, Vuex, Bootstrap",
        "- Backend: Node.js, Express.js",
        "- Database: MySQL, NetSuite API",
        "- GPS & Mapping: Google Maps API, Leaflet.js",
        "- Performance Optimization: Vuex state management, caching",
        "Key Contributions:",
"Developed a web application for oil company clients using Vue.js, ensuring seamless display and organization of raw on-site oil field data in a structured and user-friendly format. ",
"Integrated NetSuite API to fetch existing data and store it in a relational database, enabling real-time data retrieval and efficient management of oil field operations. ",
"Implemented a GPS-based distance calculation feature, allowing users to enter latitude and longitude and instantly compute the distance between one oil field and the next, improving field navigation and logistics planning. ",
"Designed and optimized the front-end UI, ensuring data alignment and structured visualization for better readability and decision making.",
"Enhanced performance and user experience by implementing Vue.js state management (Vuex), improving data handling and reducing API load times by 20%." 
      ],
    },
  ];

  const openModal = (experience) => {
    setModalContent(experience);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <>
        <hr className="section-divider" />
   <section className='designtech'>
      <h2>Professional Experience</h2>
      </section>
    <div className="experience-section">
      {experiences.map((exp, index) => (
        <div className="experience-card" key={index}>
          <h2 className="company-name">{exp.company}</h2>
          <h3 className="job-title">{exp.title}</h3>
          <p className="job-duration">{exp.duration}</p>
          <button className="preview-button" onClick={() => openModal(exp)}>
            Click to Preview
          </button>
        </div>
      ))}

      {modalContent && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h2>{modalContent.company} - {modalContent.title}</h2>
            <p>{modalContent.duration}</p>
            {modalContent.details.map((line, idx) => (
              <p key={idx} className={line.includes("Technologies Used") || line.includes("Key Contributions") ? "bold-text" : "modal-details"}>
                {line}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
    </>
  );
}
