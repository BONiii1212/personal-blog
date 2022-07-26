import type { NextPage } from 'next'
import Header from '../component/Header'
import { Row, Col } from 'antd'
import Author from '../component/Author'
import { http } from '../utils'
import servicePath from '../config/appUrl'
import Article from '../component/Article'

const Recommend: NextPage = (props : any) => {
  return (
    <div>
      <title>推荐</title>
      <Row gutter={24} justify='start'>
        <Col xs={0} sm={0} md={0} lg={0} xl={0} xxl={6}>
        </Col>
        <Col className='main' xs={24} sm={24} md={24} lg={24} xl={16} xxl={12}>
          {/* @ts-ignore */}
          <Header id={2}/>
          {/* @ts-ignore */}
          <Article article={props.article} isMultiplexing={true}/>
        </Col>
        <Col className='right' xs={0} sm={0} md={0} lg={0} xl={8} xxl={6}>
          <Author/>
        </Col>
      </Row>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await http(servicePath.getArticleById + 0)
  return {
    props: {article: res}
  }
}

export default Recommend