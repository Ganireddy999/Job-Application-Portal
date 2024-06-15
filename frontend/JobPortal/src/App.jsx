
import { Routes,Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";


import Header from "./Components/Header/Header.jsx";
import Login from "./Components/Logins/Login.jsx";
import SignUp from "./Components/SignUp/SignUp.jsx";
import PageSlides from "./Components/pageSlides/PageSlides.jsx";
import SignUpPop from "./Components/SignUpPop";
import JobDetails from "./Components/jobs/JobDetails.jsx";
import Error from './Components/Error.jsx'


import 'bootstrap/dist/css/bootstrap.min.css';
import TimeOut from "./Components/trash/TimeOut.jsx";

import Card1 from './Components/cards/Card1.jsx';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
import Jobs from "../src/Components/jobs/Jobs.jsx";
import Footer from "./Components/footer/Footer.jsx";
import { TbBallFootballOff } from "react-icons/tb";
import Login2 from "./Components/Logins/Login2.jsx";
import Material from "./Components/materials/Material.jsx";

let App=()=>{

  return(
    <div className="appdiv">
      
      <BrowserRouter>
      <ToastContainer/>
        <Header/>
        <SignUpPop/>
        
        <Routes>
          <Route path="/" Component={PageSlides}/>
          

          <Route path="/jobs" Component={Jobs}/>
          <Route path="/prepare"  Component={ Card1}/>
          <Route path="/JobDetails/:id" Component={JobDetails}/>
          <Route path="/login" Component={Login2}/>
          <Route path="*"          Component={Error} />
          <Route path="/materials" Component={Material} />

        </Routes>

        {/* <Card1/> */}
      </BrowserRouter>
     
      
    </div>
  )
}
export default App;