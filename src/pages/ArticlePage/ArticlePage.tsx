import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { db } from '../../firebase-config';
import Post from '../../components/BlogDisplay/Gallery/Post/Post';

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
    <div className='page'>
      {loading ? "Loading..." : <Post post={post}></Post>}
      <Link to='/'><span className='globalBtn'>Back</span></Link>
    </div>
  )
}

export default Articlepage