import React from 'react';
import './Experience.css';
import { useNavigate } from 'react-router-dom';

const Experience = () => {
        const navigate = useNavigate();
    
      const handleleftArrowClick = () => {
        navigate('/skills'); 
      };
      const handlerightArrowClick = () => {
        navigate('/certification'); 
      };

  return (
    <>
    <div className="experience-container">
      <div className='one'>
      <div className="card card-0">
        <h3>Real Life Church</h3>
        <p className="duration">Aug 2024 – Dec 2024</p>
        <h4>MEVN Stack Developer Intern</h4>
        <ul>
          <li>Developed a dynamic and user-friendly website for Real Life Church using the MEVN stack.</li>
          <li>Actively participated in Agile Scrum ceremonies and used Bitbucket for task planning and collaboration.</li>
          <li>Designed and implemented responsive web pages with HTML5, CSS3, and Vue.js.</li>
          <li>Integrated AWS services for secure and scalable data storage and retrieval.</li>
        </ul>
        <p className="environment">
          <strong>Environment:</strong> MEVN Stack, HTML5, CSS3, AWS, Bitbucket, Tailwind CSS
        </p>
      </div>
      <div className='larrow'>
      <p className='arrowsizel blink'>↰</p>
      </div>
      </div>

      <div className='two'>
      <div className='rarrow'>
      <p className='arrowsizer blink'>↱</p>
      </div>
      <div className="card card-1">
        <h3>Accenture</h3>
        <p className="duration">Dec 2021 – Dec 2023</p>
        <h4>Application Development Analyst</h4>
        <ul>
          <li>Contributed to the development of an internal Accenture job portal.</li>
          <li>Designed dynamic web pages for job postings using JavaScript, HTML5, and Bootstrap.</li>
          <li>Automated resume data extraction and integration into MySQL databases.</li>
          <li>Streamlined interview scheduling and automated offer letter generation.</li>
          <li>Utilized Azure Pipelines for CI/CD and followed Agile methodology.</li>
        </ul>
        <p className="environment">
          <strong>Environment:</strong> React.js, HTML5, MySQL, Azure Pipelines, Git
        </p>
      </div>
      </div>

      <div className='three'>
      <div className="card card-2">
        <h3>Infosys</h3>
        <p className="duration">Jan 2021 – Dec 2021</p>
        <h4>Full Stack Developer Intern</h4>
        <ul>
          <li>Collaborated on a dynamic e-commerce application using JavaScript, HTML, CSS, and Node.js.</li>
          <li>Integrated Stripe Payment API for secure payment processing.</li>
          <li>Developed search functionalities for accurate product results.</li>
          <li>Applied best practices for coding, debugging, and performance optimization.</li>
        </ul>
        <p className="environment">
          <strong>Environment:</strong> JavaScript, HTML, CSS, Node.js, Stripe Payment API, Git
        </p>
      </div>
      <div className='larrow'>
      <p className='arrowsizel blink'>↰</p>
      </div>
      </div>

      <div className='four'>
      <div className='rarrow'>
      <p className='arrowsizer blink'>↱</p>
      </div>
      <div className="card card-3">
        <h3>Kaashiv Infotech</h3>
        <p className="duration">May 2019 – Oct 2019</p>
        <h4>Performance Analyst Intern</h4>
        <ul>
          <li>Conducted performance analysis using LoadRunner and compiled detailed reports.</li>
          <li>Analyzed household appliance power usage data and forecasted customer behavior.</li>
          <li>Applied data analytics techniques to optimize energy usage.</li>
          <li>Gained hands-on experience in data processing, statistical analysis, and reporting to support decision-making processes.</li>
        </ul>
        <p className="environment">
          <strong>Environment:</strong> LoadRunner, Data Analytics, Excel, Python
        </p>
      </div>
    </div>
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

export default Experience;
