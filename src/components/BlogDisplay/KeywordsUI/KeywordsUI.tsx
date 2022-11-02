import { Key, useEffect, useState } from 'react'
import { countElementInArr } from '../../../pages/Blog/sorters'
import './KeywordsUI.css'

const KeywordsUI = ({ postList, postsToDisplay, setpostsToDisplay }: any) => {
  const [availableKeywords, setAvailableKeywords] = useState<any[]>([])
  const [selectedKeywords, setselectedKeywords] = useState<any[]>([])
  const [lastAction, setlastAction] = useState(null as unknown as string)

  useEffect(() => {
    setpostsToDisplay(filterPosts(selectedKeywords, lastAction === 'deletedKeyword' ? postList : postsToDisplay))
  }, [selectedKeywords])

  useEffect(() => {
    const keywordsArr = getAllKeywords(postsToDisplay)
    const simplifiedSelectedKeywordsArray = simplifyKeywordArray(selectedKeywords)
    const cleanedArray = keywordsArr.filter( function( el: any ) {
      return !simplifiedSelectedKeywordsArray.includes( el.keyword );
    } );
    setAvailableKeywords(cleanedArray)
  },[postsToDisplay])

  const countKeywords = (arr: any) => {
    const keywordsSet = new Set(arr)
    const countedKeywords: { keyword: string; count: number }[] = []
    keywordsSet.forEach((keyword) => {
      countedKeywords.push({
        keyword: keyword as string, 
        count: countElementInArr(keyword, arr)
      }) 
    })
    return countedKeywords.sort((a,b) => b.count - a.count);
  }

  const getAllKeywords = (postArr: any) => {
    let kwArr: string[] = []
    postArr.forEach((post: { keywords: string[] }) => {
      if (post.keywords) {
        kwArr = [...kwArr, ...post.keywords]
      }
    });
    const countedKeywords = countKeywords(kwArr)
    return countedKeywords
  }

  const simplifyKeywordArray = (arr:any) => {
    return arr.map((keywordObj: { keyword: any }) => keywordObj.keyword)
  }

  const filterPosts = (keyWordsArr: any, postArr: any) => {
    const simplifiedSelKeywordsArr = simplifyKeywordArray(keyWordsArr)
    const filteredPosts = postArr.filter((post: any) => {
      return simplifiedSelKeywordsArr.every((keyword: any) => post.keywords.includes(keyword))
    })
    return filteredPosts
  }

  const selectkeyword = (keyword: string) => {
    const keywordToAdd = availableKeywords.filter((element) => element.keyword === keyword)
    setlastAction('addedKeyword')
    setselectedKeywords((oldArr: any) => [...oldArr, ...keywordToAdd])
  }

  const deselectkeyword = (keyword: string) => {
    setlastAction('deletedKeyword')
    setselectedKeywords(selectedKeywords.filter((element: { keyword: string }) => element.keyword !== keyword))
  }

  return (
    <div className='keywordsUI'>
      <h1 className='sectionTitle'>Keywords</h1>
      <div className='keywordsUI__KeywordsContainer'>
        {availableKeywords.map((keyword, index) => { return (
          <span 
            key={index}
            className='globalBtn keywordBtn' 
            onClick={() => selectkeyword(keyword.keyword)}>{keyword.keyword}({keyword.count})
          </span>
        )
        })}
      </div>
      <div className='keywordsUI__KeywordsContainer'>
        <span>{`Selected:`}</span> 
        {selectedKeywords.map((keyword: any, index: Key | null | undefined) => { return (
          <span 
            key={index}
            className='globalBtn keywordBtn' 
            onClick={() => deselectkeyword(keyword.keyword)}>{keyword.keyword}({keyword.count})
          </span>
        ) 
        })}
      </div>
    </div>
  )
}

export default KeywordsUI