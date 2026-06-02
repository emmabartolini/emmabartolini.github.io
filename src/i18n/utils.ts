import { LANGS, DEFAULT_LANG, type Lang } from './translations';

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if ((LANGS as readonly string[]).includes(maybeLang)) {
    return maybeLang as Lang;
  }
  return DEFAULT_LANG;
}

export function switchLang(currentPath: string, targetLang: Lang): string {
  const parts = currentPath.split('/').filter(Boolean);
  if (parts.length > 0 && (LANGS as readonly string[]).includes(parts[0])) {
    parts[0] = targetLang;
  } else {
    parts.unshift(targetLang);
  }
  return '/' + parts.join('/');
}

export function staticLangPaths() {
  return LANGS.map((lang) => ({ params: { lang } }));
}

export const categoryPath: Record<string, string> = {
  design: 'design',
  writing: 'writing',
  education: 'education',
};
