import { useNavigate } from 'react-router-dom';
import './Pandp.css'

export default function Pandp(){
    const navigate = useNavigate();
 
    const handleleftArrowClick = () => {
      navigate('/certification'); 
    };
    const handlerightArrowClick = () => {
      navigate('/contact'); 
    };
    return(
        <>
       <div className="washing-spinner-container">
      <span className="loader"></span>
      <p className="spinner-text">Build in Progress...</p>
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
    )
}