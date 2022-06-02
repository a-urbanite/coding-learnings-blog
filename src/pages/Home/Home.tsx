import React, { useEffect, useState } from 'react'
import {collection, deleteDoc, getDocs, doc, updateDoc} from 'firebase/firestore'
import { auth, db } from '../../firebase-config';
import { useNavigate } from 'react-router-dom'
import './Home.css'
// import parse from 'html-react-parser'
import Post from '../../components/Post/Post';

const Home = ({isAuth, setPostToEdit}: any) => {
  const [postLists, setPostList] = useState<any>([]);
  const postsCollectionRef = collection(db, "posts" )

  // let navigate = useNavigate();

  const getPosts = async () => {
    console.log("GETPOSTS TRIGGERED")
    const data = await getDocs(postsCollectionRef);
    setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  }

  // const deletePost = async (id: any) => {
  //   console.log('DELETEPOST TRIGGERED')
  //   const postDoc = doc(db, 'posts', id)
  //   await deleteDoc(postDoc);
  //   getPosts()
  // };

  // const editPost = async (post: any) => {
  //   setPostToEdit({post: {post}})
  //   navigate('/editpost')
  // };

  useEffect(() => {
    console.log('USEEFFECT TRIGGERED')
    getPosts()
  },[])
  
  // console.log(postLists[0].date.seconds.toLocaleDateString())
  console.log(new Date().toLocaleDateString())

  return (


    <div className='homePage'>{postLists.map((post: any) => {
      return (
        <Post 
          key={post.id}
          post={post} 
          isAuth={isAuth} 
          getPosts={getPosts} 
          setPostToEdit={setPostToEdit}></Post>
        // <div className='post' key={post.id}> 
        //   <div className='postHeader'>
        //     <div className='title'>
        //       <h1>{post.title}</h1>
        //     </div>
        //     <div className='deletePost'>
        //       {isAuth && post.author.id === auth.currentUser?.uid && <button onClick={() => {deletePost(post.id)}}>&#128465;</button>}
        //     </div>
        //     <div>
        //       <button onClick={() => {editPost(post)}}>Edit</button>
        //     </div>
        //   </div>
        //   <div className='postTextContainer'>{parse(post.postText)}</div>
        //   <h3>@{post.author.name}</h3>
        //   <h3>{post.date}</h3>
        // </div>
      )
    })}</div>
  )
}

export default Home