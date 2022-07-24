import '../styles/globals.css'
import 'antd/dist/antd.css'
import type { AppProps } from 'next/app'
import { Rem } from '../utils/index'
import { useEffect } from 'react'
import {MathJaxContext} from 'better-react-mathjax'
import {config} from '../public/static/constant'

function MyApp({ Component, pageProps }: AppProps) {
  
  useEffect(() => {
    Rem()
  },[])

  return (
    <MathJaxContext config={config}>
      <Component {...pageProps} />
    </MathJaxContext>
  ) 
}

export default MyApp
