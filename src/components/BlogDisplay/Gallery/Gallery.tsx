import Post from './Post/Post';
import { sortAfterDateAsc, sortAfterDateDesc, sortAfterStringAsc, sortAfterStringDesc } from '../../../pages/Blog/sorters';
import "./Gallery.css"

const Gallery = ({sortOrderAsc, postList, setPostList, isAuth, getPosts, setPostToEdit, postsToDisplay, setsortOrderAsc}:any) => {

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
  
  return (
    <div className='gallery'>
      <div className='gallery__sorter'>
        <span 
          className='globalBtn'
          onClick={() => sortPosts("title", postList, setPostList)}
        >
          Sort after name
        </span>
        <span 
          className='globalBtn'
          onClick={() => sortPosts("date", postList, setPostList)}
        >
          Sort after date
        </span>
        {!sortOrderAsc ? " ASC" : " DESC"}
      </div>
      {postsToDisplay.map((post: any) => {
        return (
          <Post 
            key={post.id} 
            post={post} 
            isAuth={isAuth} 
            getPosts={getPosts} 
            setPostToEdit={setPostToEdit}>
          </Post>
        )
      })}
    </div>
  )
}

export default Gallery