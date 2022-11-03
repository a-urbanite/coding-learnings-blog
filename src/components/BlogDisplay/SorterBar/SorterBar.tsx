import React, { useEffect, useState } from 'react'
import './sorterBar.css'
import SorterButton from './SorterButton/SorterButton';
import { sortAfterDateAsc, sortAfterDateDesc, sortAfterStringAsc, sortAfterStringDesc } from '../../../pages/Blog/sorters';

const SorterBar = ({postsToDisplay, setpostsToDisplay}: any) => {
  const [globalSortCategory, setglobalSortCategory] = useState(null as any)

  useEffect(() => {
    if ( !globalSortCategory && postsToDisplay.length > 0 ) {
        setglobalSortCategory('date')
    }
  }, [postsToDisplay])

  
  return (
    <div className='sorterBar__container'>
      <SorterButton
        buttonSortCategory='title'
        postsToDisplay={postsToDisplay}
        setpostsToDisplay={setpostsToDisplay}
        globalSortCategory={globalSortCategory}
        setglobalSortCategory={setglobalSortCategory}
        sorterFuncAsc={sortAfterStringAsc}
        sorterFuncDesc={sortAfterStringDesc}
      />
      <SorterButton
        buttonSortCategory='date'
        postsToDisplay={postsToDisplay}
        setpostsToDisplay={setpostsToDisplay}
        globalSortCategory={globalSortCategory}
        setglobalSortCategory={setglobalSortCategory}
        sorterFuncAsc={sortAfterDateAsc}
        sorterFuncDesc={sortAfterDateDesc}
      />
    </div>
  )
}

export default SorterBar