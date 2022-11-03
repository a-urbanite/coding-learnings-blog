import './ThemeSwitch.css'
import { useState, useEffect } from 'react'
import { BsSun, BsMoon } from "react-icons/bs";

const ThemeSwitch = () => {

  const [currentTheme, setCurrentTheme] = useState(null)
  useEffect(() => {
    setCurrentTheme(document.body.classList[0])
  }, [])

  const switchTheme = () => {
    document.body.classList.remove(currentTheme);
    const newTheme = currentTheme === 'darkTheme' ? 'lightTheme' : 'darkTheme'
    document.body.classList.add(newTheme);
    setCurrentTheme(newTheme)
  }

  return (
    <span className='themeSwitcherIcon' onClick={() => switchTheme()}>
      {currentTheme === 'darkTheme' ? <BsSun size={28}/> : <BsMoon size={28}/>}
    </span>
  )
}

export default ThemeSwitch