import { useEffect, useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db, auth } from '../../firebase-config'
import { useNavigate } from 'react-router-dom'
import './CreatePost.css'
import Editor from "../../components/Editor/Editor"
import KeywordsBar from '../../components/KeywordsBar/KeywordsBar'

interface CreatePostPageProps {
      isAuth: boolean
  }

const CreatePost = ({isAuth}: CreatePostPageProps) => {
  const [keywords, setkeywords] = useState<string[]>([])
  const [title, setTitle] = useState("")
  const [postText, setPostText] = useState<string | null>("")
  let navigate = useNavigate();

  const postsCollectionRef = collection(db, "posts" )
  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title, 
      postText, 
      date: new Date(), 
      author: 
        {name: auth.currentUser?.displayName, 
        id: auth.currentUser?.uid},
      keywords
      })
    navigate('/blog')
  }

  useEffect(() => {
    if (!isAuth) {
      navigate("/")
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
        <KeywordsBar keywords={keywords} setkeywords={setkeywords}></KeywordsBar>
        <br />
        <button className='submit' onClick={createPost}>Submit Post</button>
    </div>
  )
}

export default CreatePost