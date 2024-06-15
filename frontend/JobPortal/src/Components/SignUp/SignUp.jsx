import { useState } from "react";
import axios from 'axios';
import './SignUp.css';
import { ToastContainer, toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom';


import  email_icon from '../../../public/Assets/email.png'
import  password_icon from '../../../public/Assets/password.png'
import  person_icon from '../../../public/Assets/person.png'


let  SignUp=(props)=>{
    let {setVisible,setLoginVisible,loginVisible}=props;

    let [email,setEmail]=useState("");
    let [name,setName]=useState("");
    let [password,setPassword]=useState("");
    let [confirmPassword,setConfirmPassword]=useState("");

    const navigate=useNavigate();

    let emailHandler=(event)=>{
        // console.log(event.target.value);
        setEmail(event.target.value);
    }

    let nameChangeHandler=(e)=>{
        // console.log(e.target.value);
        setName(e.target.value);
    }

    let PasswordHandler=(event)=>{
       setPassword(event.target.value);
    }

    let  confirmPasswordHandler=(event)=>{
        setConfirmPassword(event.target.value);
     }

    let  signUpHandler=async(event)=>{
       event.preventDefault();
       try{
        if(
            name=="" ||
            email==""||
            password=="" ||
            confirmPassword=="")
           {
               toast.error("motham  fill cheoi Bey");
           }
    
           else{
            let data={
                name:name,
                email:email,
                password:password,
                confirmPassword:confirmPassword,
            }
            let response= await axios.post("http://localhost:8000/SignUp",data);
            console.log(response);
            if(response.status==200){ 
                toast.success("good to go ");
                // navigate('/login');
                // setVisible(false);
                console.log(response.data);
                setLoginVisible(true);
                
            }
    
           }
       }
    catch(error){
                console.log(error);
                toast.error(error.response.data);
       }
    }

    return(
        <>
        <ToastContainer />
     <div className="signup">

     {/* <h2>SignUp</h2> */}
        
        <form>
        <div className="container1">
          <div >
            <img src={email_icon} />
            <input type="email" 
                   placeholder="  Email"
                   onChange={emailHandler} 
                   className="emaildiv" 
                   value={email}
                    required
                   />
          </div>

          <div>
           <img src={person_icon} />
            <input type="text"
                   placeholder="  Full name"
                   onChange={nameChangeHandler} 
                   value={name}
                   className="emaildiv" 
             />
          </div>
                   
            <div>
            <img src={password_icon} />
             <input type="password"   
                   onChange={PasswordHandler}
                   placeholder="   password" 
                   value={password}
                   className="emaildiv"   />

            </div>
           <div>
            <img src={password_icon} />
            <input type="password"  
                   placeholder="  confirm password" 
                   className="emaildiv" 
                   onChange={confirmPasswordHandler}
                     />       

           </div>
            <button onClick={signUpHandler} className="signup-button">SIGN UP</button>  
       </div>
        </form> 
       
        {/* <Link to="/login">Already a user? Sign in now</Link> */}
        

      
     </div>
        </>

    )
}
export default SignUp;