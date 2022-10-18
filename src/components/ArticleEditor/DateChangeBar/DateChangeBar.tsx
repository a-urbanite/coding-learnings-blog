import './DateChangeBar.css'

interface DateChangeCheckerProps {
  changeDateChecker: any
  setchangeDateChecker: any,
  setpubDate: any
}

const DateChangeBar = ({changeDateChecker, setchangeDateChecker, setpubDate}: DateChangeCheckerProps) => {
  return (
    <div className='DateChangeContainer'>
        <span className='dateTitle'>Change publication date?</span>
        <input 
          className='globalForm__input dateCheckbox'
          onChange={() => setchangeDateChecker(!changeDateChecker)} 
          type="checkbox">
        </input>
        <input 
          className='globalForm__input dateDateInput'
          type="date" 
          onChange={(event) => {setpubDate(event.target.value)}}>
        </input>
    </div>
  )
}

export default DateChangeBar