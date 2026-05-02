<script setup>
import MediaPlayCard from '../components/MediaPlayCard.vue'
import aiLogoAigc from '../assets/ai/logo/AIGC.png'
import aiLogoSeedance from '../assets/ai/logo/SEEDANCE.png'
import aiLogoSuno from '../assets/ai/logo/SUNOAI.png'
import aiMet1 from '../assets/ai/met/器乐《古琴芳华》.png'
import aiMet2 from '../assets/ai/met/戏曲《锦绣梨园》.png'
import aiMet3 from '../assets/ai/met/故事片《石油的故事》.png'
import aiMet4 from '../assets/ai/met/歌曲《保卫玉门》.png'
import aiMet5 from '../assets/ai/met/纪录片《传承》.png'
import aiMet6 from '../assets/ai/met/舞蹈《敦煌飞天》.png'
import { routePaths } from '../data/siteContent'

const aiToolItems = [
  { title: 'SEEDANCE', image: aiLogoSeedance },
  { title: 'AIGC', image: aiLogoAigc },
  { title: 'SUNOAI', image: aiLogoSuno },
]

const aiWorks = [
  { title: '故事片《石油的故事》', image: aiMet3 },
  { title: '纪录片《传承》', image: aiMet5 },
  { title: '歌曲《保卫玉门》', image: aiMet4 },
  { title: '戏曲《锦绣梨园》', image: aiMet2 },
  { title: '舞蹈《敦煌飞天》', image: aiMet6 },
  { title: '器乐《古琴芳华》', image: aiMet1 },
]
</script>

<template>
  <div class="view-shell">
    <section class="detail-hero">
      <div class="detail-copy">
        <p class="eyebrow">AI创作</p>
        <h1 class="page-title">数字技术赋能美育内容表达</h1>
        <p class="page-text">
          以 AI 工具平台为支撑，展示图像、音乐与视频等多种生成实践，探索高校美育传播的数字化表达方式与协同创作路径。
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
            <span class="stage-kicker">数字创作</span>
            <strong>工具平台与生成成果联动展示</strong>
            <p>从创意生成到作品呈现，集中展现 AI 在美育内容生产中的辅助价值与应用场景。</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="section-heading">
        <h2 class="section-title">AI工具平台</h2>
      </div>

      <div class="ai-logo-grid">
        <article v-for="item in aiToolItems" :key="item.title" class="ai-logo-card">
          <div class="ai-logo-media">
            <img :src="item.image" :alt="item.title" class="ai-logo-image" />
          </div>
          <p class="ai-card-name">{{ item.title }}</p>
        </article>
      </div>
    </section>

    <section class="section-block">
      <div class="section-heading">
        <h2 class="section-title">AI创作作品展示</h2>
      </div>

      <div class="ai-gallery-grid">
        <MediaPlayCard v-for="item in aiWorks" :key="item.title" :image="item.image" :title="item.title" />
      </div>
    </section>
  </div>
</template>
