import type { NextPage } from 'next'
import Header from '../component/Header'
import { Row, Col } from 'antd'

const Vlog: NextPage = () => {
  return (
    <div>
        <Row justify='start'>
            <Col md={0} lg={0} xl={0} xxl={8}>
            </Col>
            <Col md={0} lg={24} xl={12} xxl={8}>
                {/* @ts-ignore */}
                <Header id={1}/>
                这里是Vlog页面
            </Col>
            <Col md={0} lg={0} xl={12} xxl={8}>
            </Col>
        </Row>
    </div>
  )
}

export default Vlog