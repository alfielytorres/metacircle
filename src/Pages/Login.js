import { LockClosedIcon, UserIcon } from '@heroicons/react/solid'
import React, {useRef,useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png'
import {signup, login} from "../firebase-config"
import { useNavigate } from "react-router-dom";
import {  signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";



function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [ loading, setLoading ] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  async function handleSignup(){
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value)
     
    } catch {
      alert("error!")
 
    }
    setLoading(false);
 
  }
  

  


  function  signInWithGoogle(){
    
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((event)=>{
      console.log(event)
      navigate("/dashboard")

    })
    .catch((error)=>{
      console.log(error)
      navigate("/login")
   
    })
  }

  async function handleLogin(){
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value).then(()=>{
        navigate("/dashboard")
      })



    } catch {
      alert("error!")
      navigate("/login")
    }
    setLoading(false);
 
  }


  

  return (
    <>
    
          



    <div className="min-h-full flex flex-col justify-center py-12  sm:px-6 lg:px-8">
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

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                 ref={passwordRef}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link to="/reset" className="font-medium text-blue-600 hover:text-blue-500">
                Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                onClick={handleSignup}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Sign up
              </button>
            </div>

            <div>
              <button
                onClick={handleLogin}
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                 Login
              </button>
            </div>
          </div>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 ">
             

              <div>
                <button
                  onClick={signInWithGoogle}
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Sign in with Google</span>
                  <svg className="w-5 h-5 mr-5"  fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z"/></svg>
                  <p> Login with Google</p>
                </button>
              </div>

            
            </div>
          </div>
        </div>
      </div>
    </div>







  </>
     

  )
}



export default Login;
