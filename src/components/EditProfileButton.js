
import { useAuth } from "../firebase-config"
import {
    PencilAltIcon,
  
  } from '@heroicons/react/outline'
import { useNavigate, Link } from 'react-router-dom'
import { Fragment, useState } from 'react'
import EditProfileModal from "./EditProfileModal"

export default function EditProfileButton() {
    const [showModal, setShowModal] = useState(false);
    const currentUser = useAuth();

    const openModal = ()=>{
        setShowModal(prev => !prev);
  
    }
 
  

    return (

      <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                        
                        
        <button
        type="button"
        onClick={openModal}
        className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
      >
          <PencilAltIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
          <span>Edit Profile</span>
        </button>

        <EditProfileModal showModal={showModal} setShowModal={setShowModal}/>
      </div>

    );
}





    