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
import "./SignIn.css"



const Login = ({ setIsAuth }: any) => {

  let navigate = useNavigate();
  const [logInEmail, setlogInEmail] = useState<string>("");
  const [logInPassword, setlogInPassword] = useState<string>("");

  const signInWithEmail = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // console.log("triggered!")
    const result = await signInWithEmailAndPassword(auth, logInEmail, logInPassword).catch(function(error) {
      console.log(error.code);
      console.log(error.message);
    });
    // console.log("RETURN OF LOGIN OBJECT",result)
    if(result) {
        setIsAuth(result.user);
        navigate('/')
    }
  }

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", `${true}`)
      setIsAuth(true);
      navigate('/')
    })
  }


  return (
    <>
      <h1 className='title'>Sign in</h1>
      <form className='loginForm' onSubmit={signInWithEmail}>
        {/* <h2>Sign in with Email</h2> */}
        <input 
          className='loginForm__input'
          name='loginMail' 
          placeholder='Email...'
          onChange={(event) => {setlogInEmail(event.target.value)}}>
        </input>
        <input 
          className='loginForm__input'
          type="password"
          name='loginPassword' 
          placeholder='password...'
          onChange={(event) => {setlogInPassword(event.target.value)}}>
        </input>
        {/* <button onClick={signInWithEmail}>Sign In with Email</button> */}
        <input 
          className='loginForm__submit'
          type="submit" 
          autoFocus 
          value="Go!"/> 
      </form>
      {/* <p>Sign in with Google</p>
      <button className='login-with-google-btn' onClick={signInWithGoogle}>Sign in with Google</button> */}
      {/* <p>not registered yet? Signup</p>
      <button onClick={() => navigate('/signup')}>Sign up</button> */}
    </>
  )
}

export default Login