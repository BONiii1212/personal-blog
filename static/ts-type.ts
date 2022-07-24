export interface propsType {
    articleList?: articleContent[]
  }
export interface articleContent {
    id: number,
    title: string,
    introduce: string,
    addTime: string,
    typeName: string,
    url?: string,
    article_content?: string 
}
