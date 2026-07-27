export interface Project {
  id: string;
  year: string;
  link?: string;
  repo?: string;
  title: Record<'zh' | 'ja' | 'en', string>;
  description: Record<'zh' | 'ja' | 'en', string>;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 'this-site',
    year: '2026',
    repo: 'https://github.com/BrighterSummerDay/xiaotouming-site',
    title: {
      zh: '个人网站2.0(这个网站)',
      ja: '個人ウェブサイト2.0(このサイト)',
      en: 'Personal website 2.0(This very site)',
    },
    description: {
      zh: '用 Astro + Vue 从零搭建，三语、动效、博客一体，我的第一个"正经"项目。',
      ja: 'Astro + Vue でゼロから構築。多言語対応・アニメーション・ブログを統合した最初の本格プロジェクト。',
      en: 'Built from scratch with Astro + Vue — trilingual, animated, with an integrated blog. My first serious project.',
    },
    tags: ['Astro', 'Vue', 'GSAP'],
  },
  {
    id: 'placeholder-1',
    year: '2025',
    repo: 'https://github.com/BrighterSummerDay/Xiaotouming',
    link: 'https://brightersummerday.github.io/Xiaotouming/',
    title: {
      zh: '个人网站1.0',
      ja: '個人ウェブサイト1.0',
      en: 'Personal website 1.0',
    },
    description: {
      zh: '我的个人网站1.0版本，使用了免费的网站模板，Github上部署，完全静态',
      ja: '個人ウェブサイト1.0、無料のウェブサイトテンプレートを使用、Githubにデプロイ、完全静的なサイト',
      en: 'My personal website version 1.0, used a free website template, deployed on Github, completely static',
    },
    tags: ['Html', 'GitHub'],
  },
  {
    id: 'placeholder-2',
    year: '2025',
    repo: 'https://github.com/BrighterSummerDay/vlogverse',
    link: 'https://vlogverse-puce.vercel.app/youtube',
    title: {
      zh: 'vlogverse v0.5',
      ja: 'vlogverse v0.5',
      en: 'vlogverse v0.5',
    },
    description: {
      zh: '使用 Nextjs 搭建的视频聚合网站，还在开发中。',
      ja: 'Next.jsで構築した動画集約サイトです。現在開発中です。',
      en: 'A video aggregation website built with Next.js. Currently in development.',
    },
    tags: ['Nextjs', 'Supabase', 'Vercel'],
  },
];
