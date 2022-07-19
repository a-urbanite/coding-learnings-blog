import { ChangeEvent, useEffect, useState } from 'react'
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
    // console.log("AUTH OBJECT", auth)
    await addDoc(postsCollectionRef, {
      title, 
      postText, 
      date: new Date(), 
      author: 
        {name: auth.currentUser?.displayName, 
        id: auth.currentUser?.uid}}
      )
    navigate('/blog')
  }

  // const addKeyword = (event: any) => {
  //   console.log(event)
  //   if (event.key === "Enter") {
  //     setkeywords([...keywords, event.target.value])
  //   }
  // }

  // const addKeyword = (event: any) => {
  //   if (event.key === 'Enter' && event.target.id === "keywordInput") {
  //     // console.log("TRIGGRED!!!!!!", event)
  //     console.log("KEYWORDS ARRAY", keywords)
  //     console.log(event.target.value)
  //     if ( keywords.includes(event.target.value)) {
  //       console.log("double detected!!!")
  //       return
  //     } else {
  //       console.log("KEYWORD ADDED!")
  //       setkeywords(oldArray => [...oldArray, event.target.value])
  //     }

  //       console.log("11KEYWORDS ARRAY After", keywords)
        
  //   }
  // }

  // const deletekeyword = (event: any) => {
  //   // console.log("delete keyword triggered")
  //   const keywordToRemove = event.target.parentElement.innerText.slice(0, -1)
  //   setkeywords(keywords.filter(keyword => keyword !== keywordToRemove))
  // } 

  useEffect(() => {
    if (!isAuth) {
      navigate("/")
    }
    // document.addEventListener('keydown', addKeyword);
    // return () => {
    //   document.removeEventListener('keydown', addKeyword);
    // };
  }, [])
  

  return (
    <div className='createPostPage'>
        <h1>Create a Post</h1>
        <Editor 
          title={title} 
          setTitle={setTitle}
          postText={postText}
          setPostText={setPostText} />
        {/* <input placeholder='keywords...' id='keywordInput'></input> */}
        {/* {keywords.map((keyword: any) => { return (<span key={keyword}>{keyword}<button onClick={deletekeyword}>x</button></span> )})} */}
        <KeywordsBar keywords={keywords} setkeywords={setkeywords}></KeywordsBar>
        <br />
        <button className='submit' onClick={createPost}>Submit Post</button>
    </div>
  )
}

export default CreatePost