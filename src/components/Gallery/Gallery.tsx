import React from 'react'
import Post from '../../components/Post/Post';
import { sortAfterDateAsc, sortAfterDateDesc, sortAfterStringAsc, sortAfterStringDesc } from '../../pages/Blog/sorters';
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
        <button onClick={() => sortPosts("title", postList, setPostList)}>Sort after name</button>
        <button onClick={() => sortPosts("date", postList, setPostList)}>Sort after date</button>
        {!sortOrderAsc ? " ASC" : " DESC"}
      </div>
      {postsToDisplay.map((post: any, index:any) => {
        return (
          <Post key={post.id} post={post} isAuth={isAuth} getPosts={getPosts} setPostToEdit={setPostToEdit}></Post>
        )
      })}
    </div>
  )
}

export default Gallery