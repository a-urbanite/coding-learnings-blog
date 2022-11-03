import React, { useEffect, useState } from 'react'
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const SortByDateBtn = ({postsToDisplay, setpostsToDisplay, globalSortCategory, setglobalSortCategory, buttonSortCategory, sorterFuncAsc, sorterFuncDesc}: any) => {
  const [sortOrder, setsortOrder] = useState('DESC')

  useEffect(() => {
    if (globalSortCategory === buttonSortCategory) {
      const sortedPosts = sortOrder === 'ASC' ? sorterFuncAsc(postsToDisplay, buttonSortCategory) : sorterFuncDesc(postsToDisplay, buttonSortCategory)
      setpostsToDisplay([...sortedPosts])
    }
  }, [sortOrder, globalSortCategory])
  

  const sortByDate = () => {
    setsortOrder(sortOrder === 'ASC' ? 'DESC' : "ASC")
    setglobalSortCategory(buttonSortCategory)
  }

  return (
      <span 
        className={`globalBtn ${globalSortCategory === buttonSortCategory && 'globalBtnActive'}`}
        onClick={() => sortByDate()}
      >
        <p>{buttonSortCategory}</p>
        {sortOrder === 'ASC' ? (
            <HiChevronUp className='sorterIcon' />
          ) : (
            <HiChevronDown className='sorterIcon' />
          )}
      </span>
  )
}

export default SortByDateBtn