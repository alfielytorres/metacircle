

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  PencilAltIcon,
  CogIcon,
  HomeIcon,
  MapIcon,
  MenuIcon,
  SearchCircleIcon,
  SpeakerphoneIcon,
  UserGroupIcon,
  ViewGridAddIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronLeftIcon, FilterIcon, MailIcon, PhoneIcon, SearchIcon } from '@heroicons/react/solid'
import SideBar from '../SideBar'
import MobileBar from '../components/MobileBar'
import Profile from '../Profile'
import { useAuth } from "../firebase-config"
import EditProfileButton from '../components/EditProfileButton'
const tabs = [
  { name: 'Summary', href: '#', current: true },
  { name: 'Reviews', href: '#', current: false },

]


const profile = {
 
  imageUrl:
    'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  coverImageUrl:
    'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  about: `
    <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
    <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
  `,
  fields: {

    Email: 'ricardocooper@example.com',
    Title: 'Senior Front-End Developer',
    Location: 'San Francisco',

  },
}
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



function UserProfile() {

 
  const user = useAuth();


  const UserPage = ({ match }) => {
     userId = user?.uid;
    console.log(userId);
    const { params: { userId } } = match;
    // do with `userId` what you need to load that user's data
  

  };

  const [sidebarOpen, setSidebarOpen] = useState(false)

  return  (
    <>
 
 <div className="h-screen flex">
        <SideBar/>
        
        
        
        
        <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
        

          <MobileBar/>
          <div className="flex-1 relative z-0 flex overflow-hidden">
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
           

            <article>
              {/* Profile header */}
              <div>
                <div>
                  <img className="h-32 w-full object-cover lg:h-48" src={user?.photoURL} alt="" />
                </div>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                    <Profile/>
                    <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                        <h1 className="text-2xl font-bold text-gray-900 truncate">{user?.displayName}</h1>
                      </div>
                    <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                      

                        <EditProfileButton/>

                      

                       
               
                    </div>
                  </div>
                  <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
                    <h1 className="text-2xl font-bold text-gray-900 truncate">{profile.name}</h1>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="mt-6 sm:mt-2 2xl:mt-5">
                <div className="border-b border-gray-200">
                  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                      {tabs.map((tab) => (
                        <a
                          key={tab.name}
                          href={tab.href}
                          className={classNames(
                            tab.current
                              ? 'border-primary text-gray-900'
                              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                            'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                          )}
                          aria-current={tab.current ? 'page' : undefined}
                        >
                          {tab.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>

              {/* Description list */}
              <div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  {Object.keys(profile.fields).map((field) => (
                    <div key={field} className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">{field}</dt>
                      <dd className="mt-1 text-sm text-gray-900">{profile.fields[field]}</dd>
                    </div>
                  ))}
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">About</dt>
                    <dd
                      className="mt-1 max-w-prose text-sm text-gray-900 space-y-5"
                      dangerouslySetInnerHTML={{ __html: profile.about }}
                    />
                  </div>
                </dl>
              </div>

            </article>
          </main>
       
        </div>
        </div>
        </div>
        
  </>
  );
}

export default UserProfile;
