export const languages = {
  zh: '中文',
  ja: '日本語',
  en: 'English',
};

export const defaultLang = 'zh';

export const ui = {
  zh: {
    'nav.work': '项目',
    'nav.blog': '博客',
    'nav.about': '关于',
    'hero.eyebrow': '$ whoami',
    'hero.title': '你好，我是小透铭',
    'hero.subtitle': '喜欢写代码的东京独立开发者，正在把这个网站做成我的第一个成熟项目。',
    'work.title': '项目',
    'work.subtitle': '目前都还是小项目，但每一个都有认真做。',
    'work.website': 'Website →',
    'work.github': 'GitHub →',
    'blog.title': '博客',
    'blog.subtitle': '记录学习和踩过的坑。',
    'blog.readMore': '阅读全文 →',
    'blog.back': '← 返回博客列表',
    'footer.note': '使用 Astro 开发，部署在 Cloudflare Pages。',
  },
  ja: {
    'nav.work': 'プロジェクト',
    'nav.blog': 'ブログ',
    'nav.about': '概要',
    'hero.eyebrow': '$ whoami',
    'hero.title': 'こんにちは、小透銘です',
    'hero.subtitle': '東京在住のプログラマー。このサイトが最初の本格的な個人プロジェクトです。',
    'work.title': 'プロジェクト',
    'work.subtitle': 'まだ小さなものばかりですが、一つひとつ丁寧に作っています。',
    'work.website': 'Website →',
    'work.github': 'GitHub →',
    'blog.title': 'ブログ',
    'blog.subtitle': '学んだことや、ハマったことを記録しています。',
    'blog.readMore': '続きを読む →',
    'blog.back': '← ブログ一覧に戻る',
    'footer.note': 'Astro で開発、Cloudflare Pages にデプロイ。',
  },
  en: {
    'nav.work': 'Work',
    'nav.blog': 'Blog',
    'nav.about': 'About',
    'hero.eyebrow': '$ whoami',
    'hero.title': "Hi, I'm Xiaotouming",
    'hero.subtitle': 'A programmer based in Tokyo. This site is my first serious personal project.',
    'work.title': 'Work',
    'work.subtitle': "Small projects for now, but each one built with care.",
    'work.website': 'Website →',
    'work.github': 'GitHub →',
    'blog.title': 'Blog',
    'blog.subtitle': 'Notes on what I learn and what breaks.',
    'blog.readMore': 'Read more →',
    'blog.back': '← Back to blog',
    'footer.note': 'Developed with Astro, deployed on Cloudflare Pages.',
  },
} as const;

export type Lang = keyof typeof ui;
