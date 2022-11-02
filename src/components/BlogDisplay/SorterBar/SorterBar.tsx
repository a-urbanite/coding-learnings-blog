import React, { useState } from 'react'
import { sortAfterDateAsc, sortAfterDateDesc, sortAfterStringAsc, sortAfterStringDesc } from '../../../pages/Blog/sorters';
import './sorterBar.css'

const SorterBar = ({postsToDisplay, setpostsToDisplay}: any) => {
  const [sortOrderAsc, setsortOrderAsc] = useState(false)

  const sortByTitle = () => {
    const sortedPosts = !sortOrderAsc ? sortAfterStringAsc(postsToDisplay, "title") : sortAfterStringDesc(postsToDisplay, "title")
    setsortOrderAsc(!sortOrderAsc)
    setpostsToDisplay([...sortedPosts])
  }

  const sortByDate = () => {
    const sortedPosts = !sortOrderAsc ? sortAfterDateAsc(postsToDisplay, 'date') : sortAfterDateDesc(postsToDisplay, 'date')
    setsortOrderAsc(!sortOrderAsc)
    setpostsToDisplay([...sortedPosts])
  }

  return (
    <div className='sorterBar__container'>
      <span 
        className='globalBtn'
        onClick={() => sortByTitle()}
      >
        Sort after name
      </span>
      <span 
        className='globalBtn'
        onClick={() => sortByDate()}
      >
        Sort after date
      </span>
      <p>
        {!sortOrderAsc ? " ASC" : " DESC"}
      </p>
    </div>
  )
}

export default SorterBar