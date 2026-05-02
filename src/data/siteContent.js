export const siteBrand = '轻骑e站'
export const featuredBookTitleMain = '以美化人 以美育德'
export const featuredBookTitleSub = '新时代高校美育理论创新与实践研究'
export const featuredBookTitle = `${featuredBookTitleMain} ${featuredBookTitleSub}`
export const featuredBookSlug = 'yi-mei-hua-ren-yi-mei-yu-de'

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

export const homeEntries = [
  {
    badge: '首',
    title: '首页',
    text: '聚合栏目入口、站内搜索与重点内容导览。',
    path: routePaths.home,
  },
  {
    badge: '简',
    title: '项目简介',
    text: '介绍网站的定位、结构与整体内容安排。',
    path: routePaths.projectIntro,
  },
  {
    badge: '展',
    title: '作品展示',
    text: '集中查看专题作品、展示单元与内容模块。',
    path: routePaths.worksShowcase,
  },
  {
    badge: '放',
    title: '智慧教学',
    text: '整理栏目顺序、展示流程与活动落地方向。',
    path: routePaths.zhihuiFangxue,
  },
  {
    badge: 'AI',
    title: 'AI创作',
    text: '查看 AI 辅助创作方式、提示词方向与输出形式。',
    path: routePaths.aiCreation,
  },
  {
    badge: '书',
    title: '电子图书',
    text: '查看 book.jpg 封面、书目信息与进一步跳转入口。',
    path: routePaths.ebooks,
  },
]

export const homeHighlights = [
  {
    title: '栏目布局',
    text: '全局头部只保留学校题头与品牌名，五个专题栏目统一放到各页面首部。',
  },
  {
    title: '搜索前置',
    text: '搜索框继续放在首页主视觉区域，与页首栏目条分开处理，浏览层级更清楚。',
  },
  {
    title: '内容分层',
    text: '把项目简介、作品展示、AI创作和电子图书拆成独立页面，整站浏览更清楚。',
  },
]

export const projectIntroCards = [
  {
    title: '站点定位',
    text: '轻骑e站以专题展示为核心，把项目说明、作品呈现、AI创作与电子图书整合到同一站点里。',
  },
  {
    title: '页面结构',
    text: '整体采用“首页分发 + 栏目独立详情”的方式，方便后续继续往站点里增加更多作品和书目。',
  },
  {
    title: '展示节奏',
    text: '每个栏目只处理一种核心任务，避免所有内容堆在同一页，提升阅读和跳转效率。',
  },
]

export const worksShowcaseCards = [
  {
    icon: '册',
    title: '专题书封',
    text: '围绕重点书目做封面、书影和主题页的视觉整理。',
  },
  {
    icon: '页',
    title: '图文页面',
    text: '将书目延展成图文并列的专题页面，适合展示导读和摘要。',
  },
  {
    icon: '展',
    title: '展陈单元',
    text: '适合线下海报、线上专题页或活动入口的内容打包展示。',
  },
  {
    icon: '视',
    title: '视觉样式',
    text: '保留红黄主色调，同时支持更灵活的站点化视觉表达。',
  },
  {
    icon: '导',
    title: '导读模块',
    text: '把书籍基础信息、阅读重点和深度跳转整合成单独模块。',
  },
  {
    icon: '连',
    title: '联动入口',
    text: '支持从作品展示继续跳转到 AI 创作、电子图书和资源结果页。',
  },
]

export const zhihuiSteps = [
  {
    index: '01',
    title: '首页统一分发',
    text: '先在首页完成栏目认知、关键词搜索和主要入口分流，再进入具体页面。',
  },
  {
    index: '02',
    title: '栏目独立承接',
    text: '项目简介、作品展示、AI创作与电子图书各自承担不同展示任务，内容不会互相挤占。',
  },
  {
    index: '03',
    title: '详情页再引导跳转',
    text: '电子图书详情页补充了更深入的跳转按钮，用户可继续前往导览和外部检索。',
  },
  {
    index: '04',
    title: '结果页只负责结果',
    text: '搜索结果单独用隐藏路由承接，不再和页首栏目条混放，也不单独占首页层级。',
  },
]

export const zhihuiScenarios = [
  {
    icon: '馆',
    title: '馆藏专题',
    text: '适合作为图书馆专题展示或电子书专题推荐入口。',
  },
  {
    icon: '课',
    title: '课程配套',
    text: '适合为课程或阅读活动整理导读顺序和课后延展内容。',
  },
  {
    icon: '站',
    title: '站点导览',
    text: '适合作为站点结构说明页，向访客说明应该先看什么、再去哪里。',
  },
  {
    icon: '活',
    title: '活动落地',
    text: '适合作为活动页的流程规划模块，连接作品、AI与图书。',
  },
]

export const aiCreationCards = [
  {
    title: '封面再创作',
    text: '围绕封面配色、版式和主题关键词，生成延展海报与视觉变体。',
  },
  {
    title: '导读文案',
    text: '用 AI 协助生成导读摘要、活动引言和专题推荐语。',
  },
  {
    title: '页面草图',
    text: '借助提示词快速给出首页、详情页和专题分栏的结构草案。',
  },
  {
    title: '跨媒介输出',
    text: '把同一套内容转写成网页、海报、展板和活动入口文案。',
  },
]

export const aiCreationFlow = [
  {
    title: '先定主题词',
    text: '先明确关键词、对象和风格方向，确保 AI 输出始终围绕专题目标。',
  },
  {
    title: '再做版式迭代',
    text: '把封面、文案和页面结构拆分生成，逐步组合成完整展示内容。',
  },
  {
    title: '最后回收成站点素材',
    text: '把可用结果回收成页首栏目条、作品展示卡片和电子图书跳转模块。',
  },
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
