import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {collection, deleteDoc, getDocs, doc, updateDoc} from 'firebase/firestore'
import { auth, db } from '../../firebase-config';
import Editor from '../../components/Editor/Editor';

interface CreatePostPageProps {
    isAuth: boolean
    postToEdit: any
}

const EditPost = ({isAuth, postToEdit}: CreatePostPageProps) => {

  const [title, setTitle] = useState("")
  const [postText, setPostText] = useState<string | null>("")
  let navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login")
    }
  }, [])

  const updatePost = async () => {
    const postDoc = doc(db, 'posts', postToEdit.post.post.id)
    await updateDoc(postDoc, {title: title, postText: postText, date: new Date().toLocaleDateString()});
    navigate('/')
  }

  return (
    <div className='createPostPage'>
      <h1>Edit a Post</h1>
      <Editor 
          title={postToEdit.post.post.title} 
          setTitle={setTitle}
          postText={postToEdit.post.post.postText}
          setPostText={setPostText}
      />


      {/* <div className='cpContainer'>
          <div className='inputGp'>
              <label>Title:</label>
              <input 
                placeholder='Title...'
                defaultValue={postToEdit.post.post.title}
                onChange={(event) => {setChangedTitle(event.target.value)}}
              />
          </div>
          <div className='inputGp'>
              <label>Text:</label>
              <div className='editor'>
                <ReactQuill 
                  theme="snow" 
                  defaultValue={postToEdit.post.post.postText}
                  onChange={setChangedPostText}
                />
              </div>
          </div> */}
          <button onClick={updatePost}>Update Post</button>
      </div>
  )
}

export default EditPost