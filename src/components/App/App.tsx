import { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from '../../pages/Home/Home';
import CreatePost from '../../pages/CreatePost/CreatePost';
import EditPost from '../../pages/EditPost/EditPost';
import Login from '../../pages/Login';
import Navbar from '../Navbar/Navbar';


function App() {
  const [isAuth, setIsAuth] = useState<any>(localStorage.getItem('isAuth'));
  const [postToEdit, setPostToEdit] = useState<any>({});

  return (
    <Router>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth}></Navbar>
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
