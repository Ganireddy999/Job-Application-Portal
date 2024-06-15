import './Header.css'
import {Link} from 'react-router-dom';
import { useNavigate} from "react-router-dom";

// import { Link } from 'react-scroll';
import PageSlides from "../pageSlides/PageSlides.jsx";
import Login from '../Logins/Login';
 
import {  toast } from 'react-toastify';
import { TbLogout } from "react-icons/tb";

let Header=()=>{

    let navigate=useNavigate();

    let logout=()=>{
        localStorage.clear('data');
        toast.success('Successfully logged out!');
        window.location.reload();
        navigate('/')
    }

    let fun=()=>{
        navigate('/login') ;   
    }

    let data=localStorage.getItem('data');
    console.log(data);
    return(
    <div className="headerDiv">

          <Link to="/">
               <img className='image1' src= {"./public/images/sukbg.png"} width={100} height={70} />
           </Link>
           
         <div className='links'>
           <Link  to="/jobs">Job Notifications</Link>
           {/* <a href='#prepare'>prepare</a> */}
           <Link to="/prepare">prepare</Link>
           <Link to="/materials">materials</Link>

           {data ? 
           <button onClick={logout} className='logout-button' >log out <TbLogout /> </button> :
           <button onClick={fun}   className='logout-button'> login </button>  }
           
         </div>
       
    </div>
        
    )
}
export default Header;