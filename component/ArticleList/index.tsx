import type { NextPage } from 'next'
import Link from 'next/link'
import styles from './index.module.css'
import { articleListData } from '../../static/constant'

// @ts-ignore
const ArticleList: NextPage = () => {

    return (
        <article className={styles.container}>
            <h1>博客</h1>
            <div className={styles.content}></div>
            <ul className={styles.post}>
                {articleListData.map(item=>{
                    return(
                        <div className={styles.item} key={item.id}>
                            <h3><Link href={'/'}><a>{item.title}</a></Link></h3>
                            <p className={styles.desc}>{item.introduce}</p>
                            <div className={styles.line}>
                                <time className={styles.meta}>{item.addTime}</time>
                                <div className={styles.tags}>
                                    <a className={styles.tag}>{item.tag}</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </ul>
        </article>)
}

export default ArticleList