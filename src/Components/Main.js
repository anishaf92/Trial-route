import { signOut } from 'firebase/auth';
import React from 'react';
import {auth} from "../firebase"
import Login from "./Login"
  
const Mainpage = () => {
    const signOut =()=>
    {
        auth.signOut();
        console.log(auth)
    }
  
   
      
    return (

        <div>
            
            
            Welcome User!
            <button style={{"marginLeft" : "20px"}} 
            onClick={signOut} >
                Logout
            </button>
            
            
        </div>
    );
}
  
export default Mainpage;