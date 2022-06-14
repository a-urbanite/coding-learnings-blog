import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import {signOut} from 'firebase/auth'
import { auth } from '../../firebase-config';
import './Navbar.css'

const Navbar = ({isAuth, setIsAuth}: any) => {

  const signUserOut = () => {
      signOut(auth).then(() => {
          localStorage.clear()
          setIsAuth(false)
          window.location.pathname = "/login"
      })
      }

  return (
    <nav>
        <Link className='mainMenuLink' to="/"> Home </Link>
        { !isAuth ? 
        <Link className='mainMenuLink' to="/login"> Login </Link> : 
        <>
        <Link className='mainMenuLink' to="/createpost"> Create Post </Link>
        <button onClick={signUserOut}>Log Out</button>
        </>
        }
    </nav>
  )
}

export default Navbar