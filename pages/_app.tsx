import '../styles/globals.css'
import 'antd/dist/antd.css'
import type { AppProps } from 'next/app'
import { Rem } from '../utils/index'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  
  useEffect(() => {
    Rem()
  },[])

  return <Component {...pageProps} />
}

export default MyApp
