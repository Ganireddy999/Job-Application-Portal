import './Material.css';
import html_css from './pdfs/html_css.pdf'
import  js from './pdfs/js.pdf';
import java from './pdfs/JAVA.pdf'
import pdf1 from './pdf1.png';
import pdf2 from './pdf2.png';

import logo1 from './logos/html.png';
import logo2 from './logos/css.png';
import logo3 from './logos/js-image.png';
import logo4 from './logos/java.webp';
let Material = () => {
  return (
    <div  className='materials-container'>
      <div className='side-heading1'> 

           <h3  >Web Development</h3> 
           <a className='card-container' href={html_css} target="_blank">
                 <img src={logo1}/>
                 <h4 className='title'>HTML-CSS</h4>
                 <img src={logo2}/>
            </a>

            <a className='card-container' href={js} target="_blank">
                 <img src={logo3}/>
                 <h4  className='title'>Java Script</h4>
            </a>
        </div>   
        <div className='vertical'><span></span></div>
        <div className='side-heading1'>
         <h3>Data Structures and Algo's</h3>

         
         <a className='card-container' href={java} target="_blank" >
                 <img src={logo4} style={{backgroundColor:"white"}}/>
                 <h4  className='title'>Java</h4>
            </a>
          
        </div>
    </div>
  );
};
export default Material;
 