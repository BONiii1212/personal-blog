import type { NextPage } from 'next'
import { Row, Col } from 'antd'
import Header from '../component/Header'
import styles from '../styles/pages/posts.module.css'

const Posts: NextPage = () => {
  return (
    <div>
      <Row gutter={24} justify='start'>
        <Col xs={0} sm={0} md={0} lg={0} xl={0} xxl={6}>
          左侧
        </Col>
        <Col className={styles.main} xs={24} sm={24} md={24} lg={24} xl={14} xxl={10}>
          {/* @ts-ignore */}
          <Header id={0}/>
        </Col>
        <Col xs={0} sm={0} md={0} lg={0} xl={12} xxl={8}>
          右侧
        </Col>
      </Row>
    </div>
  )
}

export default Posts