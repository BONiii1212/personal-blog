import type { NextPage } from 'next'
import { Avatar } from 'antd'
import styles from './index.module.css'
import { imgUrl, videos } from '../../public/static/constant'

// @ts-ignore
const VlogList: NextPage = () => {
    
    return (
        <div>
            <article className={styles.container}>
            <h1>视频</h1>
            <div className={styles.content}>
                <div className={styles.pic}>
                    <div className={styles.author}>
                        <Avatar size={100} src="https://avatars.githubusercontent.com/u/62984113?s=400&u=83b7b6434419620c6f85520a96092fb5a78d1058&v=4"/>
                    </div>
                    <img className={styles.bg} src={imgUrl}/>
                </div>
                <p>
                    这里会以视频的形式分享一些生活中的趣事。<a href='https://space.bilibili.com/11089253'>Bilibili</a>
                </p>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>标题</th>
                        <th>Bilibili</th>
                    </tr>
                </thead>
                <tbody>
                    {videos.map(item=>{
                        return (
                            <tr key={item.id}>
                                <td><strong>{item.title}</strong></td>
                                <td><a href={item.url}>Bilibili</a></td>
                            </tr>
                        )
                    })} 
                </tbody>
            </table>
        </article>
        </div>
    )
}

export default VlogList