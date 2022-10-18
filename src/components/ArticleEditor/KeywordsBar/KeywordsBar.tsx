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
    <div className='container'>
      <form className='form'>
          <input placeholder='keywords...' className='globalForm__input keyowrdsInput'></input>
          <span className='globalBtn keyword__addBtn' onClick={(e) => addKeyword(e)}>add keyword</span>
      </form>
      {!validating && 
      <div className='keywordsContainer'>
        {keywords.map((keyword: any) => { return (
          <span 
            key={keyword}
            className='globalBtn'
            onClick={(e) => deletekeyword(e)}
            >
              {keyword}
          </span>
          )})}
      </div>
      }
    </div>
  )
}

export default KeywordsBar