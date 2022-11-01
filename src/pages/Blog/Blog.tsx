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

const Blog = ({isAuth, setPostToEdit}: any) => {
  const [postList, setPostList] = useState<any>([]);
  const [postsToDisplay, setpostsToDisplay] = useState<any>([]);
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
  
  return (
    <div className='blog'>
      <div className='blog__columnA'>
        <SearchBar
          postList={postList}
          setpostsToDisplay={setpostsToDisplay}
        />
        <Sidebar 
          postsToDisplay={postsToDisplay} 
        />
        <KeywordsUI 
          postList={postList} 
          // setPostList={setPostList}

          postsToDisplay={postsToDisplay}
          setpostsToDisplay={setpostsToDisplay}
        />
      </div>
      <div className='blog__columnB'>
        <SorterBar 
          postsToDisplay={postsToDisplay}
          setpostsToDisplay={setpostsToDisplay}
        />
        <Gallery 
          postsToDisplay={postsToDisplay}
          isAuth={isAuth}
          setPostToEdit={setPostToEdit}
        />
      </div>
    </div>
  )
}

export default Blog