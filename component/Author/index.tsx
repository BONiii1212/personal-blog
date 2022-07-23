import type { NextPage } from 'next'
import Link from 'next/link'
import { Avatar } from 'antd'
import styles from './index.module.css'

// @ts-ignore
const Author: NextPage = () => {
    const findMe = [{id:0,name:'GitHub',url:'https://github.com/BONiii1212'},
    {id:1,name:'Bilibili',url:'https://space.bilibili.com/11089253?spm_id_from=333.1007.0.0'},
    {id:2,name:'Twitter',url:'https://twitter.com/BNiii1212'},
    {id:3,name:'Instagram',url:'https://www.instagram.com/boniii_1212/'},
    {id:4,name:'掘金',url:'https://juejin.cn/user/1042790226070887'},
]
    return (
        <div className={styles.widget}>
            <div className={styles.avatar}><Avatar size={100} src="https://avatars.githubusercontent.com/u/62984113?s=400&u=83b7b6434419620c6f85520a96092fb5a78d1058&v=4"/></div>
            <p>大家好，我是<Link href={'/'}><a>漏杨波</a></Link>，是一名前端程序员，爱好是游戏、音乐。</p>
            <a href='' className={styles.btn}>点击订阅</a>
            <p>欢迎你用<Link href={'/'}><a>RSS</a></Link>来订阅我的博客。</p>
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
        </div>)
}

export default Author