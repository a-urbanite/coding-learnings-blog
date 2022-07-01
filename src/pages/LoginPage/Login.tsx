import React from 'react'
import {auth, provider} from '../../firebase-config'
import {signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile
} from "firebase/auth";
// import { auth } from "../../firebase/firebase-config";
// import "./SingUp.css"


const Login = ({ setIsAuth }: any) => {

  let navigate = useNavigate();
  const [logInEmail, setlogInEmail] = useState<string>("");
  const [logInPassword, setlogInPassword] = useState<string>("");
  const [signupEmail, setsignupEmail] = useState<string>("");
  const [signupPassword, setsignupPassword] = useState<string>("");

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", `${true}`)
      setIsAuth(true);
      navigate('/')
    })
  }

  const signInWithEmail = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
console.log("triggered!")

    const result = await signInWithEmailAndPassword(auth, logInEmail, logInPassword).catch(function(error) {
      console.log(error.code);
      console.log(error.message);
   });

   console.log(result)

   if(result) {
      setIsAuth(true);
      navigate('/')
   }

  }

  const signupWithEmail = async () => {
    await createUserWithEmailAndPassword(auth, signupEmail as string, signupPassword as string)
      .catch(function(error) {
        console.log(error.code); 
        console.log(error.message);
      });

  }



  return (
    <>
      <h1 className='title'>Sign in</h1>
      <form onSubmit={signInWithEmail}>
        <h2>Sign in with Email</h2>
        <input 
          name='loginMail' 
          placeholder='Email...'
          onChange={(event) => {setlogInEmail(event.target.value)}}>
        </input>
        <input 
          type="password"
          name='loginPassword' 
          placeholder='password...'
          onChange={(event) => {setlogInPassword(event.target.value)}}>
        </input>
        {/* <button onClick={signInWithEmail}>Sign In with Email</button> */}
        <input type="submit" autoFocus value="Go!"/> 
      </form>
      {/* <p>Sign in with Google</p>
      <button className='login-with-google-btn' onClick={signInWithGoogle}>Sign in with Google</button> */}
      {/* <br/><br/>
        <h1 className="title"> Sign up </h1>
        <input
          name="registerEmail"
          placeholder="Email..."
          onChange={(event) => {setsignupEmail(event.target.value)}}
        />
        <input
          type='password'
          name="registerPassword"
          placeholder="Password..."
          onChange={(event) => {setsignupPassword(event.target.value)}}
        />
        <button onClick={signupWithEmail}>Sign up with Email</button> */}
    </>
  )
}

export default Login