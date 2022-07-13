import { collection, doc, DocumentReference, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
// import 'firebase/firestore';
import { db } from '../../firebase-config';
import Post from '../../components/Post/Post';

const Articlepage = () => {
  const { id } = useParams();
  // console.log(id)

  const [post, setPost] = useState<any>(null);
  const [loading, setloading] = useState(true);
  const docRef = doc(db, "posts", id!);

  useEffect(() => {
    const getPost = async () => {
      const res = await getDoc(docRef);
      const doc = {...res.data(), id: res.id}
      // const docData = doc.data()
      console.log("POST1",doc)
      setPost(doc)
      console.log("POST2",post)
      setloading(false)
    }
    
    // console.log("DOCREF", docRef)
    getPost()
  },[])

  return (
    <>
      {/* <div>Articlepage</div> */}
      {/* <p>{id}</p> */}
      {loading ? "Loading..." : 
      // post.title
      <Post post={post}></Post>
    }
    <Link to='/blog'>Back</Link>

      

    </>
  )
}

export default Articlepage