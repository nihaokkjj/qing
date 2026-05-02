<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { resourceItems, routePaths } from '../data/siteContent'

const route = useRoute()

const keyword = computed(() => {
  const value = route.query.q
  return typeof value === 'string' ? value.trim() : ''
})

const filteredItems = computed(() => {
  const query = keyword.value.toLowerCase()

  if (!query) {
    return resourceItems
  }

  return resourceItems.filter((item) => {
    const fields = [item.title, item.text, item.badge, ...item.tags].join(' ').toLowerCase()
    return fields.includes(query)
  })
})
</script>

<template>
  <div class="view-shell">
    <section class="detail-hero">
      <div class="detail-copy">
        <p class="eyebrow">搜索结果</p>
        <h1 class="page-title">{{ keyword ? `搜索“${keyword}”` : '全部可用资源' }}</h1>
        <div class="hero-actions">
          <RouterLink class="button button-primary" :to="routePaths.home">返回首页</RouterLink>
          <RouterLink class="button button-secondary" :to="routePaths.ebookDetail">前往电子图书</RouterLink>
        </div>
      </div>

      <div class="home-visual">
        <div class="abstract-stage">
          <div class="stage-orb stage-orb-orange"></div>
          <div class="stage-card">
            <span class="stage-kicker">资源结果</span>
            <strong>结果页只展示结果</strong>
            <p>搜索入口在首页，结果承接在这里，五个专题栏目则统一放在各页面首部。</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="resource-grid">
        <a
          v-for="item in filteredItems"
          :key="item.title"
          :href="item.href"
          target="_blank"
          rel="noreferrer"
          class="resource-card"
        >
          <span class="resource-badge">{{ item.badge }}</span>
          <strong>{{ item.title }}</strong>
          <p>{{ item.text }}</p>
          <div class="tag-row tag-row-compact">
            <span v-for="tag in item.tags" :key="`${item.title}-${tag}`">{{ tag }}</span>
          </div>
        </a>
      </div>

      <div v-if="filteredItems.length === 0" class="empty-card">
        <strong>没有匹配结果</strong>
        <p>可以回到首页重新换一个关键词，例如“ISBN”“出版社”或“高校美育”。</p>
      </div>
    </section>
  </div>
</template>
