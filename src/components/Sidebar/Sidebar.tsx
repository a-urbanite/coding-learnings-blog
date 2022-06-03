import React from 'react'
import './Sidebar.css'

const Sidebar = ({postLists}: any) => {
  return (
    <>
      <h2 className='sidebar__title'>Articles</h2>
      <ul className='sidebar__list'>
          <>{postLists.map((post: any) => {
              return (<li key={post.id} className='sidebar__item'>{post.title} - {post.date}</li>)
          })}</>
      </ul>
    </>
  )
}

export default Sidebar