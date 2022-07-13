import { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Blog from '../../pages/Blog/Blog';
import CreatePost from '../../pages/CreatePost/CreatePost';
import EditPost from '../../pages/EditPost/EditPost';
import Login from '../../pages/SignIn/SignIn';
import Navbar from '../Navbar/Navbar';
import Home from '../../pages/Home/Home';
import Archaeology from '../../pages/Archaeology/Archaeology';
import {signOut} from 'firebase/auth'
import { auth } from '../../firebase-config';
import PetMeUp from '../../pages/PetMeUp/PetMeUp';
import DAIWordpressPlugin from '../../pages/DAIWordpressPlugin/DAIWordpressPlugin';
import Pagewrapper from '../PageWrapper/Pagewrapper';
import MovieFinder from '../../pages/MovieFinder/MovieFinder';
import Akzisemauer from '../../pages/Akzisemauer/Akzisemauer';
import TestSite from '../../pages/TestSite/TestSite';
import LCPA from '../../pages/LCPA/LCPA';
import SignUp from '../../pages/SignUp/SignUp';
import Settings from '../../pages/Settings/Settings';
import ArticlePage from '../../pages/ArticlePage/ArticlePage'


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
        <Route path="/blog" element={<Blog isAuth={isAuth} setPostToEdit={setPostToEdit}/>}/>
          <Route path='/blog/:id' element={<Pagewrapper contents={<ArticlePage />}/>}/>
        <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>} />
        <Route path="/editpost" element={<EditPost isAuth={isAuth} postToEdit={postToEdit}/>}/>
        <Route path="/login" element={<Pagewrapper contents={<Login setIsAuth={setIsAuth}/>}/>} />
        <Route path="/signup" element={<Pagewrapper contents={<SignUp/>}/>} />
        <Route path="/archaeology" element={<Pagewrapper contents={<Archaeology/>}/>} />
        <Route path="coding">
          <Route path="pet-me-up" element={<Pagewrapper contents={<PetMeUp/>}/>} />
          <Route path="moviefinder" element={<Pagewrapper contents={<MovieFinder/>}/>} />
          <Route path="akzisemauer" element={<Pagewrapper contents={<Akzisemauer/>}/>} />
          <Route path="dai-wordpress-plugin" element={<Pagewrapper contents={<DAIWordpressPlugin/>}/>} />
          <Route path="least-cost-path-analysis" element={<Pagewrapper contents={<LCPA/>}/>} />
        </Route>
        <Route path="/test-site" element={<Pagewrapper contents={<TestSite/>}/>} />
        <Route path="/settings" element={<Pagewrapper contents={<Settings isAuth={isAuth}/>}/>} />
      </Routes>
    </Router>
  );
}

export default App;