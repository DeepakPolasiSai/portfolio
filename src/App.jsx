
import Header from './header/Header.jsx'
import About from './about/About.jsx'
import Education from './education/Education.jsx'
import TechnicalSkills from './technicalskills/TechnicalSkills.jsx'
import Experience from './experience/Experience.jsx'
import Certification from './certification/Certification.jsx'
import Pandp from './pandp/Pandp.jsx'
import Contact from './contact/Contact.jsx'

const App = () => {
  return (
    <>
    <Header></Header>
      <section id="about"><About /></section>
      <section id="education"><Education /></section>
      <section id="technical-skills"><TechnicalSkills /></section>
      <section id="experience"><Experience /></section>
      <section id="certifications"><Certification /></section>
      <section id="projects"><Pandp /></section>
      <section id="contact"><Contact /></section>
  </>
  );
};

export default App;

