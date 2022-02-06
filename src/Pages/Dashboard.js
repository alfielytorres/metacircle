/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import logo from '../logo.png'
import { Dialog, Transition } from '@headlessui/react'
import {
  CalendarIcon,
  HomeIcon,
  MenuIcon,
  LightningBoltIcon,
  LogoutIcon,

  XIcon,
} from '@heroicons/react/outline'
import { useNavigate, Link } from 'react-router-dom'




import { useAuth, signout } from "../firebase-config"
import SideBar from '../SideBar'
import MobileBar from '../components/MobileBar'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function Dashboard() {
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
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon, current: true },
    { name: 'Build', href: '#', icon: LightningBoltIcon, current: false },
    { name: 'Events', href: '#', icon: CalendarIcon, current: false },
   
  ]


  return (

    <>

      <div className="h-screen flex">
        <SideBar/>
        
        
        
        
        <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
        

          <MobileBar/>
          <div className="flex-1 relative z-0 flex overflow-hidden">
            <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
              {/* Start main area*/}
              <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
                <div className="h-full border-2 border-gray-200 border-dashed rounded-lg" />
              </div>
              {/* End main area */}
            </main>
            <aside className="hidden relative xl:flex xl:flex-col flex-shrink-0 w-96 border-l border-gray-200 overflow-y-auto">
              {/* Start secondary column (hidden on smaller screens) */}
              <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
                <div className="h-full border-2 border-gray-200 border-dashed rounded-lg" />
              </div>
              {/* End secondary column */}
            </aside>
          </div>










        </div>
      </div>
    </>
  )
}
  
  
  
  export default Dashboard;
  