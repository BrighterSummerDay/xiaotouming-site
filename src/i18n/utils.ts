import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang as Lang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function getLocalizedPath(currentPath: string, currentLang: Lang, targetLang: Lang): string {
  let cleanPath = currentPath;
  for (const l of Object.keys(ui)) {
    if (cleanPath === `/${l}` || cleanPath.startsWith(`/${l}/`)) {
      cleanPath = cleanPath.slice(l.length + 1) || '/';
      break;
    }
  }

  if (cleanPath === '/') {
    return `/${targetLang}`;
  }

  return `/${targetLang}${cleanPath.startsWith('/') ? cleanPath : '/' + cleanPath}`;
}
