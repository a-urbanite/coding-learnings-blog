import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {collection, deleteDoc, getDocs, doc, updateDoc} from 'firebase/firestore'
import { auth, db } from '../../firebase-config';

interface CreatePostPageProps {
    isAuth: boolean
    postToEdit: any
}

const EditPost = ({isAuth, postToEdit}: CreatePostPageProps) => {

  const [changedTitle, setChangedTitle] = useState("")
  const [changedPostText, setChangedPostText] = useState<string | null>("")
  let navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login")
    }
  }, [])

  useEffect(() => {
    setChangedTitle(postToEdit.post.post.title)
    setChangedPostText(postToEdit.post.post.postText)
  }, [])

  // console.log(postToEdit.post.post.postText)

  const updatePost = async () => {
    const postDoc = doc(db, 'posts', postToEdit.post.post.id)
    await updateDoc(postDoc, {title: changedTitle, postText: changedPostText, date: new Date().toLocaleDateString()});
    navigate('/')
  }

  return (
    <div className='createPostPage'>
      <div className='cpContainer'>
          <h1>Create a Post</h1>
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
          </div>
          <button onClick={updatePost}>Update Post</button>
      </div>
  </div>
  )
}

export default EditPost