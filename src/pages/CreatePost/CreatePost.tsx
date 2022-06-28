import { useEffect, useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db, auth } from '../../firebase-config'
import { useNavigate } from 'react-router-dom'
import './CreatePost.css'
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
      navigate("/blog")
    }
  }, [])


  return (
    <div className='createPostPage'>
        <h1>Create a Post</h1>
        <Editor 
          title={title} 
          setTitle={setTitle}
          postText={postText}
          setPostText={setPostText} />
        <button className='submit' onClick={createPost}>Submit Post</button>
    </div>
  )
}

export default CreatePost