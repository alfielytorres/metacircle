import { LockClosedIcon } from '@heroicons/react/solid'
import React, {useRef,useState } from 'react'
import logo from './logo.png'
import {signup} from "./firebase-config"

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [ loading, setLoading ] = useState(false);

  async function handleSignup(){
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch {
      alert("error!")
    }
    setLoading(false);
 
  }

  return (
   
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">



          <div>
            <img
              className="mx-auto h-12 w-auto"
              src={logo}
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Get Started</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Create your first{' '}
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                Meta Circle
              </a>
            </p>
          </div>
   



            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                ref={emailRef}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <br></br>
              
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  ref={passwordRef}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="aappearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            
            </div>
            
            <div>
              <button
                type="submit"
                onClick= {handleSignup}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-blue-500 group-hover:text-blue-400" aria-hidden="true" />
                </span>
                Create Your Account
              </button>
            </div>


   
        </div>
      </div>

  )
}



export default Login;
