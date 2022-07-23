import type { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import servicePath from '../../config/appUrl'
import { http } from '../../utils'
import styles from './index.module.css'

// @ts-ignore
const Header: NextPage = ({id}) => {
    const [selectPage, setSelectPage] = useState(id)
    const navList = [{id:0, tag:'博客', href:'/posts'}, {id:1, tag:'视频', href:'/vlog'}, {id:2, tag:'推荐', href:'/recommend'}, {id:3, tag:'关于', href:'/'}, {id:4, tag:'RSS', href:'/'}]
  return (
    <div className={styles.head}>
        {navList.map(item =>{
            return (<div key={item.id} className={styles.item}>
                {selectPage == item.id?
                <span>{item.tag}</span>:
                <Link href={item.href}><a>{item.tag}</a></Link>}
            </div>)}
        )}
    </div>
  )
}

export default Header