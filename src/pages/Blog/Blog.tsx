import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase-config';
import './Blog.css'
import Sidebar from '../../components/Sidebar/Sidebar';
import { sortAfterDateDesc } from './sorters';
import KeywordsUI from '../../components/KeywordsUI/KeywordsUI';
import Gallery from '../../components/Gallery/Gallery';

const Blog = ({isAuth, setPostToEdit}: any) => {
  const [postList, setPostList] = useState<any>([]);
  const [postsToDisplay, setpostsToDisplay] = useState<any>([]);
  const [filteredPosts, setfilteredPosts] = useState<any[]>([])
  const [sortOrderAsc, setsortOrderAsc] = useState(false)
  const [selectedKeywords, setselectedKeywords] = useState<any[]>([])
  const postsCollectionRef = collection(db, "posts" )

  const getPosts = async () => {
    const data = await getDocs(postsCollectionRef);
    const postArr: any[] = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
    const sortedArr = sortAfterDateDesc(postArr, "date")
    setPostList(sortedArr)
  }

  useEffect(() => {
    getPosts()
  },[])

  useEffect(() => {
    setpostsToDisplay(postList)
  }, [postList])
  
  useEffect(() => {
    if (filteredPosts.length > 0 && selectedKeywords.length > 0) {
      setpostsToDisplay(filteredPosts)
    } else {
      setpostsToDisplay(postList)
    }
  },[filteredPosts])

  
  return (
    <div className='blog'>
      <div className='blog__columnA'>
        <KeywordsUI 
          postList={postList} 
          setPostList={setPostList} 
          filteredPosts={filteredPosts} 
          setfilteredPosts={setfilteredPosts}
          selectedKeywords={selectedKeywords}
          setselectedKeywords={setselectedKeywords}/>
        <Sidebar postsToDisplay={postsToDisplay} />
      </div>
      <div className='blog__columnB'>
        <Gallery 
          sortOrderAsc={sortOrderAsc} 
          setsortOrderAsc={setsortOrderAsc}
          postList={postList}
          setPostList={setPostList}
          isAuth={isAuth}
          getPosts={getPosts}
          setPostToEdit={setPostToEdit}
          postsToDisplay={postsToDisplay}
          />
      </div>
    </div>
  )
}

export default Blog