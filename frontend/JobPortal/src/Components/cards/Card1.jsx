import { Link } from 'react-router-dom';
import cardImg  from './assets/cardImg.webp'
import cardimg1 from './assets/hq720.webp';
import html from './assets/html.webp';
import js from './assets/js.webp';
import './card1.css';
function Card1(){
return(
<div className='container6' id='prepare'>
  
   <div className='card1'>
       <div className='card1Child1'>
         <img src={cardImg} className='cardImg'></img>
       </div>

       <div className='cardChild2'>
         <h5 style={{ marginLeft: 15 }} className='card-text' > React tutorial for beginners ⚛️</h5>
         <p style={{fontWeight:'bold',marginLeft: 15}} className='card-title'>Bro Code</p>
         <Link to={"https://youtu.be/CgkZ7MvWUAA?si=UmWid8_7tPgx6odu"} ><button className='view-button'>view</button></Link>
       </div>
    </div>

    <div className='card1'>
       <div className='card1Child1'>
         <img src={cardimg1} className='cardImg'></img>
       </div>

       <div  className='cardChild2'>
         <h5 style={{ marginLeft: 15 }} className='card-text' > Java tutorial for beginners </h5>
         <p style={{fontWeight:'bold',marginLeft: 15}} className='card-title'>Programming with mosh</p>
         <Link to={"https://youtu.be/eIrMbAQSU34?si=9W0gRrFmopdClQ49"} ><button className='view-button'>view</button></Link>
       </div>
    </div>

    <div className='card1'>
       <div className='card1Child1'>
         <img src={html} className='cardImg'></img>
       </div>

       <div  className='cardChild2'>
         <h5 style={{ marginLeft: 15 }} className='card-text' > React tutorial for beginners ⚛️</h5>
         <p style={{fontWeight:'bold',marginLeft: 15}} className='card-title'>Bro Code</p>
         <Link to={"https://youtu.be/CgkZ7MvWUAA?si=UmWid8_7tPgx6odu"} ><button className='view-button'>view</button></Link>
       </div>
    </div>

    <div className='card1'>
       <div className='card1Child1'>
         <img src={js} className='cardImg'></img>
       </div>

       <div>
         <h5 style={{ marginLeft: 15 }} className='card-text' > React tutorial for beginners ⚛️</h5>
         <p style={{fontWeight:'bold',marginLeft: 15}} className='card-title'>Bro Code</p>
         <Link to={"https://youtu.be/CgkZ7MvWUAA?si=UmWid8_7tPgx6odu"} ><button className='view-button'>view</button></Link>
       </div>
    </div>


    <div className='card1'>
       <div className='card1Child1'>
         <img src={cardImg} className='cardImg'></img>
       </div>

       <div  className='cardChild2'>
         <h5 style={{ marginLeft: 15 }} className='card-text' > React tutorial for beginners ⚛️</h5>
         <p style={{fontWeight:'bold',marginLeft: 15}} className='card-title'>Bro Code</p>
         <Link to={"https://youtu.be/CgkZ7MvWUAA?si=UmWid8_7tPgx6odu"} ><button className='view-button'>view</button></Link>
       </div>
    </div>

    <div className='card1'>
       <div className='card1Child1'>
         <img src={html} className='cardImg'></img>
       </div>

       <div  className='cardChild2'>
         <h5 style={{ marginLeft: 15 }} className='card-text' > React tutorial for beginners ⚛️</h5>
         <p style={{fontWeight:'bold',marginLeft: 15}} className='card-title'>Bro Code</p>
         <Link to={"https://youtu.be/CgkZ7MvWUAA?si=UmWid8_7tPgx6odu"} ><button className='view-button'>view</button></Link>
       </div>
    </div>

    <div className='card1'>
       <div className='card1Child1'>
         <img src={cardImg} className='cardImg'></img>
       </div>

       <div  className='cardChild2'>
         <h5 style={{ marginLeft: 15 }} className='card-text' > React tutorial for beginners ⚛️</h5>
         <p style={{fontWeight:'bold',marginLeft: 15}} className='card-title'>Bro Code</p>
         <Link to={"https://youtu.be/CgkZ7MvWUAA?si=UmWid8_7tPgx6odu"} ><button className='view-button'>view</button></Link>
       </div>
    </div>

    <div className='card1'>
       <div className='card1Child1'>
         <img src={cardImg} className='cardImg'></img>
       </div>

       <div  className='cardChild2'
       >
         <h5 style={{ marginLeft: 15 }} className='card-text' > React tutorial for beginners ⚛️</h5>
         <p style={{fontWeight:'bold',marginLeft: 15}} className='card-title'>Bro Code</p>
         <Link to={"https://youtu.be/CgkZ7MvWUAA?si=UmWid8_7tPgx6odu"} ><button className='view-button'>view</button></Link>
       </div>
    </div>

    <div className='card1'>
       <div className='card1Child1'>
         <img src={cardImg} className='cardImg'></img>
       </div>

       <div  className='cardChild2'>
         <h5 style={{ marginLeft: 15 }} className='card-text' > React tutorial for beginners ⚛️</h5>
         <p style={{fontWeight:'bold',marginLeft: 15}} className='card-title'>Bro Code</p>
         <Link to={"https://youtu.be/CgkZ7MvWUAA?si=UmWid8_7tPgx6odu"} ><button className='view-button'>view</button></Link>
       </div>
    </div>
  </div>
);
}
export default Card1;