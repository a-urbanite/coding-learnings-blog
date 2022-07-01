import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase-config';
import parse from 'html-react-parser'

const TestSite = () => {

  const [post, setpost] = useState<any | undefined>(undefined)

  const fetchSingleDoc = async () => {
    const docRef = doc(db, "posts", "TaTusGaiRuY4aeLqRKOp");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      console.log("No such document!");
    }
    setpost(docSnap.data());
  }

  useEffect( () => {
    fetchSingleDoc();
  }, [])


  if (!post) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h1 className='title'>{post.title}</h1>
      <div>{parse(post.postText)}</div>
    </>
  )
}

export default TestSite