import React, { useState } from 'react'
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const SorterButton = ({btnText, sorterFunc}: {btnText: any, sorterFunc: any}) => {
  const [sortBtnOrder, setSortBtnOrder] = useState(null as any)
  return (
    <span 
    // className={`globalBtn ${sortCategory === 'title' && 'globalBtnActive'}`}
    onClick={() => sorterFunc()}
  >
    <p>{btnText}</p>
    {sortBtnOrder === 'ASC' ? (
        <HiChevronUp className='sorterIcon' />
      ) : (
        <HiChevronDown className='sorterIcon' />
      )}
  </span>
  )
}

export default SorterButton