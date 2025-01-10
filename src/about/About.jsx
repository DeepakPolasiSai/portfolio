import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';
import profilepicture from '../assets/profile.jpg'; 

export default function About() {
  const navigate = useNavigate();

  const handleArrowClick = () => {
    navigate('/education'); 
  };
  return (
    <>
    <section className="about-section">
      <div className="about-container">
        <div className="logo-container">
          <img src={profilepicture} alt="Deepak Polasi Sai" className="circular-logo" />
        </div>
        <div className="about-content">
          <h1 className='name'>Deepak Polasi Sai</h1>
          <h3>Full Stack Developer</h3>
          <p className='about'>
          With over 4 years of experience in full-stack development, I specialize in both front-end and back-end technologies. I am proficient in JavaScript frameworks, including MEVN (MongoDB, Express.js, Vue.js, Node.js) and MERN (MongoDB, Express.js, React.js, Node.js) stacks, which I have utilized to build dynamic single-page applications (SPAs). I have extensive experience with AWS cloud services such as EC2, S3, Lambda, RDS, and CloudFront, designing secure and scalable infrastructures to meet business needs. My front-end development skills include expertise in HTML5, CSS, Bootstrap, Tailwind, Vuetify, and JavaScript, complemented by strong database management skills with MySQL and MongoDB.
I also have hands-on expertise in containerized deployments and scaling using Docker, Kubernetes, and CI/CD tools. My knowledge of SDLC methodologies like Agile (Scrum) and Waterfall allows me to efficiently manage requirement gathering, design, testing, and implementation phases. Additionally, I am proficient in version control systems like Git and Bitbucket, and dependency management tools such as NPM, enabling seamless collaboration and efficient project delivery.
</p>
        </div>
      </div>
    </section>
    <section className='buttonplace'>
    <button className="arrow-button" onClick={handleArrowClick}>
    →
        </button>
    </section>
    </>
  );
};

