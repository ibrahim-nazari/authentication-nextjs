import '../styles/globals.css'
import Store from "./store"
import 'bootstrap/dist/css/bootstrap.css'

import 'react-toastify/dist/ReactToastify.css';
function MyApp({ Component, pageProps }) {
  return <Store><Component {...pageProps} /></Store>
}

export default MyApp
