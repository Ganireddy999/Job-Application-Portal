import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';


// import page2 from '../../public/page2.png';
import page1 from './assets/page1.png';
import jp5 from '../../../public/jp5.png';

import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import './PageSlides.css'

// import image1 from './image1.png'
function PageSlides() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='box'>
    <Carousel activeIndex={index} onSelect={handleSelect}>
    
    <Carousel.Item>
      <Link to={"https://acesse.dev/DYRb2"}> <img  className='container3  ' src={page1}  /></Link>
    </Carousel.Item>   

    <Carousel.Item>
     <Link to={"https://www.tcsion.com/hub/national-qualifier-test/"}>
       <img  className='container3  '  src={jp5} />
     </Link>
    </Carousel.Item>

    </Carousel>
    <Footer/>

    </div>
    
  
  )
}

export default PageSlides;