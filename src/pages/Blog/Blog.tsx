import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase-config';
import './Blog.css'
import Post from '../../components/Post/Post';
import Sidebar from '../../components/Sidebar/Sidebar';

// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
// General scroll to element function

const Blog = ({isAuth, setPostToEdit}: any) => {
  // const myRef = useRef<HTMLDivElement>(null as unknown as HTMLDivElement)
  // // const scrollToRef = ({myRef}: any) => window.scrollTo(0, myRef.current.offsetTop)   
  // // const executeScroll = () => scrollToRef(myRef)
  // const scroll = () => { window.scrollTo(
  //   {
  //     top: myRef.current.offsetTop,
  //     left: 0,
  //     behavior: 'smooth'
  //   })
  // }

  const [postList, setPostList] = useState<any>([]);
  const postsCollectionRef = collection(db, "posts" )

  const getPosts = async () => {

    const data = await getDocs(postsCollectionRef);
    const postArr: any[] = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
    // console.log(postArr)
    setPostList(postArr)

  }

  const [sortOrderAsc, setsortOrderAsc] = useState(false)
  const sortPosts = (category: any) => {

    const sortedPosts = postList.sort((a: any, b: any) => 
    { return !sortOrderAsc ? a[category].localeCompare(b[category]) : b[category].localeCompare(a[category])})
    setsortOrderAsc(!sortOrderAsc)
    setPostList([...sortedPosts])

  }

  const sortAfterDate = () => {
    const sortedPosts = postList.sort((a: any, b: any) =>
    {
      
    }
    )
  }

  useEffect(() => {
    getPosts()
    console.log(postList)
  },[])
  
  return (
    <div className='homepage'>
      {/* <div ref={myRef}>I wanna be seen</div>  */}
      <Sidebar postList={postList}></Sidebar>
      <div className='gallery'>
        {!sortOrderAsc ? "ASC" : "DESC"}
        <button onClick={() => sortPosts("title")}>Sort after name</button>
        <button onClick={() => sortAfterDate()}>Sort after date</button>
        {/* <button onClick={() => sortPosts("desc")}>Sort after name DESC</button> */}
        {postList.map((post: any) => {
        return (
          <Post key={post.id} post={post} isAuth={isAuth} getPosts={getPosts} setPostToEdit={setPostToEdit}></Post>
        )
        })}
      </div>
      {/* <button onClick={() => {scroll()}}> Click to scroll </button>  */}
    </div>
  )
}

export default Blog