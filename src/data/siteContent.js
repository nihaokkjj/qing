export const siteBrand = '轻骑e站'

const featuredBookSlug = 'yi-mei-hua-ren-yi-mei-yu-de'

export const routePaths = {
  home: '/',
  projectIntro: '/project-intro',
  worksShowcase: '/works-showcase',
  zhihuiFangxue: '/zhihui-fangxue',
  aiCreation: '/ai-creation',
  ebooks: '/ebooks',
  ebookDetail: `/ebooks/${featuredBookSlug}`,
  search: '/search',
}

export const navItems = [
  { label: '智慧教学', path: routePaths.zhihuiFangxue, navKey: 'zhihui-fangxue' },
  { label: '作品展示', path: routePaths.worksShowcase, navKey: 'works-showcase' },
  { label: 'AI创作', path: routePaths.aiCreation, navKey: 'ai-creation' },
  { label: '电子图书', path: routePaths.ebooks, navKey: 'ebooks' },
  { label: '项目简介', path: routePaths.projectIntro, navKey: 'project-intro' },
]

export const resourceItems = [
  {
    badge: '推荐入口',
    title: '在线查看相关信息',
    text: '通过 ISBN 直接检索相关网页信息。',
    href: 'https://www.baidu.com/s?wd=9787518376766',
    tags: ['isbn', '9787518376766', '图书检索'],
  },
  {
    badge: '书名检索',
    title: '按书名搜索',
    text: '搜索《以美化人 以美育德》相关页面。',
    href: 'https://cn.bing.com/search?q=%E4%BB%A5%E7%BE%8E%E5%8C%96%E4%BA%BA+%E4%BB%A5%E7%BE%8E%E8%82%B2%E5%BE%B7',
    tags: ['书名', '美育', '主题搜索'],
  },
  {
    badge: '出版社线索',
    title: '按出版社搜索',
    text: '搜索石油工业出版社与图书关联信息。',
    href: 'https://www.baidu.com/s?wd=%E7%9F%B3%E6%B2%B9%E5%B7%A5%E4%B8%9A%E5%87%BA%E7%89%88%E7%A4%BE+%E4%BB%A5%E7%BE%8E%E5%8C%96%E4%BA%BA+%E4%BB%A5%E7%BE%8E%E8%82%B2%E5%BE%B7',
    tags: ['出版社', '石油工业出版社', '出版信息'],
  },
  {
    badge: '关键词',
    title: '高校美育检索',
    text: '继续检索与高校美育相关的延展信息。',
    href: 'https://www.baidu.com/s?wd=%E9%AB%98%E6%A0%A1%E7%BE%8E%E8%82%B2',
    tags: ['高校美育', '延伸阅读', '主题资料'],
  },
]
