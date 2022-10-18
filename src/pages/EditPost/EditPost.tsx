import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { doc, updateDoc} from 'firebase/firestore'
import { auth, db } from '../../firebase-config';
import ArticleEditor from '../../components/ArticleEditor/ArticleEditor'

interface CreatePostPageProps {
    isAuth: boolean
    postToEdit: any
}

const EditPost = ({isAuth, postToEdit}: CreatePostPageProps) => {

  const [title, setTitle] = useState("")
  const [postText, setPostText] = useState<string | null>("")
  const [pubDate, setpubDate] = useState<any>(null)
  const [changeDateChecker, setchangeDateChecker] = useState(false)
  const [keywords, setkeywords] = useState<string[]>([])
  let navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login")
    }
    setTitle(postToEdit.title)
    setPostText(postToEdit.postText)
    if (postToEdit.keywords) {
      setkeywords(postToEdit?.keywords)
    }
  }, [])

  const updatePost = async () => {
    const postDoc = doc(db, 'posts', postToEdit.id)
    await updateDoc(postDoc, {
      title: title, 
      postText: postText, 
      date: changeDateChecker? new Date(pubDate) : postToEdit.date,
      author: 
        {name: auth.currentUser?.displayName, 
        id: auth.currentUser?.uid},
      keywords: keywords
      }
    )
    navigate('/')
  }

  return (
    <div className='page pageFrame'>
      <h1 className='sectionTitleLeft'>Edit a Post</h1>
      <ArticleEditor
          title={title} 
          setTitle={setTitle}
          postText={postText}
          setPostText={setPostText} 
          keywords={keywords} 
          setkeywords={setkeywords}
      />
      <input onChange={() => setchangeDateChecker(!changeDateChecker)} type="checkbox"></input>
      <input type="date" onChange={(event) => {setpubDate(event.target.value)}}></input>
      <button onClick={updatePost}>Update Post</button>
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  )
}

export default EditPost