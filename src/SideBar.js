/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import logo from './logo.png'
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


import ViewProfile from './components/ViewProfile'

import { useAuth, signout } from "./firebase-config"



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function SideBar() {
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
    { name: 'Home', href: '/dashboard', icon: HomeIcon, current: true },
    { name: 'Build', href: '#', icon: LightningBoltIcon, current: false },
    { name: 'Events', href: '#', icon: CalendarIcon, current: false },
   
  ]

  const currentUser = useAuth();
  
  return (

    <>
      
       


        {/* Static sidebar for desktop */}
        <div className="hidden lg:flex lg:flex-shrink-0">
          <div className="flex flex-col w-64">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-100">
              <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4">
                  <img
                    className="h-8 w-auto"
                    src={logo}
                    alt="Meta Circle"
                  />
                </div>
                <nav className="mt-5 flex-1" aria-label="Sidebar">
                  <div className="px-2 space-y-1">

                    {navigation.map((item) => (
                      <a
                        key={item.name}
                       href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-200 text-gray-900'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                          'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                            'mr-3 h-6 w-6'
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}



                      <button
                    
                       onClick = {handleSignout}
                        className= 'bg-gray-100 w-full text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                    
                      >
                        <LogoutIcon
                          className= 'text-gray-500 text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6'
                         
                          aria-hidden="true"
                        />
                       Log Out
                      </button>
                  </div>
                </nav>
              </div>
             <ViewProfile/>
            </div>
          </div>
          
        </div>
      
        
    </>
  )
}
  
  
  
