import type { NextPage } from 'next'
import Link from 'next/link'
import styles from './index.module.css'
import { articleContent } from '../../static/ts-type'
import dayjs from 'dayjs'

// @ts-ignore
const ArticleList: NextPage = (props:{content?:articleContent[]}) => {
    return (
        <article className={styles.container}>
            <h1>博客</h1>
            <div className={styles.content}></div>
            <ul className={styles.post}>
                {props.content?.map(item=>{
                    return(
                        <div className={styles.item} key={item.id}>
                            <h3><Link href={"/posts/"+item.id}><a>{item.title}</a></Link></h3>
                            <p className={styles.desc}>{item.introduce}</p>
                            <div className={styles.line}>
                                <time className={styles.meta}>{dayjs(item.addTime).format('ddd MMM D YYYY') }</time>
                                <div className={styles.tags}>
                                    <a className={styles.tag}>{item.typeName}</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </ul>
        </article>)
}

export default ArticleList