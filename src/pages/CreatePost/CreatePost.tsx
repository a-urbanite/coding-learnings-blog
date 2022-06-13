import React, { useEffect, useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db, auth } from '../../firebase-config'
import { useNavigate } from 'react-router-dom'
import './CreatePost.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import EditorToolbar, { modules, formats } from "../../components/Editor/EditorToolbar";
import Editor from "../../components/Editor/Editor"

interface CreatePostPageProps {
      isAuth: boolean
  }

const CreatePost = ({isAuth}: CreatePostPageProps) => {

  const [title, setTitle] = useState("")
  const [postText, setPostText] = useState<string | null>("")
  let navigate = useNavigate();

  const postsCollectionRef = collection(db, "posts" )
  const createPost = async () => {
    console.log(auth)
    await addDoc(postsCollectionRef, {
      title, 
      postText, 
      date: new Date().toLocaleDateString(), 
      author: 
        {name: auth.currentUser?.displayName, 
        id: auth.currentUser?.uid}}
      )
    navigate('/')
  }

  useEffect(() => {
    if (!isAuth) {
      navigate("/login")
    }
  }, [])


  return (
    <div className='createPostPage'>
        <h1>Create a Post</h1>
        <div className='inputGp'>
            {/* <label>Title:</label> */}
            <input 
              className='titleBox'
              placeholder='Title...' 
              onChange={(event) => {setTitle(event.target.value)}}
            />
        </div>
        <div className='inputGp'>
            {/* <label>Text:</label> */}
            <div className='editor'>
              <EditorToolbar />
              <ReactQuill 
                theme="snow" 
                onChange={setPostText}
                placeholder={"Write something awesome..."}
                modules={modules}
                formats={formats}
                />
            </div>
            <button className='submit' onClick={createPost}>Submit Post</button>
        </div>
    </div>
  )
}

export default CreatePost