import { useNavigate } from 'react-router-dom';

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
        <div>
            hi
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