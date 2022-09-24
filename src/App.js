
import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Routes,Route,useNavigate,Link} from 'react-router-dom';
import Login from './Components/Login';
import Mainpage from './Components/Main';
import { auth } from './firebase'; 
function App() {
  const [loggedIn,setLoggedIn]=useState(true);
  
 
  useEffect(() => {
    auth.onAuthStateChanged((user) =>{
      if(user){
      useNavigate("/profile")
      return (setLoggedIn(true));
    }
    else{
      
      setLoggedIn(false);
      
      console.log(loggedIn)
    }
  })
  }, [])
 
  return ( 
    <div>
    
    <Router>
      
      
      <Routes>

        
        <Route path='/profile' element={<Mainpage />}></Route> 
        <Route exact path='/' element={<Login />}></Route>
      
      </Routes>
    </Router>  
      </div>
    );
      }
  

  
export default App;