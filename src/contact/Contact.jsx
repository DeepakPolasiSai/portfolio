import React, { useState } from "react";
import insta from '../assets/insta.png'
import linkedinn from '../assets/linkedinn.png'
import github from '../assets/github.png'
import "./Contact.css";
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    console.log(e.target)
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!"); 
    setFormData({ name: "", email: "", message: "" }); 
  };

  const navigate = useNavigate();

  const handleleftArrowClick = () => {
    navigate('/pandp'); 
  };
  return (
    <>
    <div className="contact-me">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            required
          />
        </div>
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
      <div className="line">

      </div>
      <div className="social">
        <div className="logos">
            <img src={insta} alt="instagram" />
            <a href="https://www.instagram.com/whatup_deepak_here/?next=%2F" target="_blank" className="logofont">whatup_deepak_here</a>
        </div>
        <div className="logos">
            <img src={linkedinn} alt="linkedin" />
            <a href="https://www.linkedin.com/in/deepaksaipolasi/" target="_blank" className="logofont">deepaksaipolasi</a>
        </div>
        <div className="logos">
            <img src={github} alt="github" />
            <a href="https://github.com/DeepakPolasiSai" target="_blank" className="logofont">DeepakPolasiSai</a>
        </div>
    </div>
    </div>
    <section className='buttonplaces'>
    <div className='lef1'>
    <button className="arrow-button" onClick={handleleftArrowClick}>
     ←
</button>
</div>
    </section>
</>
  );
}
