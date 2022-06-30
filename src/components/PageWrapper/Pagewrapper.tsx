import React from 'react'
import './PageWrapper.css'

const Pagewrapper = ({contents}:any) => {
  return (
    <article className='pageWrapper'>
        {contents}
    </article>
  )
}

export default Pagewrapper