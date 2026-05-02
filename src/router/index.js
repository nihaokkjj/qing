import { createRouter, createWebHistory } from 'vue-router'
import ProjectIntroView from '../views/ProjectIntroView.vue'
import WorksShowcaseView from '../views/WorksShowcaseView.vue'
import GuideView from '../views/GuideView.vue'
import AiCreationView from '../views/AiCreationView.vue'
import BookView from '../views/BookView.vue'
import SearchResultsView from '../views/SearchResultsView.vue'
import { routePaths, siteBrand } from '../data/siteContent'

const legacyHashRedirects = {
  '#/': routePaths.zhihuiFangxue,
  '#/book': routePaths.ebookDetail,
  '#/guide': routePaths.zhihuiFangxue,
  '#/resources': routePaths.search,
}

const legacyTarget = legacyHashRedirects[window.location.hash]
if (legacyTarget) {
  window.history.replaceState(null, '', legacyTarget)
}

const routes = [
  {
    path: routePaths.home,
    redirect: routePaths.zhihuiFangxue,
  },
  {
    path: routePaths.projectIntro,
    name: 'project-intro',
    component: ProjectIntroView,
    meta: {
      label: '项目简介',
      navKey: 'project-intro',
      title: `${siteBrand} | 项目简介`,
    },
  },
  {
    path: routePaths.worksShowcase,
    name: 'works-showcase',
    component: WorksShowcaseView,
    meta: {
      label: '作品展示',
      navKey: 'works-showcase',
      title: `${siteBrand} | 作品展示`,
    },
  },
  {
    path: routePaths.zhihuiFangxue,
    name: 'zhihui-fangxue',
    component: GuideView,
    meta: {
      label: '智慧教学',
      navKey: 'zhihui-fangxue',
      title: `${siteBrand} | 智慧教学`,
    },
  },
  {
    path: routePaths.aiCreation,
    name: 'ai-creation',
    component: AiCreationView,
    meta: {
      label: 'AI创作',
      navKey: 'ai-creation',
      title: `${siteBrand} | AI创作`,
    },
  },
  {
    path: routePaths.ebooks,
    redirect: routePaths.ebookDetail,
  },
  {
    path: routePaths.ebookDetail,
    name: 'ebooks',
    component: BookView,
    meta: {
      label: '电子图书',
      navKey: 'ebooks',
      title: `${siteBrand} | 电子图书`,
    },
  },
  {
    path: routePaths.search,
    name: 'search',
    component: SearchResultsView,
    meta: {
      label: '搜索结果',
      navKey: '',
      title: `${siteBrand} | 搜索结果`,
    },
  },
  {
    path: '/book',
    redirect: routePaths.ebookDetail,
  },
  {
    path: '/guide',
    redirect: routePaths.zhihuiFangxue,
  },
  {
    path: '/resources',
    redirect: routePaths.search,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: routePaths.zhihuiFangxue,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = to.meta.title || siteBrand
})

export default router
