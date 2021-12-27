import { useState, useEffect } from "react"
import './App.css';
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


  return  (<div className="App">
  {mentees.map( (mentee) => {
    return(
      <div>
        <h1>Name: {mentee.name}</h1>
        <h1>Age: {mentee.age}</h1>
      </div>
    );
  })}

  </div>
  );
}

export default App;
