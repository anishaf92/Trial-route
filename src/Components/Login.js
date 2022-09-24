
import React,{useState} from 'react';
import {auth , provider}  from '../firebase';
import Mainpage from './Main.js';
import {useAuthState} from 'react-firebase-hooks/auth';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

  
const Login = () => {
    
    
    // Sign in with google
    function signin() {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
               
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });



    }
      
    return (
        <div>
    
                <center>
                <button style={{"marginTop" : "200px"}} 
                onClick={signin}>Sign In with Google</button>
                </center>
            
                
            
        </div>
    );
}
  
export default Login;
