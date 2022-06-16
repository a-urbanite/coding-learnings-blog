import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import {signOut} from 'firebase/auth'
import { auth } from '../../firebase-config';
import './Navbar.css'
import { menuItemsList } from '../MenuItems/MenuItems';
import MenuItems from '../MenuItems/MenuItems';

const Navbar = ({isAuth, setIsAuth}: any) => {

  const signUserOut = () => {
      signOut(auth).then(() => {
          localStorage.clear()
          setIsAuth(false)
          window.location.pathname = "/login"
      })
      }

  const depthLevel = 0;

  console.log(window.location.pathname)

  return (

    <nav>
        {/* <nav>
          <ul className="menus">
            {menuItemsList.map((menu, index) => {
            return <MenuItems items={menu} key={index} depthLevel={depthLevel}/>;
            })}
          </ul>
        </nav> */}
        <Link className='mainMenuLink' to="/"> Home </Link>
        <Link className='mainMenuLink' to="/coding"> Coding </Link>
        <Link className='mainMenuLink' to="/archaeology"> Archaeology </Link>
        <Link className='mainMenuLink' to="/blog"> Blog </Link>
        { !isAuth ? <Link className='mainMenuLink' to="/login"> Login </Link> : 
        <>
          <Link className='mainMenuLink' to="/createpost"> Create Post </Link>
          <button onClick={signUserOut}>Log Out</button>
        </>
        }
    </nav>
  )
}

export default Navbar