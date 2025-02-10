import React, { useState, useEffect } from "react";
import './TechnicalSkills.css';
import sqlserver from '../assets/sqlserver.png';
import eclipse from '../assets/eclipse.png';
import intelj from '../assets/intelj.png';
import git from '../assets/git.png';
import js from '../assets/js.png';
import java from '../assets/java.png';
import go from '../assets/go.png';
import python from '../assets/python.png';
import docker from '../assets/docker.jpg';
import kub from '../assets/kub.png';
import vs from '../assets/vs.png';
import agile from '../assets/agile.png';
import wf from '../assets/wf.png';
import aws from '../assets/aws.png';
import rest from '../assets/rest.jpeg';
import graphql from '../assets/graphql.png';
import mysql from '../assets/mysql.png';
import mongo from '../assets/mongo.png';
import react from '../assets/react.png';
import vue from '../assets/vue.png';
import nodejs from '../assets/nodejs.png';
import html from '../assets/gtml.png';
import css from '../assets/css.png';
import bs from '../assets/bs.png';
import tw from '../assets/tw.png';
import json from '../assets/json.png';
import vuetify from '../assets/vuetify.png';



export default function TechnicalSkills() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "JavaScript", logo: js },
        { name: "Python", logo: python },
        { name: "Java", logo: java },
        { name: "Golang", logo: go },
      ],
    },
    {
      category: "Containerization & Orchestration",
      items: [
        { name: "Docker", logo:docker  },
        { name: "Kubernetes", logo: kub },
      ],
    },
    {
      category: 'Web Technologies',
      items: [
        { name: 'HTML', logo: html },
        { name: 'CSS3', logo: css },
        { name: 'Bootstrap', logo: bs },
        { name: 'Tailwind', logo: tw },
        { name: 'Vuetify', logo: vuetify },
        { name: 'JSON', logo: json },
      ],
    },
    {
      category: 'Database',
      items: [
        { name: 'SQL Server', logo: sqlserver },
        { name: 'MySQL', logo: mysql },
        { name: 'MongoDB', logo: mongo },
      ],
    },
    {
      category: 'JavaScript Frameworks',
      items: [
        { name: 'React.js', logo: react },
        { name: 'Vue.js', logo: vue },
        { name: 'Node.js', logo: nodejs },
      ],
    },
    {
      category: 'Web Services',
      items: [
        { name: 'RESTful', logo: rest },
        { name: 'GraphQL', logo: graphql },
      ],
    },
    {
      category: 'Methodologies',
      items: [
        { name: 'Agile', logo: agile },
        { name: 'Waterfall', logo: wf },
      ],
    },
    {
      category: 'Version Control',
      items: [{ name: 'Git', logo: git }],
    },
    {
      category: 'Cloud Services',
      items: [
        { name: 'AWS EC2, Lambda, S3, RDS, DynamoDB, CloudFront', logo: aws },
      ],
    },
    {
      category: 'IDEs',
      items: [
        { name: 'Visual Studio Code', logo: vs },
        { name: 'Eclipse', logo: eclipse },
        { name: 'IntelliJ IDEA', logo: intelj },
      ],
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % skills.length;
      console.log("Next Index:", nextIndex);
      return nextIndex;
    });
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      const prevIndexAdjusted =
        prevIndex === 0 ? skills.length - 1 : prevIndex - 1;
      console.log("Previous Index:", prevIndexAdjusted);
      return prevIndexAdjusted;
    });
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);
    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {skills.map((skill, index) => (
          <div
            className={`carousel-slide ${
              index === currentIndex ? "active" : "inactive"
            }`}
            key={index}
          >
            {index === currentIndex && (
              <>
                <h3 className="carousel-category">{skill.category}</h3>
                <div className="carousel-items">
                  {skill.items.map((item, idx) => (
                    <div className="carousel-item" key={idx}>
                      <img
                        src={item.logo}
                        alt={`${item.name} logo`}
                        className="carousel-logo"
                      />
                      <p className="carousel-name">{item.name}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button className="carousel-button" onClick={handlePrevious}>
          &#8592;
        </button>
        <button className="carousel-button" onClick={handleNext}>
          &#8594;
        </button>
      </div>
      <div className="carousel-dots">
        {skills.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active-dot" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}