import { useEffect } from "react"
import Ok from "../SignUpPop";
let TimeOut=()=>{
    
        useEffect(()=>{
            time();
        },[])

       let time=()=>{
        setTimeout(() => {
            console.log("Delayed for 1 second.");
          }, 5000);
       }
    

    return(
        <div>
           <Ok/>
        </div>
    )
}

export default TimeOut;