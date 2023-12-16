---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "快速入门"
  text: "Vue React NestJs\n项目说明"
  tagline: "帮助快速了解，项目的基本情况"
  image:
    src: /images/common/VitePress.png
    alt: VitePress
  actions:
    - theme: brand
      text: NestJS
      link: /guide/nestjs/index.md
    - theme: brand
      text: Vue
      link: /guide/vue/index.md
    - theme: brand
      text: React
      link: /guide/react/index.md
    - theme: alt
      text: VitePress文档入门
      link: /guide/markdown

features:
  - title: NestJS
    icon: { src: /images/icon/NestJs.svg }
    details: 基于NestJs开发的后端接口
  - title: Vue
    icon: { src: /images/icon/Vue.svg }
    details: 基于Vue开发的前端H5项目
  - title: React
    icon: { src: /images/icon/React.svg }
    details: 基于React开发的后端管理系统
---