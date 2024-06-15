import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Jobs from "./Jobs";
// import '../jobs/Jobs.css';
import './jobDetails.css';


let JobDetails=()=>{
    const{state}=useLocation();
    console.log(state);
    let{jobTitle,companyName,experience,CTC,
        location,skills,completeJobDetails,aboutTheCompany,aboutTheJob,applicants}=state;

        console.log(aboutTheCompany);
    
let  applyButton=async()=>{
    let data=localStorage.getItem('data');
   //converting JSON string to a  javascript object.
    const obj = JSON.parse(data);
    //Destructuring
    let {name,email}=obj;
    let response=await axios.post("http://localhost:8000/apply",{name,email});
    console.log(response);
} 
    return(
      
 <div>
      
     <center> <h2> {completeJobDetails}</h2> </center>
   <div className='container'>

        <h1>Role: { jobTitle}</h1>
        <p>{companyName}</p>

     <div className='row3div'>
        <p>{experience}</p>
        <p>{CTC}</p>
     </div>

        <p>{location}</p>

       
        <p>{skills}</p> 
         <p>applicants:{ applicants}</p>
        <hr/>

      <div >
         <label>Posted:<span >14 days ago</span></label>
         <label>Openings: <span >300</span></label>
         <label>Applicants: <span>30248</span></label>
      </div>

         
         <hr/>
         <h6>About the job :</h6>
         <p> {aboutTheJob}</p>
      <center><button  className='apply-button'  onClick={applyButton}>Apply now</button></center>
       
    </div>

  {/* <p>{aboutTheCompany}</p> */}

  </div>


    )

}
export default JobDetails;
