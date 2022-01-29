import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import SideBar from "../SideBar"
import NavBar from "../NavBar"
function Dashboard() {
   
    
  
    return (
      <div > 

        <NavBar/>
        <div className="items-center"> 
        <div className="flex">
                
              <SideBar/>
              <div className="">
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Dashboard</h2>
              </div>
        </div>

        </div>


      </div>
  
    )
  }
  
  
  
  export default Dashboard;
  