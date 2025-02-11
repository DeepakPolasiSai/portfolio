import './Pandp.css';
import ekart from "../assets/ekartbackend.jpg";
import invest from "../assets/investmentcalc.jpg";
import lms from "../assets/lms.jpg";
import shoppingweb from "../assets/shoppingweb.jpg";
import tictac from "../assets/tictactoe.png";
import todo from "../assets/todoapp.png";

export default function Pandp() {

  const projects = [
    {
      img: ekart,
      title: "E-Kart Backend System",
      description: "A scalable backend for e-commerce with Node.js & MongoDB.",
      link: "https://github.com/DeepakPolasiSai/Ekart_backend",
    },
    {
      img: invest,
      title: "Investment Calculator",
      description: "A simple tool to calculate investment returns.",
      link: "https://github.com/DeepakPolasiSai/Investment-calculator",
    },
    {
      img: lms,
      title: "LMS Platform",
      description: "A modern Learning Management System with React & Java Spring Boot.",
      link: "https://github.com/DeepakPolasiSai/llm",
    },
    {
      img: shoppingweb,
      title: "Shopping Website",
      description: "A dynamic e-commerce frontend with .Net core.",
      link: "https://github.com/DeepakPolasiSai/shoppingweb",
    },
    {
      img: tictac,
      title: "Tic-Tac-Toe Game",
      description: "A classic tic-tac-toe game built with Vue.js.",
      link: "https://github.com/DeepakPolasiSai/tictactoe",
    },
    {
      img: todo,
      title: "To-Do App",
      description: "A task management app using React & Firebase.",
      link: "https://github.com/DeepakPolasiSai/to-do-mobile-app",
    }
  ];

  return (
    <>
        <hr className="section-divider" />
      <section className='design'>
      <h2>Projects</h2>
      </section>
    <div className="project-container">
      {projects.map((project, index) => (
        <div className="pcard" key={index}>
          <section className="imageborder">
            <img src={project.img} alt={project.title} />
          </section>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <hr />
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">Check Project</a>
        </div>
      ))}
    </div>
    </>
  );
}
