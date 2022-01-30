import { useState, useEffect } from "react"
import { db } from "./firebase-config"
import { collection, getDocs } from "firebase/firestore"



function Mentees() {

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
      
      {mentees.map( (mentee) => {
          return(
          <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
              <div>
                <div className="text-xl font-medium text-black">{mentee.name}</div>
                <p className="text-gray-500">{mentee.age} </p>
              </div>
           </div>
          );
      })}
     
    </div>
    );
  }
  
  export default Mentees;
  