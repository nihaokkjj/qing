<script setup>
import PageSectionTabs from './components/PageSectionTabs.vue'
import { routePaths, siteBrand } from './data/siteContent'
</script>

<template>
  <div class="page-shell">
    <div class="browser-frame app-frame">
      <header class="site-header">
        <div class="masthead-bar">
          <div class="masthead-grid">
            <div class="masthead-side masthead-side-left">
              <span class="masthead-side-label">西南石油大学美育专题网络交流平台</span>
            </div>

            <RouterLink class="masthead-brand" :to="routePaths.zhihuiFangxue">
              <span class="masthead-brand-name">{{ siteBrand }}</span>
            </RouterLink>

            <div class="masthead-spacer" aria-hidden="true"></div>
          </div>
        </div>

        <div class="masthead-nav-bar">
          <div class="masthead-nav-inner">
            <PageSectionTabs class="page-section-tabs-header" />
          </div>
        </div>
      </header>

      <main class="site-main">
        <RouterView />
      </main>
    </div>
  </div>
</template>
