import React from 'react'

const Sidebar = ({postLists}: any) => {
  return (
        <ul>
            <>{postLists.map((post: any) => {
                return (<li key={post.id}>{post.title} - {post.date}</li>)
            })}</>
        </ul>
  )
}

export default Sidebar