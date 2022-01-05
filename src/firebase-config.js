// Import the functions you need from the SDKs you need
import React, {useState, useEffect} from "react"
import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};


  const app = initializeApp(firebaseConfig);
 
 

  export const db = getFirestore(app);

  const auth = getAuth();
  
  
  export function  signup(email, password){
    return createUserWithEmailAndPassword(auth, email, password);
  }


  export function  resetPassword(email){
    return sendPasswordResetEmail(auth, email);
  }



  export function  login(email, password){
    return signInWithEmailAndPassword(auth, email, password);
  }

  export function logout(){
    return signOut(auth);
  }
  export function useAuth(){
    const [currentUser, setCurrentUser ] = useState();

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth,user =>{
          setCurrentUser(user) 
        });
        return unsub
    }, [])

    console.log(currentUser)
    return currentUser;

  }