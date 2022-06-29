import { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Blog from '../../pages/Blog/Blog';
import CreatePost from '../../pages/CreatePost/CreatePost';
import EditPost from '../../pages/EditPost/EditPost';
import Login from '../../pages/Login';
import Navbar from '../Navbar/Navbar';
import Home from '../../pages/Home/Home';
import Archaeology from '../../pages/Archaeology/Archaeology';
import CodingProjects from '../../pages/CodingProjects/CodingProjects';
import {signOut} from 'firebase/auth'
import { auth } from '../../firebase-config';
import PetMeUp from '../../pages/PetMeUp/PetMeUp';
import DAIWordpressPlugin from '../../pages/DAIWordpressPlugin/DAIWordpressPlugin';
import Pagewrapper from '../PageWrapper/Pagewrapper';
import MovieFinder from '../../pages/MovieFinder/MovieFinder';
import Akzisemauer from '../../pages/Akzisemauer/Akzisemauer';



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
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} signUserOut={signUserOut}></Navbar>
      <Routes>
        <Route path='/' element={<Pagewrapper contents={<Home/>}/>}/>
        <Route path="/blog" element={<Blog isAuth={isAuth} setPostToEdit={setPostToEdit}/>} />
        <Route path="/createpost" element={
          <CreatePost 
            isAuth={isAuth} 
          />} />
        <Route path="/editpost" element={
          <EditPost 
            isAuth={isAuth} 
            postToEdit={postToEdit} 
          />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
        <Route path="/archaeology" element={<Pagewrapper contents={<Archaeology/>}/>} />
        <Route path="/coding" element={<CodingProjects/>} />
          <Route path="/coding/pet-me-up" element={<Pagewrapper contents={<PetMeUp/>}/>} />
          <Route path="/coding/moviefinder" element={<Pagewrapper contents={<MovieFinder/>}/>} />
          <Route path="/coding/akzisemauer" element={<Pagewrapper contents={<Akzisemauer/>}/>} />
          <Route path="/coding/dai-wordpress-plugin" element={<Pagewrapper contents={<DAIWordpressPlugin/>}/>} />
      </Routes>
    </Router>
  );
}

export default App;