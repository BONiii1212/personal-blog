import '../styles/globals.css'
import 'antd/dist/antd.css'
import type { AppProps } from 'next/app'
import classNames from 'classnames'
import {Rem,isLandscape} from '../utils/index'
import { useEffect, useRef, useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  
  useEffect(() => {
    Rem()
  },[])

  return <Component {...pageProps} />
}

export default MyApp
