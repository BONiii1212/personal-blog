import type { NextPage } from 'next'
import styles from './index.module.css'
import dayjs from 'dayjs'
import { articleContent } from '../../public/static/ts-type'
import Link from 'next/link'
import {marked} from 'marked'
import { MathJax } from 'better-react-mathjax'

// @ts-ignore
const Article: NextPage = (props:{article: articleContent, isMultiplexing: boolean}) => {
    const {article, isMultiplexing } = props

    const renderer = new marked.Renderer()
    marked.setOptions({
        renderer:renderer,
        gfm:true,
        pedantic:false,
        sanitize:false,
        breaks:false,
        smartLists:true,
        smartypants:false,
    })

    return (
        <article className={styles.container}>
            <h1>{article.title}</h1>
            {!isMultiplexing && 
            <div className={styles.line}>
                <div className={styles.meta}>
                    <address className={styles.author}>
                        <Link href={'/'}><a className={styles.authorUrl}>漏杨波</a></Link>
                    </address>
                    {' • '}
                    <time>{dayjs(article.addTime).format('ddd MMM D YYYY') }</time>
                </div>
                <div className={styles.tags}>
                    <a className={styles.tag}>{article.typeName}</a>
                </div>
            </div>}
            <MathJax inline hideUntilTypeset={"first"} dynamic>
                <div className={styles.content} dangerouslySetInnerHTML={{__html:marked(article.article_content || '')}}></div>
            </MathJax>
            
        </article>)
}

export default Article