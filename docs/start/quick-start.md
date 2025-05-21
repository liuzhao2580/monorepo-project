:::

## 使用`github`的`action`自动部署到`github-pages`中

### 创建部署的`deploy.yml`文件，在项目的根目录下面

`.github\workflows\deploy.yml`

![Snipaste_2023-12-21_09-34-09.png](/images/start/quick-start/Snipaste_2023-12-21_09-34-09.png)

完整的代码：使用的是`pnpm`进行依赖安装。

```yml
name: 部署VitePress

on:
  push:
    branches:
      - docs # 这段是在推送到 docs 分支时触发该命令

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2
        with:
          ref: docs # 这一步检查 docs 代码

      - name: Setup Node.js and pnpm
        uses: actions/setup-node@v3
        with:
          node-version: "20.10.0" # 设置 nodejs 的版本

      - name: Install pnpm
        run: npm install -g pnpm # 全局安装 pnpm

      - name: Install dependencies
        run: pnpm install # 使用 pnpm 安装依赖

      - name: Build VitePress
        run: pnpm run docs:build # 这里是打包 vitepress 命令

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.PAT_TOKEN }} # 这一步很重要，单独看下面的大步骤，主要是用来给该脚本一些仓库权限
          publish_dir: .vitepress/dist # 指定该文件夹中的 dist
          publish_branch: gh-pages # 推送到关联仓库的 gh-pages 分支
          dotfiles: true # 包括在提交中，即使被 .gitignore 文件忽略
```

这段 YAML 文件定义了一个 GitHub Actions 工作流，用于在推送到 `docs` 分支时构建和部署 VitePress 项目。

- `on`: 定义触发工作流的事件，这里是在推送到 `docs` 分支时触发。

- `jobs`: 定义工作流中的任务。

  - `build-and-deploy`: 任务的名称，表示构建和部署。

    - `runs-on`: 指定任务运行的操作系统，这里是 `ubuntu-latest`。

    - `steps`: 定义任务的一系列步骤。

      - `name`: 步骤的名称。

      - `uses`: 使用的 GitHub Action。

      - `with`: 配置项，用于传递参数给 Action。

      - `run`: 执行的脚本命令。

其中，具体步骤解释如下：

1. 检出代码：使用 `actions/checkout` Action 将代码检出到工作目录。

2. 设置 Node.js 和 pnpm：使用 `actions/setup-node` Action 设置 Node.js 和安装 pnpm。

3. 安装 pnpm：全局安装 pnpm。

4. 安装依赖：使用 pnpm 安装项目依赖。

5. 构建 VitePress：运行 pnpm 命令构建 VitePress 项目。

6. 部署到 GitHub Pages：使用 `peaceiris/actions-gh-pages` Action 部署生成的静态文件到 GitHub Pages。配置中包括 GitHub Token、发布目录、发布分支以及是否包括 dotfiles（即使在 `.gitignore` 中也提交）等。

### 仓库说明

![Snipaste_2023-12-21_09-41-55.png](/images/start/quick-start/Snipaste_2023-12-21_09-41-55.png)

### 以下创建私人 token 和 pages 详细的步骤截图

> 如果看不清楚，可以右键打开到新窗口预览

![请添加图片描述](/images/start/quick-start/all-pic.png)

### `github_token: secrets.PAT_TOKEN`创建

#### 整合步骤

![请添加图片描述](/images/start/quick-start/create-token.png)

#### 分解步骤

1.先点击个人头像，进入设置页面
![请添加图片描述](/images/start/quick-start/Snipaste_2023-12-21_09-49-37.png)

2.进入 Developer Settings 设置
![请添加图片描述](/images/start/quick-start/Snipaste_2023-12-21_09-50-53.png)

3.生成个人`token` Personal access tokens (classic)
![请添加图片描述](/images/start/quick-start/Snipaste_2023-12-21_09-52-06.png)

4.设置 token
![请添加图片描述](/images/start/quick-start/Snipaste_2023-12-21_09-54-50.png)

5.保存生成的 token
![请添加图片描述](/images/start/quick-start/Snipaste_2023-12-21_09-56-15.png)

6.进入仓库添加该仓库的 token
![请添加图片描述](/images/start/quick-start/Snipaste_2023-12-21_10-05-47.png)
![请添加图片描述](/images/start/quick-start/Snipaste_2023-12-21_10-06-12.png)
![请添加图片描述](/images/start/quick-start/Snipaste_2023-12-21_10-06-54.png)

### 4. 创建`githubpages`

#### 整合步骤

![请添加图片描述](/images/start/quick-start/set-pages.png)

#### 分解步骤

![请添加图片描述](/images/start/quick-start/Snipaste_2023-12-21_10-08-44.png)
![请添加图片描述](/images/start/quick-start/Snipaste_2023-12-21_10-09-25.png)
