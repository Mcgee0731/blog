// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome', // About - Gridsome
  siteDescription: '博客',
  plugins: [
    {
      use: '@gridsome/source-filesystem', // 本地markdown 读取插件
      options: {
        typeName: 'BlogPost', // 抓取的 grphQL 数据类型
        path: './content/blog/**/*.md', // 抓取哪些文件
      }
    },
    {
      use: '@gridsome/source-strapi', // gridsome插件，用于进行数据预取，配置数据从哪取
      options: {
        apiURL: process.env.GRIDSOME_API_URL, // 环境变量配置
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['post','tag'], // 多节点的集合
        typeName:'Strapi', // 默认名字
        singleTypes: ['general'], // 单节点的集合
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        loginData: {
          identifier: 'mcgee0731',
          password: 'Mcgee123.'
        }
      }
    }
  ],
  // 路由模板集合，数组
  templates:{
    // 模板名称为上面配置拼接 typeName + contentTypes
    StrapiPost:[ // 提供 详情模板页面 ,
      {
        path:'/post/:id',
        component:'./src/templates/Post.vue'
      }
    ],
    StrapiTag:[ // 标签模板页
      {
        path:'/tag/:id',
        component:'./src/templates/Tag.vue'
      }
    ]
  }
}
