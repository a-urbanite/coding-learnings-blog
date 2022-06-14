import { deleteDoc, doc } from 'firebase/firestore';
// import React from 'react'
import { auth, db } from '../../firebase-config'
import { useNavigate } from 'react-router-dom'
import parse from 'html-react-parser'
import './Post.css'

const Post = ({post, isAuth, getPosts, setPostToEdit}: any) => {

  console.log("POSTYPOST", post)

  let navigate = useNavigate();

  const deletePost = async (id: any) => {
    var result = window.confirm("Want to delete?");
    // console.log('DELETEPOST TRIGGERED')
    if (result) {
        const postDoc = doc(db, 'posts', id)
        await deleteDoc(postDoc);
        getPosts()
      }
    };
  
    const editPost = async (post: any) => {
      setPostToEdit(post)
      navigate('/editpost')
    };

  return (
    <div className='post' key={post.id}> 
      <div className='post__header'>
          <h1>{post.title}</h1>
      </div>
      <div className='post__text'>{parse(post.postText)}</div>
      <div className='post__footer'>
        <h3>@{post.author.name}</h3>
        <h3>{post.date}</h3>
        <div className='post__buttonContainer'>
          {isAuth && post.author.id === auth.currentUser?.uid && <button onClick={() => {deletePost(post.id)}}>&#128465;</button>}
          {isAuth && post.author.id === auth.currentUser?.uid && <button onClick={() => {editPost(post)}}>&#9999;</button>}
        </div>
      </div>
    </div>
  )
}

export default Post