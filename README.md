# xiaotouming-site

用 Astro + Vue 搭建的个人网站脚手架：项目展示 + 博客，中/日/英三语，GSAP + Lenis + Astro View Transitions 做动效。

## 本地运行

```bash
npm install
npm run dev
```

打开 http://localhost:4321

```bash
npm run build    # 生成静态文件到 dist/
npm run preview  # 本地预览构建产物
```

## 目录结构说明

```
src/
  components/     可复用组件（Header/Footer/Hero/ProjectCard/TerminalIntro.vue）
  layouts/         Layout.astro —— 引入字体、ClientRouter、Lenis、GSAP滚动动效
  i18n/            ui.ts 三语文案字典；utils.ts 语言判断和切换路径工具
  data/            projects.ts —— 项目列表数据（直接改这个文件加新项目）
  content/blog/    博客文章，按 zh/ ja/ en/ 三个子目录分别存放 .md
  pages/           页面路由：/ 和 /blog 是中文（默认语言不带前缀），
                   /en /en/blog、/ja /ja/blog 是英文和日文
```

## 加一篇新博客文章

在对应语言目录下新建一个 `.md` 文件即可，例如：

```
src/content/blog/zh/my-new-post.md
```

frontmatter 需要包含 `title` / `description` / `pubDate` / `lang`，其余按 `hello-world.md` 的格式写就行，页面会自动生成。

## 加一个新项目

编辑 `src/data/projects.ts`，往数组里加一个对象，三语标题和简介都写上即可，首页会自动出现新卡片。

## 部署到 Cloudflare Pages

1. 把这个项目推到你自己的 GitHub 仓库
2. 登录 Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git
3. 选择这个仓库，构建设置填：
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. 部署完成后会给你一个 `xxx.pages.dev` 的免费域名，以后想绑定自己的域名再加，不影响现在使用

## 关于 AI Agent 协作开发

这个脚手架已经把整体结构和三语/动效的"骨架"搭好了，接下来适合用 AI agent（比如 Gemini Code Assist 或 Cline）继续做的事情：

- 把 `src/data/projects.ts` 里的占位项目换成你真实的项目，可以直接把项目描述丢给 agent 帮你写三语文案
- 把 Blogger 上的旧文章迁移过来：可以导出 Blogger 的 XML 备份，让 agent 写一个脚本批量转换成 `src/content/blog/` 下的 Markdown
- 细化动效：比如给 `ProjectCard` 加 hover 时的 GSAP 微交互，或者给语言切换加一个过渡动画
- "关于我" 页面目前还没做，可以让 agent 参考现有的 `pages/index.astro` 结构新建一个 `/about` 页面

打开这个文件夹后，直接跟 agent 描述你想改的地方就行，代码结构比较清晰，改动范围也容易定位。
