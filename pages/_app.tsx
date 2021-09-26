import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
  <React.Fragment>
    <Navbar />
    <Component {...pageProps} />
    <Toaster />
  </React.Fragment>

  )
}

export default MyApp
