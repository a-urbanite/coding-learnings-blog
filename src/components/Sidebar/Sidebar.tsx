import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = ({postList}: any) => {

  const clickHandler = (id: any) => {
    // console.log("Hello!!!")

    const el = document.getElementById(id)
    // console.log(el)
    el?.scrollIntoView({behavior: "smooth"})
    // window.scrollTo({ top: el!, left: 0, behavior: 'smooth' })

  }

  return (
    <div className='sidebar'>
      <h2 className='sidebar__title'>Articles</h2>
      <ul className='sidebar__list'>
          <>{postList.map((post: any) => {
              return (<li key={post.id} className='sidebar__item'>
                        <button onClick={() => clickHandler(post.id)}>
                          {post.title}
                        </button>
                        {/* <Link className='sideBarLink' to={'/'} onClick={() => clickHandler()}>
                        </Link>   */}
                      </li>)
          })}</>
      </ul>
    </div>
  )
}

export default Sidebar