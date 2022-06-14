import React, { useEffect, useState, useRef } from 'react'
import {collection, deleteDoc, getDocs, doc, updateDoc} from 'firebase/firestore'
import { auth, db } from '../../firebase-config';
// import { useNavigate } from 'react-router-dom'
import './Home.css'
// import parse from 'html-react-parser'
import Post from '../../components/Post/Post';
import Sidebar from '../../components/Sidebar/Sidebar';

// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
// General scroll to element function

const Home = ({isAuth, setPostToEdit}: any) => {
  // const myRef = useRef<HTMLDivElement>(null as unknown as HTMLDivElement)
  // // const scrollToRef = ({myRef}: any) => window.scrollTo(0, myRef.current.offsetTop)   
  // // const executeScroll = () => scrollToRef(myRef)
  // const scroll = () => { window.scrollTo(
  //   {
  //     top: myRef.current.offsetTop,
  //     left: 0,
  //     behavior: 'smooth'
  //   })
  // }

  const [postLists, setPostList] = useState<any>([]);
  const postsCollectionRef = collection(db, "posts" )

  const getPosts = async () => {
    // console.log("GETPOSTS TRIGGERED")
    const data = await getDocs(postsCollectionRef);
    // console.log(data)
    setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  }

  useEffect(() => {
    // console.log('USEEFFECT TRIGGERED')
    // console.log('MYREF', myRef.current)
    getPosts()
  },[])


  
  return (
    <div className='homepage'>
      {/* <div ref={myRef}>I wanna be seen</div>  */}
      <div className='sidebar'>
        <Sidebar postLists={postLists}></Sidebar>
      </div>
      <div className='gallery'>{postLists.map((post: any) => {
        return (
          <Post key={post.id} post={post} isAuth={isAuth} getPosts={getPosts} setPostToEdit={setPostToEdit}></Post>
        )
        })}
      </div>
      {/* <button onClick={() => {scroll()}}> Click to scroll </button>  */}
    </div>
  )
}

export default Home