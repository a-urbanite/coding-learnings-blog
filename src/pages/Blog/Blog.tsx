import { useEffect, useRef, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase-config';
import './Blog.css'
import Post from '../../components/Post/Post';
import Sidebar from '../../components/Sidebar/Sidebar';
import { sortAfterDateAsc, sortAfterDateDesc, sortAfterStringAsc, sortAfterStringDesc } from './sorters';

const Blog = ({isAuth, setPostToEdit}: any) => {
  const [postList, setPostList] = useState<any>([]);
  const [sortOrderAsc, setsortOrderAsc] = useState(false)
  const postsCollectionRef = collection(db, "posts" )

  const getPosts = async () => {
    const data = await getDocs(postsCollectionRef);
    const postArr: any[] = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
    const sortedArr = sortAfterDateDesc(postArr, "date")
    setPostList(sortedArr)
  }

  const sortPosts = (category: any, array: any[], setter: any) => {
    let sortedPosts
    if (category === "title") {
      sortedPosts = !sortOrderAsc ? sortAfterStringAsc(array, category) : sortAfterStringDesc(array, category)
    } else {
      sortedPosts = !sortOrderAsc ? sortAfterDateAsc(array, category) : sortAfterDateDesc(array, category)
    }
    setsortOrderAsc(!sortOrderAsc)
    setter([...sortedPosts])
  }

  useEffect(() => {
    getPosts()
  },[])
  
  return (
    <div className='homepage'>
      <Sidebar postList={postList}></Sidebar>
      <div className='gallery'>
        {!sortOrderAsc ? "ASC" : "DESC"}
        <button onClick={() => sortPosts("title", postList, setPostList)}>Sort after name</button>
        <button onClick={() => sortPosts("date", postList, setPostList)}>Sort after date</button>
        {postList.map((post: any, index:any) => {
        return (
          <Post key={post.id} post={post} isAuth={isAuth} getPosts={getPosts} setPostToEdit={setPostToEdit}></Post>
        )
        })}
      </div>
    </div>
  )
}

export default Blog