import { useAuth } from "./firebase-config"


export default function Profile() {

    const user = useAuth();

    function handleChange() {

    }
    function handleclick(){

    }

    return (
        <div className="">
                <img
                    className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                    src={user?.photoURL}
                    alt=""
                />
       
        </div>
    );
}