import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase-config';
import './Blog.css'
import Sidebar from '../../components/BlogDisplay/Sidebar/Sidebar';
import { sortAfterDateDesc } from './sorters';
import KeywordsUI from '../../components/BlogDisplay/KeywordsUI/KeywordsUI';
import Gallery from '../../components/BlogDisplay/Gallery/Gallery';
import SearchBar from '../../components/BlogDisplay/SearchBar/SearchBar';
import SorterBar from '../../components/BlogDisplay/SorterBar/SorterBar';
import Pagination from '../../components/BlogDisplay/Pagination/Pagination';

const Blog = ({isAuth, setPostToEdit}: any) => {
  const [postList, setPostList] = useState<any>([]);
  const [postsToDisplay, setpostsToDisplay] = useState<any>([]);
  const [currentPageContents, setcurrentPageContents] = useState<any>([])
  
  const fetchPosts = async () => {
    const postsCollectionRef = collection(db, "posts" )
    const data = await getDocs(postsCollectionRef);
    const postArr: any[] = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
    const sortedArr = sortAfterDateDesc(postArr, "date")
    return sortedArr
  }
  
  useEffect(() => {
    fetchPosts().then((posts) => {
      setPostList(posts)
      setpostsToDisplay(posts)
    })
  },[])
  

  return (
    <div className='blog'>
      <div className='blog__columnA'>
        <SearchBar
          postList={postList}
          setpostsToDisplay={setpostsToDisplay}
        />
        <KeywordsUI 
          postList={postList}
          postsToDisplay={postsToDisplay}
          setpostsToDisplay={setpostsToDisplay}
        />
        <Sidebar 
          currentPageContents={currentPageContents} 
        />
      </div>
      <div className='blog__columnB'>
        <div className='galleryHeaderBar'>
          <Pagination 
            postsToDisplay={postsToDisplay}
            setcurrentPageContents={setcurrentPageContents}
          />
          <SorterBar 
            postsToDisplay={postsToDisplay}
            setpostsToDisplay={setpostsToDisplay}
          />
        </div>
        <Gallery 
          currentPageContents={currentPageContents}
          isAuth={isAuth}
          setPostToEdit={setPostToEdit}
        />
      </div>
    </div>
  )
}

export default Blog