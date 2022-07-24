import type { NextPage } from 'next'
import Header from '../../component/Header'
import { Row, Col } from 'antd'
import Author from '../../component/Author'
import { http } from '../../utils'
import servicePath from '../../config/appUrl'
import Article from '../../component/Article'

const PostsById: NextPage = (props : any) => {
    return (
        <div>
            <title>{props.article.title}</title>
                <Row gutter={24} justify='start'>
                    <Col xs={0} sm={0} md={0} lg={0} xl={0} xxl={6}>
                    </Col>
                    <Col className='main' xs={24} sm={24} md={24} lg={24} xl={16} xxl={12}>
                    {/* @ts-ignore */}
                    <Header id={-1}/>
                    {/* @ts-ignore */}
                    <Article article={props.article} isMultiplexing={false}/>
                    </Col>
                    <Col className='right' xs={0} sm={0} md={0} lg={0} xl={8} xxl={6}>
                    <Author/>
                    </Col>
                </Row>
        </div>
    )
}

export async function getStaticPaths(){
    const res = await http(servicePath.getArticleList)
    const repos = res.data
    // @ts-ignore
    const paths = repos.map(repo  => `/posts/${repo.id}`)
    return {paths, fallback:false}
}

// @ts-ignore
export async function getStaticProps({params}) {
    const id = params.id
    const res = await http(servicePath.getArticleById + id)
    return {
      props: {article: res}
    }
}

export default PostsById