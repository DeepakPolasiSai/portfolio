import React from 'react';
import './Education.css';
import srm from '../assets/srm.png';
import fiu from '../assets/fiu.png';
import { useNavigate } from 'react-router-dom';

const Education = () => {
    const navigate = useNavigate();

  const handleleftArrowClick = () => {
    navigate('/'); 
  };
  const handlerightArrowClick = () => {
    navigate('/skills'); 
  };
  return (
    <>
    <section className="education-section">
      <div className="education-item">
        <div className="education-details">
        <div className='clg'>
        <img src={fiu} alt="srm logo" className='imgsize'/>
          <h3>Florida International University, Florida, Miami</h3>
          </div>
          <h4>Master of Science in Computer Science</h4>
          <br />
          <p>
            Courses: Introduction to Algorithms, Advanced Software Engineering,
            Software Design and Analysis, Principles of DBMS.
          </p>
        </div>
        <div className="education-date">
          <p>Jan 2024 – Apr 2025 (Expected)</p>
        </div>
      </div>
      <div className="education-item">
        <div className="education-details">
            <div className='clg'>
                <img src={srm} alt="srm logo" className='imgsize'/>
          <h3>SRM Institute of Science and Technology, Chennai, India</h3>
          </div>
          <h4>
            Bachelor of Technology in Computer Science and Engineering
            (Specialization: Software Development)
          </h4>
          <br />
          <p>Courses: Operating Systems, Python, Java, Intro to AI.</p>
        </div>
        <div className="education-date">
          <p>May 2017 – Jun 2021</p>
        </div>
      </div>
    </section>
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

export default Education;
