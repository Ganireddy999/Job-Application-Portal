import { useState } from "react";
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Toasty from "../Error";

import './Login.css';

let Forms=(props)=>{
    const {setVisible} = props
    let [email,setEmail]=useState("");
    let [password,setpassword]=useState("");

    let navigate=useNavigate();


    let emailChange=(event)=>{
        // console.log(event.target.value);
        setEmail(event.target.value);
    }

    let passwordChange=(event)=>{
        setpassword(event.target.value);
    }

    let loginHandler=async(event)=>{
        event.preventDefault();
        if(email==""  || password==""){
               return toast.error("sarega type chei bey")
        }

        else {
         try{
            let response =await  axios.post("http://localhost:8000/login",{email,password});
            console.log({email,password});
            if (response.status===200) {
                console.log("hii");
                console.log(response);
                 toast.success("awsome");
                 localStorage.setItem("data",JSON.stringify(response.data));
                 window.location.reload();
                 navigate("/")

                    
            }
          }

         catch(error){
            console.log(error)
            // toast.error(error.response.data);
         }
       }
    };

    return(
        <>
        <ToastContainer />
    
    <form>
        <div className="loginForm">
            
          <div className="inputss">
          <input type="email"  
                   placeholder="E-mail"
                   onChange={emailChange}  
                   required value={email}/>
          </div>

          <div className="inputss" >
            <input type="password"   
                   onChange={passwordChange}
                   placeholder="password" 
                   required value={password}  />
                   
          </div>
           <div className="inputss">
              <button onClick={loginHandler} >SIGN IN</button>       
           </div>

            <Link to="/SignUp">new user? click here to Register</Link>  
       </div>
      
    </form> 

       

    
        </>

    )
}
export default Forms;