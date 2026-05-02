<script setup>
import bookImage from '../assets/book.JPG'
import PageBottomPager from '../components/PageBottomPager.vue'
import bookPage1 from '../assets/book/1.png'
import bookPage2 from '../assets/book/2.png'
import bookPage3 from '../assets/book/3.png'
import bookPage4 from '../assets/book/4.png'
import { routePaths } from '../data/siteContent'

const bookTitleMain = '以美化人 以美育德'
const bookTitleSub = '新时代高校美育理论创新与实践研究'
const featuredBookTitle = `${bookTitleMain} ${bookTitleSub}`

const bookMetaItems = [
  { label: '著者', value: '付相宜' },
  { label: '出版日期', value: '2025年6月' },
  { label: '出版社', value: '石油工业出版社' },
  { label: 'ISBN', value: '978-7-5183-7676-6' },
]

const bookGalleryImages = [
  { src: bookPage1, alt: `${featuredBookTitle} 内页图 1` },
  { src: bookPage2, alt: `${featuredBookTitle} 内页图 2` },
  { src: bookPage3, alt: `${featuredBookTitle} 内页图 3` },
  { src: bookPage4, alt: `${featuredBookTitle} 内页图 4` },
]

const catalogLink =
  'https://www.baidu.com/s?wd=%E4%BB%A5%E7%BE%8E%E5%8C%96%E4%BA%BA+%E4%BB%A5%E7%BE%8E%E8%82%B2%E5%BE%B7+%E7%9B%AE%E5%BD%95'
const onlineReadingLink =
  'https://www.baidu.com/s?wd=%E4%BB%A5%E7%BE%8E%E5%8C%96%E4%BA%BA+%E4%BB%A5%E7%BE%8E%E8%82%B2%E5%BE%B7+%E5%9C%A8%E7%BA%BF%E9%98%85%E8%AF%BB'
</script>

<template>
  <div class="view-shell view-shell-book">
    <section class="detail-hero detail-hero-book">
      <div class="detail-copy">
        <p class="eyebrow">电子图书</p>
        <h1 class="page-title">{{ bookTitleMain }}</h1>
        <p class="page-subtitle book-hero-subtitle">{{ bookTitleSub }}</p>
        <p class="page-text">
          围绕专题图书的封面、出版信息与内页内容，提供更加清晰的阅读导览与访问入口，方便课程延展和专题阅读使用。
        </p>
        <div class="hero-actions">
          <RouterLink class="button button-primary" :to="routePaths.zhihuiFangxue">查看智慧教学</RouterLink>
          <RouterLink class="button button-secondary" :to="routePaths.aiCreation">查看 AI 创作</RouterLink>
        </div>
      </div>

      <div class="home-visual">
        <div class="abstract-stage">
          <div class="stage-orb stage-orb-gold"></div>
          <div class="stage-orb stage-orb-orange"></div>
          <div class="stage-card">
            <span class="stage-kicker">电子图书</span>
            <strong>专题阅读与数字导览</strong>
            <p>以专题图书为核心，串联出版信息、目录入口与在线阅读资源，构建更清晰的数字阅读页面。</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-block section-block-book">
      <div class="book-showcase-panel book-showcase-panel-compact">
        <div class="book-showcase-media book-showcase-media-compact">
          <img :src="bookImage" :alt="`${featuredBookTitle} 封面图`" class="book-showcase-image book-showcase-image-compact" />
        </div>

        <div class="book-showcase-copy book-showcase-copy-compact">
          <div class="book-title-stack">
            <h3>{{ bookTitleMain }}</h3>
            <p class="book-showcase-subtitle">{{ bookTitleSub }}</p>
          </div>

          <div class="book-showcase-meta book-showcase-meta-compact">
            <article v-for="item in bookMetaItems" :key="item.label" class="book-showcase-row book-showcase-row-compact">
              <span>{{ item.label }}</span>
              <strong>{{ item.value }}</strong>
            </article>
          </div>

          <div class="book-showcase-actions book-showcase-actions-compact">
            <div class="book-showcase-action-row book-showcase-action-row-compact">
              <a
                class="book-jump-button book-jump-button-primary book-jump-button-compact book-jump-button-plain"
                :href="catalogLink"
                target="_blank"
                rel="noreferrer"
              >
                图书目录
              </a>
              <a
                class="book-jump-button book-jump-button-secondary book-jump-button-compact"
                :href="onlineReadingLink"
                target="_blank"
                rel="noreferrer"
              >
                在线阅读
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="book-gallery-grid" aria-label="图书内页展示">
        <article v-for="(item, index) in bookGalleryImages" :key="item.alt" class="book-gallery-card">
          <img :src="item.src" :alt="item.alt" class="book-gallery-image" />
          <span class="book-gallery-index">0{{ index + 1 }}</span>
        </article>
      </div>

      <PageBottomPager :total="bookGalleryImages.length" :page-count="400" :page-size="bookGalleryImages.length" />
    </section>
  </div>
</template>
