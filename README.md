# xiaotouming-site

用 Astro + Vue 搭建的个人网站：项目展示 + 博客，中/日/英三语对应，GSAP + View Transitions 做动效。

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
