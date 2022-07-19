import type { NextPage } from 'next'
import { Button } from 'antd'
import classNames from 'classnames'
import style from './index.module.css'


const Header: NextPage = () => {
  return (
    <div>
        <Button type='primary'>按钮</Button>
        <div className={classNames(style.main, style.bgc)}></div>
    </div>
  )
}

export default Header