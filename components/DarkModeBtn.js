import {useState} from 'react'
import ThemeContextWrapper, {ThemeContext, themes} from '../themeContext'

export const DarkModeProvider = () => {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <ThemeContextWrapper>
        <ThemeContext.Consumer>
          {({changeTheme}) => (
            <button className='darkBtn' color='link' onClick={
              () => {setDarkMode(!darkMode); changeTheme(darkMode ? themes.light : themes.dark);}
              }>
              <span>{darkMode ? 'Dark Mode 🌙': 'Light Mode ☀️'  }</span>
            </button>
          ) }
      </ThemeContext.Consumer>
    </ThemeContextWrapper>
  )
}