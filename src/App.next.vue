<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import HomeView from './views/HomeView.vue'
import BookView from './views/BookView.vue'
import GuideView from './views/GuideView.vue'
import ResourcesView from './views/ResourcesView.vue'
import { navItems } from './data/siteContent'

const routeMap = {
  '#/': HomeView,
  '#/book': BookView,
  '#/guide': GuideView,
  '#/resources': ResourcesView,
}

const routeLabels = {
  '#/': '首页',
  '#/book': '图书详情',
  '#/guide': '内容导览',
  '#/resources': '资源检索',
}

const currentHash = ref('#/')

const normalizeHash = (hash) => (routeMap[hash] ? hash : '#/')

const syncRoute = () => {
  if (!window.location.hash) {
    window.location.hash = '#/'
  }
  currentHash.value = normalizeHash(window.location.hash)
}

onMounted(() => {
  syncRoute()
  window.addEventListener('hashchange', syncRoute)
})

onBeforeUnmount(() => {
  window.removeEventListener('hashchange', syncRoute)
})

const currentView = computed(() => routeMap[currentHash.value] || HomeView)

const addressText = computed(() => {
  const hash = currentHash.value === '#/' ? '/' : currentHash.value.slice(1)
  return `qing.local${hash}`
})

const currentRouteName = computed(() => routeLabels[currentHash.value] || '首页')
</script>

<template>
  <div class="page-shell">
    <div class="browser-frame">
      <div class="browser-bar">
        <div class="browser-dots" aria-hidden="true">
          <span class="dot dot-red"></span>
          <span class="dot dot-yellow"></span>
          <span class="dot dot-green"></span>
        </div>

        <div class="address-bar">
          <span class="address-icon" aria-hidden="true"></span>
          <span>{{ addressText }}</span>
        </div>
      </div>

      <header class="site-header">
        <a class="brand" href="#/">
          <span class="brand-mark">美</span>
          <span class="brand-copy">
            <strong>高校美育书阁</strong>
            <small>西南石油大学美育专题</small>
          </span>
        </a>

        <nav class="site-nav" aria-label="页面导航">
          <a
            v-for="item in navItems"
            :key="item.hash"
            :href="item.hash"
            :class="['nav-link', { 'nav-link-active': currentHash === item.hash }]"
          >
            {{ item.label }}
          </a>
        </nav>
      </header>

      <main class="site-main">
        <component :is="currentView" />
      </main>

      <footer class="site-footer">
        <div>
          <strong>高校美育书阁</strong>
          <p>专题阅读与资源导航</p>
        </div>
        <p>围绕《以美化人 以美育德》整理的静态展示页面</p>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.nav-link {
  font-size: 20px;
}</style>