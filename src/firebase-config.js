// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCMEzTi5KVQk2HSHyEC6aRYvf8p3WFAf9k",
    authDomain: "humansof.firebaseapp.com",
    databaseURL: "https://humansof-default-rtdb.firebaseio.com",
    projectId: "humansof",
    storageBucket: "humansof.appspot.com",
    messagingSenderId: "778525565919",
    appId: "1:778525565919:web:81114742d1d4ab8f675a6a",
    measurementId: "G-BGJ9KRMC7J"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);