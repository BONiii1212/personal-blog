import type { NextPage } from 'next'
import { Row, Col } from 'antd'
import Header from '../../component/Header'
import Author from '../../component/Author'
import ArticleList from '../../component/ArticleList'
import { http } from '../../utils'
import servicePath from '../../config/appUrl'
import { propsType } from '../../public/static/ts-type'

const Posts: NextPage = (props:propsType) => {
  
  return (
    <div>
      <title>博客</title>
      <Row gutter={24} justify='start'>
        <Col xs={0} sm={0} md={0} lg={0} xl={0} xxl={6}>
        </Col>
        <Col className='main' xs={24} sm={24} md={24} lg={24} xl={16} xxl={12}>
          {/* @ts-ignore */}
          <Header id={0}/>
          {/* @ts-ignore */}
          <ArticleList content={props.articleList}/>
        </Col>
        <Col className='right' xs={0} sm={0} md={0} lg={0} xl={8} xxl={6}>
          <Author/>
        </Col>
      </Row>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await http(servicePath.getArticleList)
  // @ts-ignore
  const clear_data = res.data.filter(item=>item.id!==0 && item.id!==1)
  return {
    props: {articleList: clear_data }
  }
}
export default Posts