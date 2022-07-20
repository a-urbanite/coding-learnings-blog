import React, { useEffect, useState } from 'react'
import './KeywordsUI.css'
import { countElementInArr } from '../../pages/Blog/sorters'

const KeywordsUI = ({ postList, setPostList, filteredPosts, setfilteredPosts, selectedKeywords, setselectedKeywords }: any) => {
  const [keywordsArr, setallKeywords] = useState<any[]>([])
  // const [selectedKeywords, setselectedKeywords] = useState<any[]>([])
  // const [filteredPosts, setfilteredPosts] = useState<any[]>([])

  const getAllKeywords = () => {
    let keywordsArr: string[] = []
    postList.forEach((post: { keywords: string[] }) => {
      if (post.keywords) {
        keywordsArr = [...keywordsArr, ...post.keywords]
      }
    });
    const keywordsSet = new Set(keywordsArr)
    const countedKeywords: { keyword: string; count: number }[] = []
    keywordsSet.forEach((keyword) => {
      countedKeywords.push({
        keyword: keyword, 
        count: countElementInArr(keyword, keywordsArr)
      }) 
    })
    setallKeywords(countedKeywords)
  }

  const selectkeyword = (keyword: string) => {
    setallKeywords(keywordsArr.filter((element) => element.keyword !== keyword))
    const keywordToAdd = keywordsArr.filter((element) => element.keyword === keyword)
    setselectedKeywords((oldArr: any) => [...oldArr, ...keywordToAdd])
  }

  const deselectkeyword = (keyword: string) => {
    const keywordToAdd = selectedKeywords.filter((element: { keyword: string }) => element.keyword === keyword)
    setallKeywords((oldArr) => [...oldArr, ...keywordToAdd])
    setselectedKeywords(selectedKeywords.filter((element: { keyword: string }) => element.keyword !== keyword))
  }

  const filterPosts = () => {
    const simplifiedSelKeywordsArr = selectedKeywords.map((keywordObj: { keyword: any }) => keywordObj.keyword)
    const sortedPostList = postList.filter((post: any) => {
      return  post.keywords && post.keywords.some((keyword: any)=> simplifiedSelKeywordsArr.includes(keyword))
    })
    setfilteredPosts(sortedPostList)
  }

  useEffect(() => {
    getAllKeywords()
  }, [postList])

  useEffect(() => {
    filterPosts()
  }, [selectedKeywords])
  

  return (
    <div className='keywordsUI'>
      <h2>Keywords</h2>
      {keywordsArr.map((keyword) => {
        return <button onClick={() => selectkeyword(keyword.keyword)}>{keyword.keyword}({keyword.count})</button>
      })}
      <p>Selected:</p>
      {selectedKeywords.map((keyword: any) => {
        return <button onClick={() => deselectkeyword(keyword.keyword)}>{keyword.keyword}({keyword.count})</button>
      })}
    </div>
  )
}

export default KeywordsUI