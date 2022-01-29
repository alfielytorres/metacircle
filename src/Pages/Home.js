import React from 'react'
import logo from '../logo.png'
import Footer from "../Footer"
import NavBar from "../NavBar"
import { useNavigate, Link } from 'react-router-dom'
function Home() {
   
    let navigate = useNavigate();
  
    return (
     <div>
       <NavBar/>
       <div className="text- min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">



          <div>
            
            <img
              className="mx-auto h-12 w-auto"
              src={logo}
              alt="Workflow"
            />
   
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Welcome to Meta Circle</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
                Be the senior you wanted when you were a junior. Find a senior you actually admire.
               </p>
          </div>
   



            
            
            <div>
          


              <br/>
              <button
           
                onClick={()=>{navigate("/login")}}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-black-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                
               Get Started
              </button>


            
         
            </div>


   
        </div>
        </div>

        <Footer/>
        </div>
    )
  }
  
  
  
  export default Home;
  