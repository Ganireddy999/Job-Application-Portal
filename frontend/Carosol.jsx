import jobupdate2 from '../public/jobupdate2.png';
import  jp5 from '../public/jp5.png';

import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from "react-icons/bs";

import './Carosol.css';

let Carosol=()=>{
    return(
        <div className='headdiv'>
          <BsArrowLeftCircleFill/>
            <img src={jobupdate2} className='image'/>
            <img src={jp5} className='image'/>
          <BsArrowRightCircleFill/>
        </div>
    )
}

export default Carosol;