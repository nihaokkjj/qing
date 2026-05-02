<script setup>
const navItems = [
  { label: '首页', href: '#top' },
  { label: '书目信息', href: '#metadata' },
  { label: '内容导览', href: '#guide' },
  { label: '应用场景', href: '#scenarios' },
  { label: '在线查看', href: '#online' },
]

const heroFacts = [
  { label: '著者', value: '付相宜' },
  { label: '出版时间', value: '2025年6月' },
  { label: '出版社', value: '石油工业出版社' },
]

const valueCards = [
  {
    index: '01',
    title: '先把书讲清楚',
    text: '第一屏直接给出书名、副标题、作者和按钮，让访问者立刻知道页面在展示什么。',
  },
  {
    index: '02',
    title: '再给阅读路径',
    text: '用“书目信息”和“内容导览”把页面整理成可阅读的专题页，而不是把内容平铺堆叠。',
  },
  {
    index: '03',
    title: '最后引导跳转',
    text: '把在线查看入口放到后段，更符合浏览顺序，也保留清晰的下一步动作。',
  },
]

const bookFacts = [
  { label: '书名', value: '以美化人 以美育德' },
  { label: '副标题', value: '新时代高校美育理论创新与实践研究' },
  { label: '著者', value: '付相宜' },
  { label: '出版时间', value: '2025年6月' },
  { label: '出版社', value: '石油工业出版社' },
  { label: 'ISBN', value: '978-7-5183-7676-6' },
]

const readingPaths = [
  {
    index: '01',
    title: '先认识主题',
    text: '从“以美化人、以美育德”出发，先让读者理解这本书的核心议题与页面重心。',
  },
  {
    index: '02',
    title: '再看研究方向',
    text: '通过副标题承接“理论创新”与“实践研究”，让书的学术气质更完整地呈现出来。',
  },
  {
    index: '03',
    title: '补充应用场景',
    text: '再往下放置馆藏推荐、学院专题或课程资源等模块，页面会更像真正能用的专题站。',
  },
  {
    index: '04',
    title: '最后在线查看',
    text: '通过 ISBN、书名或出版社关键词跳转外部网页，让读者继续检索更详细的信息。',
  },
]

const scenarioCards = [
  {
    icon: '馆',
    title: '图书馆推荐页',
    text: '适合放在馆藏推荐、主题书展、馆员荐书或新书速递页面中。',
  },
  {
    icon: '院',
    title: '学院专题页',
    text: '适合学院官网、教研室专题或校园美育活动周的介绍落地页。',
  },
  {
    icon: '课',
    title: '课程资源页',
    text: '可继续补充目录、摘录、课堂延伸阅读与活动通知，形成课程配套页面。',
  },
  {
    icon: '活',
    title: '活动二维码页',
    text: '纯前端部署轻量，适合讲座、展演、共读活动的扫码入口。',
  },
]

const onlineLinks = [
  {
    badge: '推荐入口',
    label: '在线查看相关信息',
    caption: '通过 ISBN 直接检索相关网页信息',
    href: 'https://www.baidu.com/s?wd=9787518376766',
  },
  {
    badge: '书名检索',
    label: '按书名搜索',
    caption: '搜索《以美化人 以美育德》相关页面',
    href: 'https://cn.bing.com/search?q=%E4%BB%A5%E7%BE%8E%E5%8C%96%E4%BA%BA+%E4%BB%A5%E7%BE%8E%E8%82%B2%E5%BE%B7',
  },
  {
    badge: '出版社线索',
    label: '按出版社搜索',
    caption: '搜索石油工业出版社与图书关联信息',
    href: 'https://www.baidu.com/s?wd=%E7%9F%B3%E6%B2%B9%E5%B7%A5%E4%B8%9A%E5%87%BA%E7%89%88%E7%A4%BE+%E4%BB%A5%E7%BE%8E%E5%8C%96%E4%BA%BA+%E4%BB%A5%E7%BE%8E%E8%82%B2%E5%BE%B7',
  },
]

const tagList = ['高校美育', '理论创新', '实践研究', '立德树人']
const useList = ['图书专题站', '馆藏推荐页', '活动二维码落地页']
</script>

<template>
  <div class="page-shell">
    <div class="browser-frame">
      <div class="browser-bar">
        <div class="browser-dots" aria-hidden="true">
          <span class="dot dot-red"></span>
          <span class="dot dot-yellow"></span>
          <span class="dot dot-green"></span>
        </div>
        <div class="address-bar">
          <span class="address-icon" aria-hidden="true"></span>
          <span>qing-book-showcase.local</span>
        </div>
      </div>

      <header class="site-header">
        <a class="brand" href="#top">
          <span class="brand-mark">美</span>
          <span class="brand-copy">
            <strong>高校美育专题站</strong>
            <small>Book Showcase / Vue + Vite</small>
          </span>
        </a>

        <nav class="site-nav" aria-label="页面导航">
          <a v-for="item in navItems" :key="item.href" :href="item.href">
            {{ item.label }}
          </a>
        </nav>
      </header>

      <main class="site-main">
        <section id="top" class="hero-section">
          <div class="hero-copy">
            <p class="eyebrow">高校美育专题页</p>
            <h1>以美化人 以美育德</h1>
            <p class="hero-subtitle">新时代高校美育理论创新与实践研究</p>
            <p class="hero-text">
              这一版把页面逻辑重新整理成“先认识图书，再浏览内容，最后进入在线查看”的顺序，
              让它更像一个真正可用的图书专题网站，而不只是把信息平铺在页面上。
            </p>

            <div class="hero-actions">
              <a class="button button-primary" href="#metadata">查看书目信息</a>
              <a class="button button-secondary" href="#online">在线查看相关信息</a>
            </div>

            <div class="hero-facts">
              <article v-for="fact in heroFacts" :key="fact.label" class="hero-fact-card">
                <span>{{ fact.label }}</span>
                <strong>{{ fact.value }}</strong>
              </article>
            </div>
          </div>

          <div class="hero-visual">
            <div class="book-stage hero-book-stage">
              <div class="book-object">
                <div class="book-spine">
                  <span>以美化人 以美育德</span>
                </div>
                <div class="book-cover">
                  <div class="cover-blob cover-blob-gold"></div>
                  <div class="cover-blob cover-blob-orange"></div>
                  <div class="cover-blob cover-blob-purple"></div>
                  <div class="cover-blob cover-blob-lilac"></div>
                  <span class="cover-author">付相宜 著</span>
                  <span class="cover-subtitle">新时代高校美育理论创新与实践研究</span>
                  <span class="cover-title">以美化人<br />以美育德</span>
                  <span class="cover-publisher">石油工业出版社</span>
                </div>
              </div>
            </div>

            <aside class="hero-note">
              <p class="panel-kicker">页面定位</p>
              <h2>一本书，带起整页内容</h2>
              <p>
                结构上仍然保留参考图“主视觉 + 中段模块 + 后续内容”的节奏，但信息全部围绕这一本书收束，
                浏览时会更聚焦。
              </p>
              <ul class="note-list">
                <li v-for="item in useList" :key="item">{{ item }}</li>
              </ul>
            </aside>
          </div>
        </section>

        <section class="value-section">
          <div class="section-heading">
            <p class="section-kicker">页面逻辑</p>
            <h2>让信息顺序比装饰更先成立</h2>
            <p class="section-lead">
              把内容分成 3 个关键问题去回答，页面会更顺，视觉层次也会更稳定。
            </p>
          </div>

          <div class="value-grid">
            <article v-for="card in valueCards" :key="card.index" class="value-card">
              <span class="value-index">{{ card.index }}</span>
              <h3>{{ card.title }}</h3>
              <p>{{ card.text }}</p>
            </article>
          </div>
        </section>

        <section id="metadata" class="metadata-section">
          <div class="section-heading">
            <p class="section-kicker">书目信息</p>
            <h2>把读者最关心的内容先收拢到一屏</h2>
            <p class="section-lead">
              书名、副标题、作者、出版社和 ISBN 统一展示，读者不用来回找重点。
            </p>
          </div>

          <div class="metadata-layout">
            <div class="metadata-panel">
              <p class="panel-kicker">图书定位</p>
              <h3>适合作为高校美育专题站的核心书目</h3>
              <p>
                当前页面文案以书名与副标题为主线，如果后续补上图书简介、目录或推荐语，
                这页就能很自然地扩展成更完整的专题展示页。
              </p>
              <div class="tag-row">
                <span v-for="tag in tagList" :key="tag">{{ tag }}</span>
              </div>
            </div>

            <div class="metadata-grid">
              <article v-for="fact in bookFacts" :key="fact.label" class="meta-card">
                <span class="meta-label">{{ fact.label }}</span>
                <strong>{{ fact.value }}</strong>
              </article>
            </div>
          </div>
        </section>

        <section id="guide" class="guide-section">
          <div class="section-heading">
            <p class="section-kicker">内容导览</p>
            <h2>让访问者知道应该怎样往下看</h2>
            <p class="section-lead">与其堆很多块内容，不如给出一条清晰的浏览路径。</p>
          </div>

          <div class="guide-layout">
            <div class="guide-summary">
              <p class="panel-kicker">推荐顺序</p>
              <h3>认识图书 → 理解主题 → 进入场景 → 在线检索</h3>
              <p>
                这套顺序适合大多数图书专题页，也方便你后续继续加上目录、摘录、活动介绍等模块。
              </p>
              <div class="summary-tags">
                <span>先看清楚</span>
                <span>再展开阅读</span>
                <span>最后跳转外链</span>
              </div>
            </div>

            <div class="path-list">
              <article v-for="path in readingPaths" :key="path.index" class="path-item">
                <span class="path-index">{{ path.index }}</span>
                <div class="path-content">
                  <h3>{{ path.title }}</h3>
                  <p>{{ path.text }}</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="scenarios" class="scenario-section">
          <div class="section-heading">
            <p class="section-kicker">应用场景</p>
            <h2>这个页面更适合被放到哪里</h2>
            <p class="section-lead">把用途讲清楚，页面就不只是好看，而是更容易直接投入使用。</p>
          </div>

          <div class="scenario-grid">
            <article v-for="card in scenarioCards" :key="card.title" class="scenario-card">
              <span class="scenario-icon">{{ card.icon }}</span>
              <h3>{{ card.title }}</h3>
              <p>{{ card.text }}</p>
            </article>
          </div>
        </section>

        <section id="online" class="online-section">
          <div class="online-copy">
            <p class="section-kicker">在线查看</p>
            <h2>把跳转入口放在页面后段更自然</h2>
            <p class="section-lead">
              这样既不会打断浏览，也保留清晰的下一步动作。当前按钮都是静态外链，
              后续可直接替换为出版社页面、馆藏系统、PDF 或文章链接。
            </p>
          </div>

          <div class="online-grid">
            <a
              v-for="link in onlineLinks"
              :key="link.label"
              :href="link.href"
              target="_blank"
              rel="noreferrer"
              class="online-card"
            >
              <span class="online-badge">{{ link.badge }}</span>
              <strong>{{ link.label }}</strong>
              <p>{{ link.caption }}</p>
            </a>
          </div>
        </section>
      </main>

      <footer class="site-footer">
        <div>
          <strong>高校美育专题站</strong>
          <p>Vue + Vite 纯前端图书展示页</p>
        </div>
        <p>围绕《以美化人 以美育德》设计的静态专题页面</p>
      </footer>
    </div>
  </div>
</template>
