import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Blog from './pages/Blog/Blog';
import CreatePost from './pages/CreatePost/CreatePost';
import EditPost from './pages/EditPost/EditPost';
import Login from './pages/SignIn/SignIn';
import Navbar from './components/Navbar/Navbar';
import {signOut} from 'firebase/auth'
import { auth } from './firebase-config';
import SignUp from './pages/SignUp/SignUp';
import Settings from './pages/Settings/Settings';
import ArticlePage from './pages/ArticlePage/ArticlePage'
import './styles/globalVars.css'
import './styles/globalButtons.css'
import FooterBar from './components/FooterBar/FooterBar';
import Impressum from './pages/Impressum/Impressum';

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
      <div className='pageWrapper'>
        <Routes>
          <Route path="/" element={<Blog isAuth={isAuth} setPostToEdit={setPostToEdit}/>}/>
            <Route path='/blog/:id' element={<ArticlePage />}/>
          <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>} />
          <Route path="/editpost" element={<EditPost isAuth={isAuth} postToEdit={postToEdit}/>}/>
          <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/settings" element={<Settings isAuth={isAuth}/>} />
          <Route path="/impressum" element={<Impressum/>} />
        </Routes>
      </div>
      <FooterBar/>
    </Router>
  );
}

export default App;