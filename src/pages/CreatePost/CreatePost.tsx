import { useEffect, useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db, auth } from '../../firebase-config'
import { useNavigate } from 'react-router-dom'
import './CreatePost.css'
import ArticleEditor from '../../components/ArticleEditor/ArticleEditor'

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
    navigate('/')
  }

  useEffect(() => {
    if (!isAuth) {
      navigate("/")
    }
  }, [])
  

  return (
    <div className='page pageFrame'>
        <h1 className='sectionTitleLeft'>Create a Post</h1>
        <ArticleEditor
          title={title} 
          setTitle={setTitle}
          postText={postText}
          setPostText={setPostText} 
          keywords={keywords} 
          setkeywords={setkeywords}
        />
        <div className='bottomBar'>
          <span className='globalBtn' onClick={createPost}>Submit Post</span>
        </div>
    </div>
  )
}

export default CreatePost