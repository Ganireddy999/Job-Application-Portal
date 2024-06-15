import axios from 'axios';
import React, {  useEffect, useState } from "react";
import { Link,useNavigate, useSearchParams } from "react-router-dom";


import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineNotStarted } from "react-icons/md";
import { FaMoneyBill } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";

import '../jobs/Jobs.css';

let Jobs=()=>{

    let [data,setData]=useState([]);
    let [search,setSearch]=useState("");
    let navigate=useNavigate();

        useEffect(()=>{

            const getJobs=  async ()=>{
                console.log("useeffect");
                let response=await  axios.get('http://localhost:8000/jobs');
                 console.log(response.data);
                  setData(response.data);
                 
               };
               getJobs();
               
           },[]
           );
   // console.log(data.salary );

let  applyButton=async(companyEmail)=>{

    console.log(companyEmail);
    let data=localStorage.getItem('data');
   //converting JSON string to a  javascript object.
    const obj = JSON.parse(data);

    //Destructuring
    let {name,email}=obj;
    console.log(data);
   //  let {companyEmail}=data;
   //  console.log(companyEmail);
    let response=await axios.post("http://localhost:8000/apply",{name,companyEmail,email});
    console.log(response); 
} 

   //     let detailsButton=()=>{
   //     navigate( `/JobDetails/${_id}`);    
   //    // state={obj}
   // }

   // console.log(search);
   

    return(
        <div className='maindiv'>
      

      <div className='search-div'>
         <input 
          type="search"
          placeholder="   search..."
          onChange={(e)=>setSearch(e.target.value)}
          value={search}
          className='search-bar'
          />
      </div>
      <div className='parent1'>
      
         { data.filter(data =>data.role.toLowerCase().includes(search.toLowerCase())).map((obj,index)=>{
       
       let{jobTitle,companyName,companyEmail,experience,salary,location,skills,completeJobDetails,_id,aboutTheCompany,
            startDate,logo}=obj;

         console.log(companyEmail)
       
       return(
         
        
          <div className='container2'>

                <div className='row1'>
                 <div>
                   <h3>Role: { jobTitle}</h3>
                   <p style={
                    {
                      color:"grey",
                      fontWeight:"500"
                    }
                     }> {companyName}
                   </p>
                 </div>

                 {
                  logo ?
                  <img src={logo} className='logo'/>:    
                  ""
                 }
                  
                </div>

                <div>
                  <p> <IoLocationOutline  style={{marginTop:'-2px'}} />  {location} </p>
                </div>
    
                <div className='row4'>
                  <p className='startDate' ><MdOutlineNotStarted style={{marginTop:'-2px'}}/> START DATE </p>
                  <p className='startDate'><FaMoneyBill style={{marginTop:'-2px'}}/>   CTC(ANNUAL)</p>
                  <p className='startDate'><GiNetworkBars style={{marginTop:'-3px'}} />  EXPERIENCE</p>
                </div>  

             <div className='row5'>
                <p className='details'>{startDate}</p>
                <p className='details'>{salary}</p>
                <p className='details'>{experience}</p>
             </div>

              
                 <hr/>

              <div >
                 <label className='row6'>Posted:<span >14 days ago</span></label>
                 <label className='row6'>Openings: <span >300</span></label>
                 <label className='row6'>Applicants: <span>30248</span></label>
              </div>

                <div className='last-row'>

                   <button  className='apply-button'  onClick={()=>{applyButton(companyEmail)}}>Apply now</button>
                   <button  className='details-buttonn'> <Link to={{pathname:`/JobDetails/${_id} `}} state={obj}>view details</Link> </button>

                </div>
          </div>
       )

      }) } 

      </div>
 </div>
    )
   }
export default Jobs;