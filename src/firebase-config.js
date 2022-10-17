import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore' 
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

console.log(process.env)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
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