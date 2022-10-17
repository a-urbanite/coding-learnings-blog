import { useEffect, useState } from 'react'
import './KeywordsBar.css'
import { findDuplicates } from '../../../pages/Blog/sorters'

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
    setkeywords(keywords.filter((keyword: any) => keyword !== event.target.innerText))
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
      <form className='form'>
          <input placeholder='keywords...' className='globalInput'></input>
          <span className='globalBtn' onClick={(e) => addKeyword(e)}>add keyword</span>
      </form>
      {!validating && 
      <>
        {keywords.map((keyword: any) => { return (
          <span 
            key={keyword}
            className='globalBtn'
            onClick={(e) => deletekeyword(e)}
            >
              {keyword}
          </span>
          )})}
      </>
      }
    </div>
  )
}

export default KeywordsBar