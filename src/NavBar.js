import { useState, useEffect } from "react"
import logo from './logo.png'
import { Link } from 'react-router-dom'
import { useAuth, logout } from "./firebase-config"
import { useNavigate } from "react-router-dom";

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const currentUser = useAuth();
    const [ loading, setLoading ] = useState(false);

  const navigate = useNavigate();
  async function handleLogout(){
    setLoading(true);
    try {
      await logout();
      navigate("/")
    } catch {
      alert("error!")
    }
    setLoading(false);
 
  }

    return (
      <div className="items-center border-b-2 border-gray-100">
        <div className="pl-5 pr-5 py-1 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div className="relative flex items-center justify-between ">
        <div className="flex items-center">
          
            <div>
                    <Link to="/">
                    <a href="#" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                    <img src={logo} alt="metacircle logo" className="mr-2" width="40"></img>
                    
                    <span className="font-bold mr-2">Meta Circle</span>
                    <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-primary rounded">ALPHA</span>
                    </a>
                    </Link>
            </div>
            
       
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href="/"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Find a mentor
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Become a mentor
              </a>
            </li>
            
           
          </ul>
        </div>
        <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>  
              {currentUser?.email} 
            </li>
          <li>

          {currentUser ?
          
                        <button
                        onClick={handleLogout}
                        disabled={loading || !currentUser}
                        className="group relative w-full flex justify-center py-3 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        aria-label="Log out"
                        title="Log ou"
                      >
                        Logout
                      </button> : 

                      <Link to="/login"
                      className="group relative w-full flex justify-center py-3 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                      aria-label="Get Started"
                      title="Get Started"
                      >
                      Sign Up/ Sign In
                      </Link>
                      }
          
          </li>

     
          
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    
                      <div>
                    <a href="#" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                    <img src={logo} alt="metacircle logo" className="mr-2" width="40"></img>
                    
                    <span className="font-bold">Meta Circle</span>
                    </a>
                    </div>
            
               
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    
                    <li>
                      <a
                        href="/"
                        aria-label="Our product"
                        title="Our product"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                      Find a mentor
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="Product pricing"
                        title="Product pricing"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Be a mentor
                      </a>
                    </li>
                    
                    
                    <li>
                    
                      {currentUser?.email}
                  
                      
                    </li>
                    <li>

                    {currentUser ?
                    
                    <button
                    onClick={handleLogout}
  
                    className="group relative w-full flex justify-center py-3 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    aria-label="Log out"
                    title="Log ou"
                  >
                    Logout
                  </button> :
                      <Link
                        
                        to="/"
              
                        className="group relative w-full flex justify-center py-3 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        aria-label="Get Started"
                        title="Get Started"
                      >
                          Sign Up/ Sign In
                      </Link>


                    }


                    
                    </li>









                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
        
      </div>
    </div>
    </div>
    )
}

export default NavBar;

    