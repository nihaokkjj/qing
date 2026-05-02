<script setup>
import { routePaths } from '../data/siteContent'

const introCards = [
  {
    title: '平台定位',
    text: '聚焦高校美育专题传播，整合教学资源、作品成果、数字创作与阅读内容，形成统一的线上交流入口。',
  },
  {
    title: '内容结构',
    text: '以“智慧教学、作品展示、AI创作、电子图书、项目简介”五个板块构成站点主线，浏览路径更加清晰完整。',
  },
  {
    title: '展示方式',
    text: '通过图像展陈、专题导读和板块联动，集中呈现学校美育建设的特色内容、实践成果与传播场景。',
  },
]
</script>

<template>
  <div class="view-shell">
    <section class="detail-hero">
      <div class="detail-copy">
        <p class="eyebrow">项目简介</p>
        <h1 class="page-title">轻骑e站校园美育专题交流平台</h1>
        <p class="page-text">
          平台围绕高校美育建设与专题传播展开，联动课程资源、作品成果、AI创作与电子阅读内容，形成清晰、集中、易浏览的线上展示空间。
        </p>
        <div class="hero-actions">
          <RouterLink class="button button-primary" :to="routePaths.worksShowcase">查看作品展示</RouterLink>
          <RouterLink class="button button-secondary" :to="routePaths.ebookDetail">查看电子图书</RouterLink>
        </div>
      </div>

      <div class="home-visual">
        <div class="abstract-stage">
          <div class="stage-orb stage-orb-gold"></div>
          <div class="stage-orb stage-orb-orange"></div>
          <div class="stage-card">
            <span class="stage-kicker">平台概览</span>
            <strong>美育资源整合与专题传播窗口</strong>
            <p>以统一视觉和模块化结构串联教学、展示、创作与阅读板块，形成完整顺畅的内容浏览路径。</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="value-grid">
        <article v-for="item in introCards" :key="item.title" class="value-card">
          <span class="value-index">简介</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>
  </div>
</template>