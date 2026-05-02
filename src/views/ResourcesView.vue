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

const resultTitle = computed(() =>
  keyword.value ? `搜索“${keyword.value}”的资源结果` : '全部可用资源',
)

const resultText = computed(() =>
  keyword.value
    ? '搜索框已经放到顶部导航栏里，你可以在任意页面直接修改关键词。'
    : '现在可以直接使用顶部导航里的搜索框，不再让搜索框单独占一层。',
)
</script>

<template>
  <div class="view-shell">
    <section class="resource-hero">
      <div class="section-heading section-heading-tight">
        <p class="section-kicker">资源检索</p>
        <div class="hero-actions">
          <RouterLink class="button button-primary" :to="routePaths.bookDetail">回到图书详情</RouterLink>
          <RouterLink class="button button-secondary" :to="routePaths.bookGuide">查看内容导览</RouterLink>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="section-heading section-heading-tight">
        <p class="section-kicker">筛选结果</p>
        <h2 class="section-title">{{ resultTitle }}</h2>
        <p class="section-text">{{ resultText }}</p>
      </div>

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
        <p>可以在顶部导航栏继续换一个关键词试试，例如“ISBN”“出版社”或“高校美育”。</p>
      </div>
    </section>
  </div>
</template>
