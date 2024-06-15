import { useEffect, useState } from 'react';
import Model from 'react-modal';
import Login from './Logins/Login';
import SignUp from './SignUp/SignUp';

let SignUpPop=()=>{
   let [visible,setVisible]=useState(false);
   let [loginVisible,setLoginVisible] = useState(false);

   let Data=localStorage.getItem('data');
   console.log(Data);
   useEffect(()=>{
      if(Data){
         return
      }
      else{
         setTimeout(() => {
            setVisible(true);
           }, 5000);
      }
   },[])
   
   return( 
    <div>
        <Model isOpen={visible} style={{
         content:{
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
         }
        }}   
         onRequestClose={()=>{setVisible(false)}} >
          {!loginVisible && <SignUp setVisible={setVisible} setLoginVisible={setLoginVisible} loginVisible={loginVisible} />}
          {loginVisible && <Login setVisible={setVisible}/>}
        </Model>
    </div>
   ) 
}

export default SignUpPop; 