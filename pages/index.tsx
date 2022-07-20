import type { NextPage } from 'next'
import {rem} from '../utils'
import Header from '../component/Header'
import { useEffect } from 'react'

const Home: NextPage = () => {

  useEffect(()=>{
    console.log(rem.isHorizontalScreen())
  },[])
  return (
    <div>
    </div>
  )
}

export default Home
