import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from '../../pages/Home/Home';
import CreatePost from '../../pages/CreatePost/CreatePost';
import EditPost from '../../pages/EditPost/EditPost';
import Login from '../../pages/Login';
import {signOut} from 'firebase/auth'
import { auth } from '../../firebase-config';


function App() {
  const [isAuth, setIsAuth] = useState<any>(localStorage.getItem('isAuth'));
  const [postToEdit, setPostToEdit] = useState<any>({});

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname = "/login"
    })
  }

  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        { !isAuth ? 
        <Link to="/login"> Login </Link> : 
        <>
          <Link to="/createpost"> Create Post </Link>
          <button onClick={signUserOut}>Log Out</button>
        </>
        }
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} setPostToEdit={setPostToEdit}/>} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>} />
        <Route path="/editpost" element={<EditPost isAuth={isAuth} postToEdit={postToEdit}/>} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
      </Routes>
    </Router>
  );
}
export default App;
