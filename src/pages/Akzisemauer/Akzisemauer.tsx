import { collection } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db, auth } from '../../firebase-config'
import { doc, getDoc } from "firebase/firestore";
import parse from 'html-react-parser'
import 'firebase/firestore';

// const Interface 
// 

const Akzisemauer = () => {


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



console.log("CONTENT OF STATE", post)

  // async function getDoc({id}: any) {
  //   const snapshot = await db.collection('users').doc(id).get();
  //   const postsCollectionRef = collection(db, "posts" )
  //   const data = snapshot.data();
  // }
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

export default Akzisemauer