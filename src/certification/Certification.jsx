import { useState, useEffect } from 'react';
import './Certification.css';
//linkedin
import dbfoundation from '../assets/certificates/linkedin/dbfoundation.pdf'
import sdd from '../assets/certificates/linkedin/sdd.pdf'
import arf from '../assets/certificates/linkedin/arf.pdf'
import dfad from '../assets/certificates/linkedin/dfad.pdf'
import sdmu from '../assets/certificates/linkedin/sdmu.pdf'
import ppcp from '../assets/certificates/linkedin/ppcp.pdf'
import pcpj from '../assets/certificates/linkedin/pcpj.pdf'
import dsfdm from '../assets/certificates/linkedin/dsfdm.pdf'
import tbtb from '../assets/certificates/linkedin/tbtb.pdf'
import gspb from '../assets/certificates/linkedin/gspb.pdf'
import idw from '../assets/certificates/linkedin/idw.pdf'
import pfdp from '../assets/certificates/linkedin/pfdp.pdf'
import pfod from '../assets/certificates/linkedin/pfod.pdf'
import add from '../assets/certificates/linkedin/add.pdf'
import gcf from '../assets/certificates/linkedin/gcf.pdf'
import ddai from '../assets/certificates/linkedin/ddai.pdf'
import sdrr from '../assets/certificates/linkedin/sdrr.pdf'
import sadd from '../assets/certificates/linkedin/sadd.pdf'

//azure
import ppf from '../assets/certificates/azure/ppf.pdf'
import scif from '../assets/certificates/azure/scif.pdf'
import maf from '../assets/certificates/azure/maf.pdf'

import { useNavigate } from 'react-router-dom';


export default function Certification() {
  const [islinkedinModalOpen, setlinkedinModalOpen] = useState(false);
  const [isazureModalOpen, setazureModalOpen] = useState(false);
  const [isawsModalOpen, setawsModalOpen] = useState(false);
  const [iskubModalOpen, setkubModalOpen] = useState(false);
  const [isterModalOpen, setterModalOpen] = useState(false);

  //linkedin
  const linkedinclickopen = () => {
    setlinkedinModalOpen(true);
    document.body.classList.add('modal-open'); 
  };

  const linkedinclickclose = () => {
    setlinkedinModalOpen(false);
    document.body.classList.remove('modal-open'); 
  };

  //azure
  const azureclickopen = () => {
    setazureModalOpen(true);
    document.body.classList.add('modal-open'); 
  };

  const azureclickclose = () => {
    setazureModalOpen(false);
    document.body.classList.remove('modal-open'); 
  };

  //aws
  const awsclickopen = () => {
    setawsModalOpen(true);
    document.body.classList.add('modal-open'); 
  };

  const awsclickclose = () => {
    setawsModalOpen(false);
    document.body.classList.remove('modal-open'); 
  };

  //kub
  const kubclickopen = () => {
    setkubModalOpen(true);
    document.body.classList.add('modal-open'); 
  };

  const kubclickclose = () => {
    setkubModalOpen(false);
    document.body.classList.remove('modal-open'); 
  };

  //ter
  const terclickopen = () => {
    setterModalOpen(true);
    document.body.classList.add('modal-open'); 
  };

  const terclickclose = () => {
    setterModalOpen(false);
    document.body.classList.remove('modal-open'); 
  };

  const navigate = useNavigate();
 
  const handleleftArrowClick = () => {
    navigate('/experience'); 
  };
  const handlerightArrowClick = () => {
    navigate('/pandp'); 
  };


  return (
    <>
      <div className="certi">
        <div className="AWS">
          <h2>AWS Certification</h2>
          <button className="open" onClick={awsclickopen}>Open</button>
        </div>
        <div className="Azure">
          <h2>Azure Certifications</h2>
          <button className="open" onClick={azureclickopen}>Open</button>
        </div>
        <div className="LinkedIn">
          <h2>LinkedIn Certifications</h2>
          <button className="open" onClick={linkedinclickopen}>
            Open
          </button>
        </div>
        <div className="Terraform">
          <h2>Terraform Certification</h2>
          <button className="open" onClick={terclickopen}>Open</button>
        </div>
        <div className="Kubernetes">
          <h2>Kubernetes Certification</h2>
          <button className="open" onClick={kubclickopen}>Open</button>
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

    {/* full page model */}
    {/* linkedin */}

      {islinkedinModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={linkedinclickclose}>
              &times;
            </span>
            <div className='modaldesign'>
            <h2>Data Science Foundations</h2>
            <a href={dsfdm} target="_blank" rel="noopener noreferrer" className='certopen'>open</a>
            </div>
            <div className='modaldesign'>
            <h2>Tableau Beyond the Basics</h2>
            <a href={tbtb} target="_blank" rel="noopener noreferrer" className='certopen'>open</a>
            </div>
            <div className='modaldesign'>
            <h2>Getting Started with Power BI </h2>
            <a href={gspb} target="_blank" rel="noopener noreferrer" className='certopen'>open</a>
            </div>
            <div className='modaldesign'>
            <h2>Introduction to Data Warehouses</h2>
            <a href={idw} target="_blank" rel="noopener noreferrer" className='certopen'>open</a>
            </div>
            <div className='modaldesign'>
            <h2>Programming Foundations: Design Patterns</h2>
            <a href={pfdp} target="_blank" rel="noopener noreferrer" className='certopen'>open</a>
            </div>
            <div className='modaldesign'>
            <h2>Programming Foundations: Object-Oriented Design</h2>
            <a href={pfod} target="_blank" rel="noopener noreferrer" className='certopen'>open</a>
            </div>
            <div className='modaldesign'>
            <h2>AWS for Developers: DynamoDB</h2>
            <a href={add} target="_blank" rel="noopener noreferrer" className='certopen'>open</a>
            </div>
            <div className='modaldesign'>
            <h2>Google Cloud Foundations</h2>
            <a href={gcf} target="_blank" rel="noopener noreferrer" className='certopen'>open</a>
            </div>
            <div className='modaldesign'>
            <h2>Distributed Databases with Apache Ignite</h2>
            <a href={ddai} target="_blank" rel="noopener noreferrer" className='certopen'>open</a>
            </div>
            <div className='modaldesign'>
            <h2>Software Design: From Requirements to Release</h2>
            <a href={sdrr} target="_blank" rel="noopener noreferrer" className='certopen'>open</a>
            </div>
            <div className='modaldesign'>
            <h2>Software Architecture: Domain-Driven Design</h2>
            <a href={sadd} target="_blank" rel="noopener noreferrer" className='certopen'>open</a>
            </div>
            <div className='modaldesign'>
            <h2>Parallel and Concurrent Programming with Java 2</h2>
            <a href={pcpj} target="_blank" rel="noopener noreferrer" className='certopen'>open</a>
            </div>
            <div className='modaldesign'>
            <h2>Python Parallel and Concurrent Programming Part 1</h2>
            <a href={ppcp} target="_blank" rel="noopener noreferrer" className='certopen'>open</a>
            </div>
            <div className='modaldesign'>
            <h2>Software Design: Modeling with UML</h2>
            <a href={sdmu} target="_blank" rel="noopener noreferrer" className='certopen'>open</a>
            </div>
            <div className='modaldesign'>
            <h2>Database Foundations: Application Development</h2>
            <a href={dfad} target="_blank" rel="noopener noreferrer" className='certopen'>open</a>
            </div>
            <div className='modaldesign'>
            <h2>Agile Requirements Foundations</h2>
            <a href={arf} target="_blank" rel="noopener noreferrer" className='certopen'>open</a>
            </div>
            <div className='modaldesign'>
            <h2>Database Foundations: Intro to Databases</h2>
            <a href={dbfoundation}  target="_blank" rel="noopener noreferrer" className='certopen'>open</a>
            </div>
            <div className='modaldesign'>
            <h2>Software Design: Developing Effective Requirements</h2>
            <a href={sdd} target="_blank" rel="noopener noreferrer" className='certopen'>open</a>
            </div>
          </div>
        </div>
      )}

      {/* AWS */}
      {isawsModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={awsclickclose}>
              &times;
            </span>
            <div className='modaldesign'>
            <h2>Yet to take exam</h2>
            {/* <a href="" className='certopen'>open</a> */}
            </div>
            </div>
            </div>
          )}

           {/* kub */}
      {iskubModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={kubclickclose}>
              &times;
            </span>
            <div className='modaldesign'>
            <h2>Yet to take exam</h2>
            {/* <a href="" className='certopen'>open</a> */}
            </div>
            </div>
            </div>
          )}

           {/* ter */}
      {isterModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={terclickclose}>
              &times;
            </span>
            <div className='modaldesign'>
            <h2>Yet to take exam</h2>
            {/* <a href="" className='certopen'>open</a> */}
            </div>
            </div>
            </div>
          )}

{/* Azure */}

{isazureModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={azureclickclose}>
              &times;
            </span>
            <div className='modaldesign'>
            <h2>Microsoft Certified: Power Platform Fundamentals</h2>
            <a href={ppf} target="_blank" rel="noopener noreferrer" className='certopen'>open</a>
            </div>
            <div className='modaldesign'>
            <h2>Microsoft Certified: Security, Compliance, and Identity</h2>
            <a href={scif} target="_blank" rel="noopener noreferrer" className='certopen'>open</a>
            </div>
            <div className='modaldesign'>
            <h2> Microsoft Certified: Azure Fundamentals</h2>
            <a href={maf} target="_blank" rel="noopener noreferrer" className='certopen'>open</a>
            </div>
            </div>
            </div>
)}
    </>
  );
}
