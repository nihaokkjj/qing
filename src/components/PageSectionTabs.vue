<script setup>
import { useRoute } from 'vue-router'
import { navItems } from '../data/siteContent'

const route = useRoute()
const isActiveTab = (item) => route.meta.navKey === item.navKey
const tabCount = navItems.length
</script>

<template>
  <section class="page-section-tabs" aria-label="专题栏目">
    <nav class="page-section-tabs-nav" :style="{ '--tab-count': tabCount }">
      <RouterLink
        v-for="item in navItems"
        :key="item.path"
        :to="item.path"
        :class="['page-section-tab', { 'page-section-tab-active': isActiveTab(item) }]"
      >
        {{ item.label }}
      </RouterLink>
    </nav>
  </section>
</template>
