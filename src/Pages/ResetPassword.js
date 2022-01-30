import { LockClosedIcon } from '@heroicons/react/solid'
import React, {useRef,useState } from 'react'
import logo from '../logo.png'
import {resetPassword} from "../firebase-config"
import { Link } from 'react-router-dom'
function ResetPassword() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [ loading, setLoading ] = useState(false);

  async function handleResetPassword(){
    setLoading(true);
    try {
      await resetPassword(emailRef.current.value)
    } catch {
      alert("error!")
    }
    setLoading(false);
 
  }
  




  return (
    <>
    
          



    <div className="min-h-full flex flex-col justify-center py-12 mx-10 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src={logo}
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up/Login to your account</h2>
       
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                ref={emailRef}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

       

            <div className="flex items-center justify-between">
        

              <div className="text-sm flex ">
                <Link to="/login" className="font-medium text-primary hover:text-primary">
                Login to your account
                </Link>
              </div>
            </div>

            <div>
              <button
                onClick={handleResetPassword}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Reset Password
              </button>
            </div>
          </div>

          
        </div>
      </div>
    </div>







  </>


      // <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      //   <div className="max-w-md w-full space-y-8">



      //     <div>
      //       <img
      //         className="mx-auto h-12 w-auto"
      //         src={logo}
      //         alt="Workflow"
      //       />
   
      //       <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Reset Password</h2>
          
      //     </div>
   



      //       <div className="rounded-md shadow-sm -space-y-px">
      //         <div>
      //           <label htmlFor="email-address" className="sr-only">
      //             Email address
      //           </label>
      //           <input
      //           ref={emailRef}
      //             id="email-address"
      //             name="email"
      //             type="email"
      //             autoComplete="email"
      //             required
      //             className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
      //             placeholder="Email address"
      //           />
      //         </div>
      //         <br></br>
              
              
            
      //       </div>
            
      //       <div>
      //         <button
               
      //           onClick= {handleResetPassword}
      //           className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      //         >
      //           Reset Password
      //         </button>


      //       </div>


   
      //   </div>
      // </div>

  )
}



export default ResetPassword;
