
import './App.css';
import React, { useEffect } from 'react';
import NavBar from "./NavBar"
import Footer from "./Footer"
import Login from "./Pages/Login"
import Home from "./Pages/Home"
import Mentees from "./Mentees"
import { useAuth } from "./firebase-config"
import ResetPassword from "./Pages/ResetPassword"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  


  const currentUser = useAuth();


  

  return  (
  <Router>
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/login' element={<Login/>}/> 
        <Route path='/reset' element={<ResetPassword/>}/> 
        </Routes>
      <Footer/>
    </div>
  </Router>
  );
}

export default App;
