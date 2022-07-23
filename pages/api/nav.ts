import type { NextApiRequest, NextApiResponse } from 'next'

interface Tag{
    id: number,
    tag: string 
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Tag[]>
) {
  res.status(200).json([{id:0, tag:'博客'}, {id:1, tag:'视频'}, {id:2, tag:'推荐'}, {id:3, tag:'关于'}])
}
