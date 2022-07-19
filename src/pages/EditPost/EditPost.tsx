import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { doc, updateDoc} from 'firebase/firestore'
import { auth, db } from '../../firebase-config';
import Editor from '../../components/Editor/Editor';

interface CreatePostPageProps {
    isAuth: boolean
    postToEdit: any
}

const EditPost = ({isAuth, postToEdit}: CreatePostPageProps) => {

  const [title, setTitle] = useState("")
  const [postText, setPostText] = useState<string | null>("")
  const [pubDate, setpubDate] = useState<any>(null)
  const [changeDateChecker, setchangeDateChecker] = useState(false)
  let navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login")
    }
    setTitle(postToEdit.title)
    setPostText(postToEdit.postText)
  }, [])

  // console.log(new Date(pubDate))
  
  
  const updatePost = async () => {
    const postDoc = doc(db, 'posts', postToEdit.id)
    if (changeDateChecker) {
      
      console.log("PUBDATECHANGE TRIGGERED!", pubDate)
      await updateDoc(postDoc, {
        title: title, 
        postText: postText, 
        date: new Date(pubDate),
        author: 
          {name: auth.currentUser?.displayName, 
          id: auth.currentUser?.uid}
        }
      )
    } else {
      await updateDoc(postDoc, {
        title: title, 
        postText: postText, 
        author: 
          {name: auth.currentUser?.displayName, 
          id: auth.currentUser?.uid}
        }
      )
    }
    navigate('/blog')
  }

  return (
    <div className='createPostPage'>
      <h1>Edit a Post</h1>
      <Editor 
          title={postToEdit.title} 
          setTitle={setTitle}
          postText={postToEdit.postText}
          setPostText={setPostText}/>
      <input onChange={() => setchangeDateChecker(!changeDateChecker)} type="checkbox"></input>
      <input type="date" onChange={(event) => {setpubDate(event.target.value)}}></input>
      <button onClick={updatePost}>Update Post</button>
      <button onClick={() => navigate("/blog")}>Back</button>
    </div>
  )
}

export default EditPost