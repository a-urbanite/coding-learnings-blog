import React, { useEffect, useState } from 'react'
import { sortAfterDateAsc, sortAfterDateDesc, sortAfterStringAsc, sortAfterStringDesc } from '../../../pages/Blog/sorters';
import './sorterBar.css'
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const SorterBar = ({postsToDisplay, setpostsToDisplay}: any) => {
  const [sortOrder, setsortOrder] = useState(null as any)
  const [sortCategory, setsortCategory] = useState(null as any)

  useEffect(() => {
    if ( !sortCategory && postsToDisplay.length > 0 ) {
        const sortedPosts = sortAfterDateDesc(postsToDisplay, "date")
        setpostsToDisplay([...sortedPosts])
        setsortCategory('date')
        setsortOrder('DESC')
    }
  }, [postsToDisplay])

  const sortByTitle = () => {
    const sortedPosts = sortOrder === 'ASC' ? sortAfterStringAsc(postsToDisplay, "title") : sortAfterStringDesc(postsToDisplay, "title")
    setsortOrder(sortOrder === 'ASC' ? 'DESC' : "ASC")
    setsortCategory('title')
    setpostsToDisplay([...sortedPosts])
  }

  const sortByDate = () => {
    const sortedPosts = sortOrder === 'ASC' ? sortAfterDateAsc(postsToDisplay, 'date') : sortAfterDateDesc(postsToDisplay, 'date')
    setsortOrder(sortOrder === 'ASC' ? 'DESC' : "ASC")
    setsortCategory('date')
    setpostsToDisplay([...sortedPosts])
  }

  return (
    <div className='sorterBar__container'>
      <span 
        className={`globalBtn ${sortCategory === 'title' && 'globalBtnActive'}`}
        onClick={() => sortByTitle()}
      >
        <p>title</p>
        {sortOrder === 'ASC' ? (
            <HiChevronUp className='sorterIcon' />
          ) : (
            <HiChevronDown className='sorterIcon' />
          )}
      </span>
      <span 
        className={`globalBtn ${sortCategory === 'date' && 'globalBtnActive'}`}
        onClick={() => sortByDate()}
      >
        <p>date</p>
        {sortOrder === 'ASC' ? (
            <HiChevronUp className='sorterIcon' />
          ) : (
            <HiChevronDown className='sorterIcon' />
          )}
      </span>
    </div>
  )
}

export default SorterBar