import React, { useEffect, useState } from 'react'
import {collection, deleteDoc, getDocs, doc} from 'firebase/firestore'
import { auth, db } from '../../firebase-config';
import './Home.css'
import parse from 'html-react-parser'

const Home = ({isAuth}: any) => {
  const [postLists, setPostList] = useState<any>([]);
  const postsCollectionRef = collection(db, "posts" )

  const getPosts = async () => {
    console.log("GETPOSTS TRIGGERED")
    const data = await getDocs(postsCollectionRef);
    setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  }

  const deletePost = async (id: any) => {
    console.log('DELETEPOST TRIGGERED')
    const postDoc = doc(db, 'posts', id)
    await deleteDoc(postDoc);
    getPosts()
  };

  useEffect(() => {
    console.log('USEEFFECT TRIGGERED')
    getPosts()
  },[])
  

  return (


    <div className='homePage'>{postLists.map((post: any) => {
      return (
        <div className='post' key={post.id}> 
          <div className='postHeader'>
            <div className='title'>
              <h1>{post.title}</h1>
            </div>
            <div className='deletePost'>
              {isAuth && post.author.id === auth.currentUser?.uid && <button onClick={() => {deletePost(post.id)}}>&#128465;</button>}
            </div>
          </div>
          <div className='postTextContainer'>{parse(post.postText)}</div>
          <h3>@{post.author.name}</h3>
        </div>
      )
    })}</div>
  )
}

export default Home