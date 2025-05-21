# Monorepo基本结构

[pnpm相关说明](https://pnpm.io/zh/workspaces)

## 创建`# pnpm-workspace.yaml`

```yaml
packages:
  # 公用配置
  - configs/*
  # 后端开发项目
  - apps/backend/**
  # 前端开发项目
  - apps/frontend/**
  # 公用的模块包
  - packages/*
  # vitepress
  - docs'
```
