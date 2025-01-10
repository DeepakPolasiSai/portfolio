import logo from '../assets/logo.png'
import './Header.css';

export default function Header(){
    return(
        <>
        <header className="header">
      <div className="logo">
        <img src={logo} alt="Deepak Polasi Sai" />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li><a href="/">About Me</a></li>
          <li><a href="/education">Education</a></li>
          <li><a href="/skills">Technical Skills</a></li>
          <li><a href="/experience">Experience</a></li>
          <li><a href="/certification">Certifications</a></li>
          <li><a href="/pandp">Projects & Publications</a></li>
          <li><a href="/contact">Contact Me</a></li>
        </ul>
      </nav>
    </header>
        </>
    )
}

