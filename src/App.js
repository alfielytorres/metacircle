
import './App.css';
import React, { useEffect } from 'react';
import NavBar from "./NavBar"
import Footer from "./Footer"
import Login from "./Login"
import Mentees from "./Mentees"
import { useAuth } from "./firebase-config"
import ResetPassword from "./ResetPassword"


function App() {

  


  const currentUser = useAuth();


  

  return  (
  <div className="App">
    <NavBar/>

    {currentUser?  
      
      <Mentees/>: 
    
      <div>
        <Login/>
        <ResetPassword/>
      </div>
    }
    
     
    <Footer/>
  </div>
  );
}

export default App;
