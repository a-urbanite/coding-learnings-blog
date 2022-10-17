import { Key, useEffect, useState } from 'react'
import './KeywordsUI.css'
import { countElementInArr } from '../../pages/Blog/sorters'

const KeywordsUI = ({ postList, setfilteredPosts, selectedKeywords, setselectedKeywords }: any) => {
  const [keywordsArr, setallKeywords] = useState<any[]>([])

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
    countedKeywords.sort((a,b) => b.count - a.count);
    setallKeywords(countedKeywords)
  }

  const selectkeyword = (keyword: string) => {
    setallKeywords(keywordsArr.filter((element) => element.keyword !== keyword))
    const keywordToAdd = keywordsArr.filter((element) => element.keyword === keyword)
    setselectedKeywords((oldArr: any) => [...oldArr, ...keywordToAdd])
  }

  const deselectkeyword = (keyword: string) => {
    const keywordToAdd = selectedKeywords.filter((element: { keyword: string }) => element.keyword === keyword)
    const sortedKeywords = [...keywordsArr, ...keywordToAdd].sort((a,b) => b.count - a.count);
    setallKeywords(sortedKeywords)
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
      <h1 className='sectionTitle'>Keywords</h1>
      <div className='keywordsUI__KeywordsContainer'>
        {keywordsArr.map((keyword, index) => {
          return  <span 
                    key={index}
                    className='globalBtn' 
                    onClick={() => selectkeyword(keyword.keyword)}>{keyword.keyword}({keyword.count})
                  </span>
        })}
      </div>
      <div className='keywordsUI__KeywordsContainer'>
        <span>{`Selected:`}</span> 
        {selectedKeywords.map((keyword: any, index: Key | null | undefined) => {
          return  <span 
                    key={index}
                    className='globalBtn' 
                    onClick={() => deselectkeyword(keyword.keyword)}>{keyword.keyword}({keyword.count})
                  </span>
        })}
      </div>
    </div>
  )
}

export default KeywordsUI