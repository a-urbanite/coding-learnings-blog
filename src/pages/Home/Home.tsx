import React, { useEffect, useState } from 'react'
import {collection, deleteDoc, getDocs, doc, updateDoc} from 'firebase/firestore'
import { auth, db } from '../../firebase-config';
// import { useNavigate } from 'react-router-dom'
import './Home.css'
// import parse from 'html-react-parser'
import Post from '../../components/Post/Post';
import Sidebar from '../../components/Sidebar/Sidebar';

const Home = ({isAuth, setPostToEdit}: any) => {
  const [postLists, setPostList] = useState<any>([]);
  const postsCollectionRef = collection(db, "posts" )

  const getPosts = async () => {
    console.log("GETPOSTS TRIGGERED")
    const data = await getDocs(postsCollectionRef);
    setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  }

  useEffect(() => {
    console.log('USEEFFECT TRIGGERED')
    getPosts()
  },[])
  
  return (
    <div className='homepage'>
      <div className='sidebar'>
        <Sidebar postLists={postLists}></Sidebar>
      </div>
      <div className='gallery'>{postLists.map((post: any) => {
        return (
          <Post key={post.id} post={post} isAuth={isAuth} getPosts={getPosts} setPostToEdit={setPostToEdit}></Post>
        )
        })}
      </div>
    </div>
  )
}

export default Home