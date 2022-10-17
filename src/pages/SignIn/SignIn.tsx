import React from 'react'
import {auth} from '../../firebase-config'
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./SignIn.css"

const Login = ({ setIsAuth }: any) => {
  const navigate = useNavigate();
  const [logInEmail, setlogInEmail] = useState<string>("");
  const [logInPassword, setlogInPassword] = useState<string>("");

  const signInWithEmail = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = await signInWithEmailAndPassword(auth, logInEmail, logInPassword).catch(function(error) {
      console.log(error.code);
      console.log(error.message);
    });
    if(result) {
        setIsAuth(result.user);
        navigate('/')
    }
  }

  return (
    <div className='page pageFrame'>
      <h1 className='sectionTitleLeft'>Sign in</h1>
      <form className='globalForm' onSubmit={signInWithEmail}>
        <input 
          className='globalForm__input'
          name='loginMail' 
          placeholder='Email...'
          onChange={(event) => {setlogInEmail(event.target.value)}}>
        </input>
        <input 
          className='globalForm__input'
          type="password"
          name='loginPassword' 
          placeholder='password...'
          onChange={(event) => {setlogInPassword(event.target.value)}}>
        </input>
        <input 
          className='globalForm__submit'
          type="submit" 
          autoFocus 
          value="Go!"/> 
      </form>
    </div>
  )
}

export default Login