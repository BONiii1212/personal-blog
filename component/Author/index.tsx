import type { NextPage } from 'next'
import Link from 'next/link'
import { Avatar } from 'antd'
import styles from './index.module.css'
import { findMe, GameInf } from '../../public/static/constant'
import servicePath from '../../config/appUrl'


// @ts-ignore
const Author: NextPage = () => {

    return (
        <div className={styles.widget}>
            <div className={styles.avatar}><Avatar size={100} src="https://avatars.githubusercontent.com/u/62984113?s=400&u=83b7b6434419620c6f85520a96092fb5a78d1058&v=4"/></div>
            <p>大家好，我是<Link href={'/'}><a>漏杨波</a></Link>，是一名前端程序员，爱好是游戏、音乐以及前端相关的一切。</p>
            <a href={servicePath.getRss} className={styles.btn}>点击订阅</a>
            <p>欢迎你用<Link href={servicePath.getRss}><a>RSS</a></Link>来订阅我的博客。</p>
            <h4>找到我</h4>
            <ul>
                {findMe.map(item=>{
                    return (
                        <li key={item.id}>
                            <a href={item.url}>{item.name}</a>
                        </li>
                    )
                })}
            </ul>
            <h4>游戏好友</h4>
            <ul>
                {GameInf.map(item=>{
                    return (
                        <li key={item.id}>
                            <strong>{item.name}: </strong>{item.value}
                        </li>
                    )
                })}
            </ul>
        </div>)
}

export default Author