import React from 'react';
import './TechnicalSkills.css';
import sqlserver from '../assets/sqlserver.png'
import eclipse from '../assets/eclipse.png'
import intelj from '../assets/intelj.png'
import git from '../assets/git.png'
import js from '../assets/js.png'
import java from '../assets/java.png'
import go from '../assets/go.png'
import python from '../assets/python.png'
import docker from '../assets/docker.jpg'
import kub from '../assets/kub.png'
import vs from '../assets/vs.png'
import agile from '../assets/agile.png'
import wf from '../assets/wf.png'
import aws from '../assets/aws.png'
import rest from '../assets/rest.jpeg'
import graphql from '../assets/graphql.png'
import mysql from '../assets/mysql.png'
import mongo from '../assets/mongo.png'
import react from '../assets/react.png'
import vue from '../assets/vue.png'
import nodejs from '../assets/nodejs.png'
import html from '../assets/gtml.png'
import css from '../assets/css.png'
import bs from '../assets/bs.png'
import tw from '../assets/tw.png'
import json from '../assets/json.png'
import vuetify from '../assets/vuetify.png'
import { useNavigate } from 'react-router-dom';

const TechnicalSkills = () => {
    const navigate = useNavigate();

  const handleleftArrowClick = () => {
    navigate('/education'); 
  };
  const handlerightArrowClick = () => {
    navigate('/experience'); 
  };

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
      category: "Containerization and Orchestration Tools",
      items: [
        { name: "Docker", logo: docker },
        { name: "Kubernetes", logo: kub },
      ],
    },
    {
      category: "Web Technologies",
      items: [
        { name: "HTML", logo: html },
        { name: "CSS3", logo: css },
        { name: "Bootstrap", logo: bs },
        { name: "Tailwind", logo: tw },
        { name: "Vuetify", logo: vuetify},
        { name: "JSON", logo: json },
      ],
    },
    {
      category: "Database",
      items: [
        { name: "SQL Server", logo: sqlserver },
        { name: "MySQL", logo: mysql },
        { name: "MongoDB", logo: mongo },
      ],
    },
    {
      category: "JavaScript Frameworks",
      items: [
        { name: "React.js", logo: react },
        { name: "Vue.js", logo: vue },
        { name: "Node.js", logo: nodejs },
      ],
    },
    {
      category: "Web Services",
      items: [
        { name: "RESTful", logo: rest },
        { name: "GraphQL", logo: graphql },
      ],
    },
    {
      category: "Methodologies",
      items: [
        { name: "Agile", logo: agile },
        { name: "Waterfall", logo: wf },
      ],
    },
    {
      category: "Version Control",
      items: [
        { name: "Git", logo: git },
      ],
    },
    {
      category: "Cloud Services",
      items: [
        { name: "AWS EC2, AWS Lambda, AWS S3, AWS RDS, AWS DynamoDB, AWS CloudFront", logo: aws },
      ],
    },
    {
      category: "IDEs",
      items: [
        { name: "Visual Studio Code", logo: vs },
        { name: "Eclipse IDE", logo: eclipse },
        { name: "IntelliJ IDEA", logo: intelj },
      ],
    },
  ];

  return (
    <>
    <div className="tech-skills-container">
      {skills.map((skill, index) => (
        <div className="skill-card" key={index}>
          <h3 className="skill-category">{skill.category}</h3>
          <div className="skill-logos">
            {skill.items.map((item, idx) => (
              <div className="logo-container" key={idx}>
                <img src={item.logo} alt={`${item.name} logo`} className="skill-logo" />
                <p className="skill-name">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    <section className='buttonplaces'>
        <div className='lef1'>
    <button className="arrow-button" onClick={handleleftArrowClick}>
     ←
</button>
</div>
<div className='rib1'>
    <button className="arrow-button" onClick={handlerightArrowClick}>
    →   
        </button>
        </div>
    </section>
    </>
  );
};

export default TechnicalSkills;
