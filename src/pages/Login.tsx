import React from 'react'
import {auth, provider} from '../firebase-config'
import {signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Login = ({ setIsAuth }: any) => {

  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", `${true}`)
      setIsAuth(true);
      navigate('/')
    })
  }

  return (
    <div className='loginPage'>
        <p>Sign in with Email</p>
        <p>Sign in with Google</p>
        <button className='login-with-google-btn' onClick={signInWithGoogle}>
            Sign in with Google
        </button>
    </div>
  )
}

export default Login