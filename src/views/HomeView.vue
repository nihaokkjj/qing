<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { homeEntries, homeHighlights, routePaths, siteBrand } from '../data/siteContent'

const router = useRouter()
const keyword = ref('')

const submitSearch = () => {
  const q = keyword.value.trim()
  router.push({
    path: routePaths.search,
    query: q ? { q } : {},
  })
}
</script>

<template>
  <div class="view-shell">
    <section class="home-hero">
      <div class="home-copy">
        <p class="eyebrow">站点首页</p>
        <h1 class="page-title">{{ siteBrand }}</h1>
        <p class="page-text">
          首页现在负责栏目分发与站内检索，五个专题栏目统一放到各页面首部，学校题头与站点品牌单独留在顶部。
        </p>
        <div class="hero-actions">
          <RouterLink class="button button-primary" :to="routePaths.projectIntro">查看项目简介</RouterLink>
          <RouterLink class="button button-secondary" :to="routePaths.ebookDetail">进入电子图书</RouterLink>
        </div>

        <form class="home-search-inline" role="search" @submit.prevent="submitSearch">
          <div class="home-search-field">
            <span class="home-search-icon" aria-hidden="true"></span>
            <input
              v-model="keyword"
              type="search"
              class="home-search-input"
              placeholder="在首页搜索 ISBN、书名、出版社或主题词"
            />
          </div>
          <button type="submit" class="button button-secondary home-search-button">站内搜索</button>
        </form>
      </div>

      <div class="home-visual">
        <div class="abstract-stage">
          <div class="stage-orb stage-orb-gold"></div>
          <div class="stage-orb stage-orb-orange"></div>
          <div class="stage-orb stage-orb-purple"></div>
          <div class="stage-card">
            <span class="stage-kicker">页首栏目</span>
            <strong>各页面首部统一显示五个栏目</strong>
          </div>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="section-heading">
        <p class="section-kicker">栏目入口</p>
        <h2 class="section-title">从首页快速进入站点栏目</h2>
        <p class="section-text">每个栏目都对应一个独立路由，首页只保留聚合与引导功能。</p>
      </div>

      <div class="entry-grid">
        <RouterLink v-for="entry in homeEntries" :key="entry.path" :to="entry.path" class="entry-card">
          <span class="entry-badge">{{ entry.badge }}</span>
          <h3>{{ entry.title }}</h3>
          <p>{{ entry.text }}</p>
          <span class="entry-arrow">进入栏目</span>
        </RouterLink>
      </div>
    </section>

    <section class="section-block">
      <div class="section-heading">
        <p class="section-kicker">首页导读</p>
        <h2 class="section-title">搜索和导航分开处理，页面更清爽</h2>
      </div>

      <div class="highlight-grid">
        <article v-for="item in homeHighlights" :key="item.title" class="highlight-card">
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>
  </div>
</template>

