import insta from '../assets/insta.png';
import linkedinn from '../assets/linkedinn.png';
import github from '../assets/github.png';
import "./Contact.css";

export default function Contact() {

  return (
    <>
      <div className="social">
        <div className="logos">
          <a href="https://www.instagram.com/whatup_deepak_here/?next=%2F" target="_blank" className="mobile-hide">
            <img src={insta} alt="instagram" />
          </a>
          <img src={insta} alt="instagram" className="desktop-only" />
          <a href="https://www.instagram.com/whatup_deepak_here/?next=%2F" target="_blank" className="logofont desktop-only">
            whatup_deepak_here
          </a>
        </div>

        <div className="logos">
          <a href="https://www.linkedin.com/in/deepaksaipolasi/" target="_blank" className="mobile-hide">
            <img src={linkedinn} alt="linkedin" />
          </a>
          <img src={linkedinn} alt="linkedin" className="desktop-only" />
          <a href="https://www.linkedin.com/in/deepaksaipolasi/" target="_blank" className="logofont desktop-only">
            deepaksaipolasi
          </a>
        </div>

        <div className="logos">
          <a href="https://github.com/DeepakPolasiSai" target="_blank" className="mobile-hide">
            <img src={github} alt="github" />
          </a>
          <img src={github} alt="github" className="desktop-only" />
          <a href="https://github.com/DeepakPolasiSai" target="_blank" className="logofont desktop-only">
            DeepakPolasiSai
          </a>
        </div>
      </div>
    </>
  );
}
