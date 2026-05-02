<script setup>
import MediaPlayCard from '../components/MediaPlayCard.vue'
import PageBottomPager from '../components/PageBottomPager.vue'
import { routePaths } from '../data/siteContent'
import workSing from '../assets/works/唱支山歌给党听.png'
import workOilfield from '../assets/works/油田一线演出.png'
import workHeritage from '../assets/works/一脉相承网络云春晚.png'
import workYouth from '../assets/works/青春献石油.png'
import workVillage from '../assets/works/乡村慰问演出.png'
import workSilkRoad from '../assets/works/乐响丝路音乐会.png'
import workTea from '../assets/works/蜀都茶蒙山芽.png'
import workInternational from '../assets/works/留学生社区演出.png'
import workFlashmob from '../assets/works/没有共产党就没有新中国歌舞快闪.png'

const worksPillars = [
  {
    title: '\u6587\u827a\u4f5c\u54c1\u5c55\u64ad',
    tone: 'works-pillar-broadcast',
  },
  {
    title: '\u793e\u4f1a\u6f14\u51fa\u670d\u52a1',
    tone: 'works-pillar-service',
  },
  {
    title: '\u4e3b\u9898\u6587\u827a\u6d3b\u52a8',
    tone: 'works-pillar-activity',
  },
]

const worksItems = [
  { title: '唱支山歌给党听', image: workSing },
  { title: '油田一线演出', image: workOilfield },
  { title: '一脉相承网络云春晚', image: workHeritage },
  { title: '青春献石油', image: workYouth },
  { title: '乡村慰问演出', image: workVillage },
  { title: '乐响丝路音乐会', image: workSilkRoad },
  { title: '蜀都茶蒙山芽', image: workTea },
  { title: '留学生社区演出', image: workInternational },
  { title: '没有共产党就没有新中国歌舞快闪', image: workFlashmob },
]
</script>

<template>
  <div class="view-shell">

    <section class="detail-hero">
      <div class="detail-copy">
        <p class="eyebrow">作品展示</p>
        <h1 class="page-title">校园美育成果与主题演出集中呈现</h1>
        <p class="page-text">
          这一板块聚合舞台表演、专题活动和社会服务成果，以更加直观的方式展现学校美育实践的内容深度与传播活力。
        </p>
        <div class="hero-actions">
          <RouterLink class="button button-primary" :to="routePaths.aiCreation">查看 AI 创作</RouterLink>
          <RouterLink class="button button-secondary" :to="routePaths.ebookDetail">查看电子图书</RouterLink>
        </div>
      </div>

      <div class="home-visual">
        <div class="abstract-stage">
          <div class="stage-orb stage-orb-gold"></div>
          <div class="stage-orb stage-orb-orange"></div>
          <div class="stage-card">
            <span class="stage-kicker">成果展陈</span>
            <strong>舞台作品、品牌活动与社会服务</strong>
            <p>从校内创排到校外传播，系统展示代表性文艺作品与专题演出项目，形成完整的成果展示序列。</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="works-pillars-grid">
        <article v-for="item in worksPillars" :key="item.title" :class="['works-pillar', item.tone]">
          <h2>{{ item.title }}</h2>
        </article>
      </div>
    </section>

    <section class="section-block">
      <div class="works-gallery-grid">
        <MediaPlayCard v-for="item in worksItems" :key="item.title" :image="item.image" :title="item.title" />
      </div>

      <PageBottomPager :total="worksItems.length" :page-count="15" :page-size="worksItems.length" />
    </section>
  </div>
</template>
