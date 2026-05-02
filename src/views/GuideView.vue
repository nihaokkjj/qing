<script setup>
import MediaPlayCard from '../components/MediaPlayCard.vue'
import { routePaths } from '../data/siteContent'
import teachTraditional from '../assets/teach/走进传统文化.png'
import teachIdeology from '../assets/teach/艺术思政课.png'
import teachPetroleum from '../assets/teach/中国石油文化.png'
import teachElectronic from '../assets/teach/电子音乐制作.png'
import teachStage from '../assets/teach/舞台技术基础.png'
import teachTheory from '../assets/teach/艺术理论.png'
import teachAesthetics from '../assets/teach/现代美学.png'
import teachDance from '../assets/teach/现代舞表演基础.png'
import teachMusicScience from '../assets/teach/音乐与科学.png'

const teachingItems = [
  { title: '走进传统文化', image: teachTraditional },
  { title: '艺术思政课', image: teachIdeology },
  { title: '中国石油文化', image: teachPetroleum },
  { title: '电子音乐制作', image: teachElectronic },
  { title: '舞台技术基础', image: teachStage },
  { title: '艺术理论', image: teachTheory },
  { title: '现代美学', image: teachAesthetics },
  { title: '现代舞表演基础', image: teachDance },
  { title: '音乐与科学', image: teachMusicScience },
]
</script>

<template>
  <div class="view-shell">

    <section class="detail-hero">
      <div class="detail-copy">
        <p class="eyebrow">智慧教学</p>
        <h1 class="page-title">课程资源与美育教学成果展示</h1>
        <p class="page-text">
          围绕课程建设、理论学习与实践教学，集中呈现传统文化、艺术理论、舞台实践和综合素养等多类型教学内容。
        </p>
        <div class="hero-actions">
          <RouterLink class="button button-primary" :to="routePaths.projectIntro">查看项目简介</RouterLink>
          <RouterLink class="button button-secondary" :to="routePaths.ebookDetail">查看电子图书</RouterLink>
        </div>
      </div>

      <div class="home-visual">
        <div class="abstract-stage">
          <div class="stage-orb stage-orb-gold"></div>
          <div class="stage-orb stage-orb-purple"></div>
          <div class="stage-card">
            <span class="stage-kicker">教学展示</span>
            <strong>课程内容与实践模块并行呈现</strong>
            <p>以课程图片为主线，直观呈现教学专题结构，方便快速浏览不同教学板块与课程方向。</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="teach-gallery-grid">
        <MediaPlayCard v-for="item in teachingItems" :key="item.title" :image="item.image" :title="item.title" />
      </div>
    </section>
  </div>
</template>
