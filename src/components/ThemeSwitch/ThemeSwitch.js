import './ThemeSwitch.css'

const ThemeSwitch = () => {

  const switchTheme = () => {
    const currentTheme = document.body.classList[0]
    document.body.classList.remove(currentTheme);
    const newTheme = currentTheme === 'darkTheme' ? 'lightTheme' : 'darkTheme'
    document.body.classList.add(newTheme);
    console.log(document.body.classList)
  }

  return (
    <>
      <span className='globalBtn' onClick={() => switchTheme()}>switch theme</span>
    </>
  )
}

export default ThemeSwitch