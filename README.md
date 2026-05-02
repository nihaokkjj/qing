# 轻骑e站项目说明

## 项目概述

`轻骑e站` 是一个基于 Vue 3 + Vite 的单页专题站，面向西南石油大学美育专题展示场景。站点围绕《以美化人 以美育德》及相关美育内容，组织成“智慧教学、作品展示、AI创作、电子图书、项目简介、搜索结果”等栏目，侧重专题展示、内容导览和资源跳转。

## 技术栈

- Vue 3
- Vue Router 4
- Vite 8
- 静态图片资源
- 全局 CSS 样式

## 页面结构

- `/zhihui-fangxue`：智慧教学，展示课程资源与教学成果
- `/works-showcase`：作品展示，集中展示舞台演出和专题活动
- `/ai-creation`：AI创作，展示 AI 工具与生成内容
- `/ebooks/yi-mei-hua-ren-yi-mei-yu-de`：电子图书详情页
- `/project-intro`：项目简介，说明站点定位与内容结构
- `/search?q=关键词`：搜索结果页，按关键词过滤资源
- `/`：默认重定向到智慧教学页

顶部栏统一显示专题栏目标签，页面标题会随着路由切换自动更新。

## 主要文件

- `src/main.js`：应用入口，挂载 Vue 应用并引入全局样式
- `src/App.vue`：全站外壳，负责头部、栏目标签和路由视图
- `src/router/index.js`：路由定义、旧地址兼容和页面标题控制
- `src/data/siteContent.js`：站点文案、导航、路由路径和搜索资源数据
- `src/views/`：各栏目页面
- `src/components/`：通用组件
- `src/assets/`：页面图片资源
- `src/style.next.css`：全局样式

## 运行方式

```bash
pnpm install
pnpm dev
```

常用构建命令：

```bash
pnpm build
pnpm preview
```

## 开发说明

- 站点的导航、页面文案和跳转地址主要集中在 `src/data/siteContent.js`
- 搜索页通过查询参数 `?q=` 做前端过滤，不依赖后端
- `src/router/index.js` 内置了部分旧 hash 路由兼容逻辑
- 资源图片按主题分组在 `src/assets/book`、`src/assets/teach`、`src/assets/works`、`src/assets/ai`
- 已移除当前入口不依赖的历史页面、旧组件和未加载样式文件

## 适合的使用场景

- 校园美育专题页
- 电子图书导览页
- 课程资源展示页
- 活动宣传与扫码入口页
