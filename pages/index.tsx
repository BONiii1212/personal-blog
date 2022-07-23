import type { NextPage } from 'next'
import Header from '../component/Header'
import { Row, Col } from 'antd'

const Home: NextPage = () => {
  return (
    <div>
        <Row justify='start'>
          <Col md={0} lg={0} xl={0} xxl={8}>
          </Col>
          <Col md={0} lg={24} xl={12} xxl={8}>
              {/* @ts-ignore */}
              <Header id={3}/>
              这里是关于页面
          </Col>
          <Col md={0} lg={0} xl={12} xxl={8}>
          </Col>
        </Row>
    </div>
  )
}
// export async function getStaticProps(){
//   const navList = await http(servicePath.navList)
//   return {
//       props:{
//           navList
//       }
//   }
// }
export default Home
