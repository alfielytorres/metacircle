import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import SideBar from "../SideBar"
import NavBar from "../NavBar"
function Dashboard() {
   
    
  
    return (
      <div > 

        <NavBar/>
        <div className="mt-[-16px] w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap py-4 flex-grow"> 

                <div className="w-fixed w-full flex-shrink flex-grow-0 px-4 
                 border-r-2 
                 border-gray-100">
                  <div className="sticky top-0 p-4 w-full h-full">
                  <SideBar />
                  </div>
              
                </div>

                <main role="main" className="w-full flex-grow pt-1 px-5">
    
                  <h2 className="mt-6 text-center text-3xl  text-gray-900 ">
                 
                    </h2>
                </main>

                <div className="w-fixed w-full flex-shrink flex-grow-0 px-2
                 border-l-2 
                 border-gray-100">
                     <h4 className="mt-6 text-center text-2xl  text-gray-900 ">
     
                    </h4>
                </div>
            


        </div>


      </div>
  
    )
  }
  
  
  
  export default Dashboard;
  