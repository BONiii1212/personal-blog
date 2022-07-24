import type { NextPage } from 'next'
import Link from 'next/link'
import styles from './index.module.css'
import { navList } from '../../public/static/constant'

// @ts-ignore
const Header: NextPage = ({id}) => {
    
    return (
        <div className={styles.head}>
            {navList.map(item =>{
                return (<div key={item.id} className={styles.item}>
                    {id == item.id?
                    <span>{item.tag}</span>:
                    <Link href={item.href}><a>{item.tag}</a></Link>}
                </div>)}
            )}
        </div>)
}

export default Header