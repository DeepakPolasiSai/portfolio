import React from 'react';
import './Education.css';
import srm from '../assets/srm.png';
import fiu from '../assets/fiu.png';

const Education = () => {
  return (
    <>
      <section className="education-section">
        <section className='design'>
      <h2>Education</h2>
      </section>
        {/* FIU Education Item */}
        <div className="education-item">
          <div className="education-details">
            <div className="clg">
              <img src={fiu} alt="FIU logo" className="imgsize" />
              <h3>Florida International University, Miami, FL</h3>
            </div>
            <h4>Master of Science in Computer Science</h4>
            <p>
              Courses: Introduction to Algorithms, Advanced Software Engineering,
              Software Design and Analysis, Principles of DBMS.
            </p>
          </div>
          <div className="education-date">
            <p>Jan 2024 – Apr 2025 (Expected)</p>
          </div>
        </div>

        {/* SRM Education Item */}
        <div className="education-item">
          <div className="education-details">
            <div className="clg">
              <img src={srm} alt="SRM logo" className="imgsize" />
              <h3>SRM Institute of Science and Technology, Chennai, India</h3>
            </div>
            <h4>Bachelor of Technology in Computer Science and Engineering</h4>
            <p>
              Courses: Operating Systems, Python, Java, Intro to AI.
            </p>
          </div>
          <div className="education-date">
            <p>May 2017 – Jun 2021</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
