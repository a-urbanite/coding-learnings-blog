import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { db } from '../../firebase-config';
import Post from '../../components/Post/Post';

const Articlepage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setloading] = useState(true);
  const docRef = doc(db, "posts", id!);

  const getPost = async () => {
    const res = await getDoc(docRef);
    const doc = {...res.data(), id: res.id}
    setPost(doc)
    setloading(false)
  }

  useEffect(() => {
    getPost()
  },[])

  return (
    <>
      {loading ? "Loading..." : <Post post={post}></Post>}
      <Link to='/blog'>Back</Link>
    </>
  )
}

export default Articlepage