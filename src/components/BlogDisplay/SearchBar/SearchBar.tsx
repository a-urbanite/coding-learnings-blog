import React, { useEffect, useRef, useState } from 'react'
import './searchBar.css'

const SearchBar = ({postList, setpostsToDisplay}: any) => {
  const [searchString, setsearchString] = useState('');
  const inputRef = useRef(null as any)
  
const searchArticles = (e: any) => {
  e.preventDefault();
  if (searchString.length === 0) {
    setpostsToDisplay(postList)
    return
  };
  const filteredList = postList.filter((element: any) => element.title.toLowerCase().includes(searchString.toLowerCase()))
  setpostsToDisplay(filteredList)
  setsearchString('')
  inputRef.current.value = "";
  }

  return (
    <div className='searchBarContainer'>
      <h1 className='sectionTitle'>Search</h1>
      <form className='searchForm' onSubmit={(e) => searchArticles(e)}>
        <input 
          type='text' 
          className='globalForm__input' 
          placeholder='Search...' 
          onChange={e => setsearchString(e.target.value)}
          ref={inputRef}
        />
        <input type='submit' className='globalBtn' value='Go!' onClick={(e) => searchArticles(e)}/>
      </form>
    </div>
  )
}

export default SearchBar