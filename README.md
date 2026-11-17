# Chips Studio ／ 薯条工作室

Kaiyo 推进的独立 AI 原生产品与创作工作室。这个仓库维护工作室官网，英文首页位于 `/Chips_Studio/`，简体中文位于 `/Chips_Studio/zh/`。每个栏目和案例均生成独立 HTML。页面不依赖客户端 JavaScript、外部字体或数据库。

## 本地运行

安装 Node.js 24.22.1（版本记录在 `.nvmrc`）。在仓库根目录运行以下命令。

```sh
nvm use
npm ci
npm run dev
```

打开终端显示的地址，在主机名后访问 `/Chips_Studio/`。构建前运行类型检查，并校验静态产物。

```sh
npm run check
npm run build
python3 scripts/verify_html.py https://ka1y0.github.io/Chips_Studio/
npm run preview
```

## 项目与文案

- `src/data/studio.ts` 管理项目名、稳定路由 ID、栏目、双语描述、平台、发布与源码状态、公开入口。新增记录后，构建会生成英文和中文详情页、索引及站点地图。产品首页精选具有有效商店链接的产品。新增实验时同步调整 Lab 的精选项目；当前 Lab 首页展示 Project Diary。
- 在 `src/data/copy.ts` 的同一条目中编辑英文与简体中文。公共页面布局位于 `src/pages/[...path].astro`，导航与分享预览位于 `src/components/Frame.astro`。路由切换保留当前页面。
- 检查当前商店、官方产品网站和源码仓库后，更新事实与 `site.config.mjs` 中的核验日期。预发布需保留版本及实验性质。用有效商店链接启用商店按钮。
- `projects.json`、`AI_CONTEXT.md`、`sitemap.xml` 由页面数据生成。核对域名迁移时的 HTTPS 源站、路径前缀、个人站链接和账号级 robots.txt 中的 sitemap 地址。项目站的域名设置集中在 `site.config.mjs`。

## 首版内容与公开依据

| 项目 | 发布与源码范围 | 公开依据 |
| --- | --- | --- |
| Health2You | iPhone 与 Apple Watch，已发布 1.3.1；公开工程仓库提供法律与支持材料 | [美国 App Store](https://apps.apple.com/us/app/health2you/id6786253596) · [工程说明](https://github.com/Ka1y0/Project_Health2You) |
| Rill | 已发布 1.1.1，商店标题 Rill — AI Chat；公开仓库维护信息站 | [美国 App Store](https://apps.apple.com/us/app/rill-ai-chat/id6819230842) · [产品资料](https://ka1y0.github.io/Project_Rill/) |
| Etta | iPhone 与 iPad 的翻译项目，已公开双语资料；分发状态待证实 | [产品资料](https://ka1y0.github.io/Project_Etta/) |
| Lume | 相机项目，已公开双语资料；平台和分发状态待证实 | [产品资料](https://ka1y0.github.io/Project_Lume/) |
| Project Diary | iPad 手写交互实验，MIT，v0.1.0-alpha | [仓库](https://github.com/Ka1y0/Project_Diary) · [预发布](https://github.com/Ka1y0/Project_Diary/releases/tag/v0.1.0-alpha) |

核验日期为 2026-11-17。App Store 数据可通过 [Apple 的开发者查询接口](https://itunes.apple.com/lookup?id=6786149815&entity=software&country=us) 复核。各项目仓库的许可证适用于对应仓库的授权范围。

## 素材

`public/art/chips.webp` 是为本站生成的 Chips 工作室概念插画。产品封面均为本站制作的抽象图形，项目详情页注明插画性质。替换素材时使用已获公开授权的文件，补充来源与授权，调整组件中的图片尺寸与替代文本。保持封面 5∶3、首页插画 3∶2，导出 WebP。站点图标位于 `public/favicon.svg`。

## 发布与回退

在 GitHub 仓库的 Settings → Pages 将发布来源设为 GitHub Actions。PR 运行锁定安装、类型检查、构建和 HTML 资源校验。合并至 main 后，Verify and publish 工作流上传静态产物并部署到 github-pages 环境。也可在 Actions 页选择同一工作流，在 main 上 Run workflow。

部署任务将 commit SHA 写入 `revision.txt` 并在线核对。打开 GitHub 返回的 Pages 地址，访问中英文产品详情并刷新。抽查分享图片和两个外部商店入口。回退时在新分支运行 `git revert <commit>`，提交 PR 并合并至 main。合并后自动部署并重新校验线上版本。
