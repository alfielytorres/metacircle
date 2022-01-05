import { useState, useEffect } from "react"
import './App.css';

import NavBar from "./NavBar"
import Footer from "./Footer"
import Login from "./Login"
import ResetPassword from "./ResetPassword"
import { db } from "./firebase-config"
import { collection, getDocs } from "firebase/firestore"


function App() {

  const [mentees, setMentees] = useState([]);
  const menteesCollectionRef = collection(db, "mentees");
  
  useEffect(()=>{
    const getMentees =  async () => {
      const data = await getDocs(menteesCollectionRef);
      console.log(data);
      setMentees(data.docs.map((doc)=>({ ...doc.data(), id: doc.id})));
    }

    getMentees();
    
  }, []);

  return  (
  <div className="App">
    <NavBar/>
   
    {mentees.map( (mentee) => {
        return(
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
            <div>
              <div className="text-xl font-medium text-black">{mentee.name}</div>
              <p className="text-gray-500">{mentee.age} years old</p>
            </div>
         </div>
        );
    })}
     <Login/>
     <ResetPassword/>
    <Footer/>
  </div>
  );
}

export default App;
