
import './App.css';
import React, { useEffect } from 'react';
import NavBar from "./NavBar"

import Login from "./Pages/Login"
import Home from "./Pages/Home"
import Dashboard from "./Pages/Dashboard"
import Mentees from "./Mentees"
import { useAuth } from "./firebase-config"
import ResetPassword from "./Pages/ResetPassword"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  


  const currentUser = useAuth();


  

  return  (
  <Router>
    <div className="App ">

    
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/login' element={<Login/>}/> 
        <Route path='/reset' element={<ResetPassword/>}/> 
        <Route path='/dashboard' element={<Dashboard/>}/> 
        </Routes>

    </div>
  </Router>
  );
}

export default App;
