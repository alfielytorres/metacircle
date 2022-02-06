
import { useAuth } from "../firebase-config"

import { useNavigate, Link } from 'react-router-dom'
export default function Profile() {

    const currentUser = useAuth();

    function handleChange() {

    }
    function handleclick(){

    }

    return (
        <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
        <Link to={ `/user/${currentUser?.uid}`} className="flex-shrink-0 w-full group block">
            <div className="flex items-center">
              <div>
                <img
                  className="inline-block h-9 w-9 rounded-full"
                  src={currentUser?.photoURL}
                  alt=""
                />
                
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{currentUser?.email}</p>
                <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
              </div>
            </div>
          </Link>
        </div>
    );
}
