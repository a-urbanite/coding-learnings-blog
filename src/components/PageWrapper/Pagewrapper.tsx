import React from 'react'
import './PageWrapper.css'

const Pagewrapper = ({contents}:any) => {
  return (
    <div className='pageWrapper'>
        <article className='pageArticle'>{contents}</article>
    </div>
  )
}

export default Pagewrapper