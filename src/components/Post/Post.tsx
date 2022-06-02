import { deleteDoc, doc } from 'firebase/firestore';
// import React from 'react'
import { auth, db } from '../../firebase-config'
import { useNavigate } from 'react-router-dom'
import parse from 'html-react-parser'

const Post = ({post, isAuth, getPosts, setPostToEdit}: any) => {

  let navigate = useNavigate();

  const deletePost = async (id: any) => {
    var result = window.confirm("Want to delete?");
    console.log('DELETEPOST TRIGGERED')
    if (result) {
        const postDoc = doc(db, 'posts', id)
        await deleteDoc(postDoc);
        getPosts()
      }
    };
  
    const editPost = async (post: any) => {
      setPostToEdit({post: {post}})
      navigate('/editpost')
    };

  return (
    <div className='post' key={post.id}> 
      <div className='postHeader'>
        <div className='title'>
          <h1>{post.title}</h1>
        </div>
        <div className='deletePost'>
          {isAuth && post.author.id === auth.currentUser?.uid && <button onClick={() => {deletePost(post.id)}}>&#128465;</button>}
        </div>
        <div>
          <button onClick={() => {editPost(post)}}>Edit</button>
        </div>
      </div>
      <div className='postTextContainer'>{parse(post.postText)}</div>
      <h3>@{post.author.name}</h3>
      <h3>{post.date}</h3>
    </div>
  )
}

export default Post