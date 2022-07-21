import { useEffect, useRef, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase-config';
import './Blog.css'
import Post from '../../components/Post/Post';
import Sidebar from '../../components/Sidebar/Sidebar';
import { sortAfterDateAsc, sortAfterDateDesc, sortAfterStringAsc, sortAfterStringDesc } from './sorters';
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

  // const sortPosts = (category: any, array: any[], setter: any) => {
  //   let sortedPosts
  //   if (category === "title") {
  //     sortedPosts = !sortOrderAsc ? sortAfterStringAsc(array, category) : sortAfterStringDesc(array, category)
  //   } else {
  //     sortedPosts = !sortOrderAsc ? sortAfterDateAsc(array, category) : sortAfterDateDesc(array, category)
  //   }
  //   setsortOrderAsc(!sortOrderAsc)
  //   setter([...sortedPosts])
  // }

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

  console.log("POSTLIST", postList)
  console.log("POSTSTODISPLAY", postsToDisplay)
  
  return (
    <div className='blogpage'>
      <div className='columnA'>
        <KeywordsUI 
          postList={postList} 
          setPostList={setPostList} 
          filteredPosts={filteredPosts} 
          setfilteredPosts={setfilteredPosts}
          selectedKeywords={selectedKeywords}
          setselectedKeywords={setselectedKeywords}
          ></KeywordsUI>
        <Sidebar postsToDisplay={postsToDisplay} ></Sidebar>
      </div>
      <div className='columnB'>
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