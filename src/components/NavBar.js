import { useState, useEffect } from "react"
import logo from '../logo.png'
import { Link } from 'react-router-dom'
import { useAuth, signout } from "../firebase-config"
import { useNavigate } from "react-router-dom";

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const currentUser = useAuth();
    const [ loading, setLoading ] = useState(false);

  const navigate = useNavigate();
  async function handleSignout(){
    setLoading(true);
    try {
      await signout();
      navigate("/")
    } catch {
      alert("error!")
    }
    setLoading(false);
 
  }

    return (
      <div className="items-center border-b-2 border-gray-100 z-5000">
        <div className="pl-5 pr-5 py-1 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div className="relative flex items-center z-5000 justify-between ">
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
            
       
         
        </div>
        <ul className="flex  items-center  space-x-8 lg:flex">
            <li>  
              {currentUser?.email} 
            </li>
          <li>

          {currentUser ?
          
                        <button
                        onClick={handleSignout}
                        disabled={loading || !currentUser}
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        aria-label="Log out"
                        title="Log out"
                      >
                        signout
                      </button> : 

                      <Link to="/login"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                      aria-label="Get Started"
                      title="Get Started"
                      >
                      Sign Up 
                      </Link>
                      }
          
          </li>

     
          
        </ul>
      
      </div>
    </div>
    </div>
    )
}

export default NavBar;

    