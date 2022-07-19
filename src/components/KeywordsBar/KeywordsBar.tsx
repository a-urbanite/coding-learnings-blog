import React, { useEffect, useRef, useState } from 'react'
import './KeywordsBar.css'
import { findDuplicates } from '../../pages/Blog/sorters'

const KeywordsBar = ({keywords, setkeywords}: any) => {
  const [validating, setvalidating] = useState(false)

  const addKeyword = (event: any) => {
    event.preventDefault();
    const enteredKeyword = event.target.parentNode.children[0].value
    if (enteredKeyword.length > 0) { 
      setkeywords((oldArray: any) => [...oldArray, enteredKeyword])
      setvalidating(true)
    } 
    event.target.parentNode.children[0].value = ""
  }

  const deletekeyword = (event: any) => {
    event.preventDefault();
    // console.log("delete keyword triggered")
    const keywordToRemove = event.target.parentElement.innerText.slice(0, -1)
    setkeywords(keywords.filter((keyword: any) => keyword !== keywordToRemove))
  } 

  useEffect(() => {
    const duplicatesArr = findDuplicates(keywords)
    if (duplicatesArr.length !== 0) {
      const duplIndex = keywords.lastIndexOf(duplicatesArr[0])
      setkeywords(keywords.filter((keyword: any, index:any) => index !== duplIndex))
      window.alert("double trouble!")
    }
    setvalidating(false)
  }, [keywords])
  

  return (
    <div className='keywordContainer'>
      <form>
          <input placeholder='keywords...' id='keywordInput' ></input>
          <button className='submit' onClick={(e) => addKeyword(e)}>add keyword</button>
      </form>
      {!validating && 
      <>
        {keywords.map((keyword: any) => { return (<span key={keyword}>{keyword}<button onClick={deletekeyword}>x</button></span> )})}
      </>
      }
    </div>
  )
}

export default KeywordsBar