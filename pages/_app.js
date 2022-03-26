import '../styles/globals.css'
import { StateProvider } from '../components/DataStore'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return( 
        <StateProvider>
          <Navbar/>
          <Component {...pageProps} />
        </StateProvider>
   )
}

export default MyApp
