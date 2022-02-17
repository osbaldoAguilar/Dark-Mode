import {useState} from 'react'
import ThemeContextWrapper, {ThemeContext, themes} from '../themeContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(true)
  return( <ThemeContextWrapper>
        <ThemeContext.Consumer>

          {({changeTheme}) => (
            <button className='darkBtn' color='link' onClick={
              () => {setDarkMode(!darkMode); changeTheme(darkMode ? themes.light : themes.dark);}
              }>
              <span>{darkMode ? 'Dark Mode 🌙': 'Light Mode ☀️'  }</span>
            </button>
          ) }
        </ThemeContext.Consumer>
      <Component {...pageProps} />
  </ThemeContextWrapper> )
}

export default MyApp
