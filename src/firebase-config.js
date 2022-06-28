// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore' 
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// import dotenv from 'dotenv'
// import {} from 'dotenv/config'
// import env from 'dotenv'
// import 'dotenv/config' 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  "AIzaSyB41E8FzWEwhyRvvOlHWCaxakKMdnDqOrs",
  authDomain: "react-blog-30aa0.firebaseapp.com",
  projectId: "react-blog-30aa0",
  storageBucket: "react-blog-30aa0.appspot.com",
  messagingSenderId: "907503171090",
  appId: "1:907503171090:web:055698127696f38e0a8acb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();