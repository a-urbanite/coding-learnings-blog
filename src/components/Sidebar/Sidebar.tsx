import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = ({postLists}: any) => {
  return (
    <>
      <h2 className='sidebar__title'>Articles</h2>
      <ul className='sidebar__list'>
          <>{postLists.map((post: any) => {
              return (<li key={post.id} className='sidebar__item'>
                        <Link to={`post${post.title}`}>
                        {post.title} - {post.date}
                        </Link>  
                      </li>)
          })}</>
      </ul>
    </>
  )
}

export default Sidebar