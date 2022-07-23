import type { NextPage } from 'next'
import Header from '../component/Header'
import { Row, Col } from 'antd'
import Author from '../component/Author'

const Recommend: NextPage = () => {
  return (
    <div>
      <title>推荐</title>
      <Row gutter={24} justify='start'>
        <Col xs={0} sm={0} md={0} lg={0} xl={0} xxl={6}>
        </Col>
        <Col className='main' xs={24} sm={24} md={24} lg={24} xl={16} xxl={12}>
          {/* @ts-ignore */}
          <Header id={2}/>
        </Col>
        <Col className='right' xs={0} sm={0} md={0} lg={0} xl={8} xxl={6}>
          <Author/>
        </Col>
      </Row>
    </div>
  )
}

export default Recommend