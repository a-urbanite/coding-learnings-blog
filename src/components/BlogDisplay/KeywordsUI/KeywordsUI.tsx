import { Key, useEffect, useState } from 'react'
import './KeywordsUI.css'
import { countElementInArr } from '../../../pages/Blog/sorters'

const KeywordsUI = ({ postList, postsToDisplay, setpostsToDisplay }: any) => {
  const [availableKeywords, setAvailableKeywords] = useState<any[]>([])
  const [selectedKeywords, setselectedKeywords] = useState<any[]>([])

  useEffect(() => {
    setAvailableKeywords(getAllKeywords(postList))
  }, [postList])

  useEffect(() => {
    if (postsToDisplay.length === 0 && selectedKeywords.length === 0) {
      setpostsToDisplay(postList)
    }
  },[postsToDisplay])

  useEffect(() => {
    setpostsToDisplay(filterPosts(selectedKeywords, postsToDisplay))
  }, [selectedKeywords])


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

  const selectkeyword = (keyword: string) => {
    setAvailableKeywords(availableKeywords.filter((element) => element.keyword !== keyword))
    const keywordToAdd = availableKeywords.filter((element) => element.keyword === keyword)
    setselectedKeywords((oldArr: any) => [...oldArr, ...keywordToAdd])
  }

  const deselectkeyword = (keyword: string) => {
    const keywordToAdd = selectedKeywords.filter((element: { keyword: string }) => element.keyword === keyword)
    const sortedKeywords = [...availableKeywords, ...keywordToAdd].sort((a,b) => b.count - a.count);
    setAvailableKeywords(sortedKeywords)
    setselectedKeywords(selectedKeywords.filter((element: { keyword: string }) => element.keyword !== keyword))
  }

  const filterPosts = (keyWordsArr: any, postArr: any) => {
    const simplifiedSelKeywordsArr = keyWordsArr.map((keywordObj: { keyword: any }) => keywordObj.keyword)
    const filteredPosts = postArr.filter((post: any) => {
      return  post.keywords && post.keywords.some((keyword: any)=> simplifiedSelKeywordsArr.includes(keyword))
    })
    return filteredPosts
  }

  return (
    <div className='keywordsUI'>
      <h1 className='sectionTitle'>Keywords</h1>
      <div className='keywordsUI__KeywordsContainer'>
        {availableKeywords.map((keyword, index) => { return (
          <span 
            key={index}
            className='globalBtn' 
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
            className='globalBtn' 
            onClick={() => deselectkeyword(keyword.keyword)}>{keyword.keyword}({keyword.count})
          </span>
        ) 
        })}
      </div>
    </div>
  )
}

export default KeywordsUI