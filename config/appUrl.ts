const ipUrl = 'http://localhost:7002/default/'

const servicePath = {
    getArticleList : ipUrl + 'articleList',       //获取博客头部分栏
    getArticleById : ipUrl+'getArticleById/',    //单篇博客详细信息
    getRss: ipUrl+'rss'
}
export default servicePath