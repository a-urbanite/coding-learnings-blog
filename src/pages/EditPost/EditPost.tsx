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
  let navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login")
    }
    setTitle(postToEdit.title)
    setPostText(postToEdit.postText)
  }, [])

  const updatePost = async () => {
    const postDoc = doc(db, 'posts', postToEdit.id)
    await updateDoc(postDoc, {
      title: title, 
      postText: postText, 
      // date: new Date().toLocaleDateString(),
      author: 
        {name: auth.currentUser?.displayName, 
        id: auth.currentUser?.uid}
      }
    )
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
      <button onClick={updatePost}>Update Post</button>
      </div>
  )
}

export default EditPost