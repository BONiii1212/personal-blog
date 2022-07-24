const findMe = [{id:0,name:'GitHub',url:'https://github.com/BONiii1212'},
{id:1,name:'Bilibili',url:'https://space.bilibili.com/11089253'},
{id:2,name:'Twitter',url:'https://twitter.com/BNiii1212'},
{id:3,name:'Instagram',url:'https://www.instagram.com/boniii_1212/'},
{id:4,name:'掘金',url:'https://juejin.cn/user/1042790226070887'}]

const GameInf = [{id:0,name:'PSN',value:'BONiii12'},
{id:1,name:'NS',value:'SW-4145-6733-0811'},
{id:2,name:'明日方舟',value:'BONiii#4238'},
{id:3,name:'原神',value:'125367247'},]

const navList = [{id:0, tag:'博客', href:'/posts'}, 
{id:1, tag:'视频', href:'/vlog'}, 
{id:2, tag:'推荐', href:'/recommend'}, 
{id:3, tag:'关于', href:'/'}, 
{id:4, tag:'RSS', href:'/'}]

const imgUrl = 'https://blog-1305899292.cos.ap-shanghai.myqcloud.com/BONiii/8E9A4374-E935-44B4-932E-39B33E1103C2.JPG'

const videos = [{id:0,title:'仿杀戮尖塔地图的宝可梦DBG卡牌战棋游戏',url:'https://www.bilibili.com/video/BV1fN4y1K7oF?spm_id_from=333.999.0.0&vd_source=46c07550084160473fd11f6ffb8ba748'},
{id:1,title:'当你给小动物送墓碑时会发生什么？',url:'https://www.bilibili.com/video/BV1WQ4y1K7iH?spm_id_from=333.999.0.0&vd_source=46c07550084160473fd11f6ffb8ba748'}]

const config = {
    loader: { load: ["[tex]/html"] },
    tex: {
      packages: { "[+]": ["html"] },
      inlineMath: [
        ["$", "$"],
      ],
      displayMath: [
        ["$$", "$$"],
      ]
    }
};

export {
    findMe,
    GameInf,
    navList,
    imgUrl,
    videos,
    config
}