import type { Locale, RouteKey } from '@/lib/routes'
import { getLocalizedPath } from '@/lib/slug-map'

export type NavigationLabelMap = Record<Locale, string>

export type NavigationItem = {
  key: RouteKey
  label: NavigationLabelMap
  href: Record<Locale, string>
}

export const MAIN_NAV_KEYS: RouteKey[] = [
  'home',
  'family',
  'about',
  'reviews',
  'faq',
  'contacts',
]

export const SERVICES_NAV_KEYS: RouteKey[] = [
  'alcohol',
  'drugs',
  'gambling',
  'rehab',
]

export const FOOTER_HELP_KEYS: RouteKey[] = [
  'alcohol',
  'drugs',
  'gambling',
  'rehab',
  'family',
]

export const FOOTER_CENTER_KEYS: RouteKey[] = [
  'about',
  'accommodation',
  'reviews',
  'faq',
]

export const LEGAL_NAV_KEYS: RouteKey[] = ['privacy', 'terms', 'disclaimer']

export const NAVIGATION_LABELS: Record<RouteKey, NavigationLabelMap> = {
  home: {
    uk: 'Головна',
    ru: 'Главная',
    en: 'Home',
  },
  alcohol: {
    uk: 'Лікування алкоголізму',
    ru: 'Лечение алкоголизма',
    en: 'Alcohol Treatment',
  },
  drugs: {
    uk: 'Лікування наркоманії',
    ru: 'Лечение наркомании',
    en: 'Drug Treatment',
  },
  gambling: {
    uk: 'Лікування лудоманії',
    ru: 'Лечение лудомании',
    en: 'Gambling Treatment',
  },
  family: {
    uk: 'Допомога родині',
    ru: 'Помощь семье',
    en: 'Family Support',
  },
  rehab: {
    uk: 'Реабілітація',
    ru: 'Реабилитация',
    en: 'Rehabilitation',
  },
  about: {
    uk: 'Про центр',
    ru: 'О центре',
    en: 'About Center',
  },
  accommodation: {
    uk: 'Умови перебування',
    ru: 'Условия пребывания',
    en: 'Accommodation',
  },
  reviews: {
    uk: 'Відгуки',
    ru: 'Отзывы',
    en: 'Reviews',
  },
  faq: {
    uk: 'FAQ',
    ru: 'FAQ',
    en: 'FAQ',
  },
  contacts: {
    uk: 'Контакти',
    ru: 'Контакты',
    en: 'Contacts',
  },
  blog: {
    uk: 'Блог',
    ru: 'Блог',
    en: 'Blog',
  },
  privacy: {
    uk: 'Політика конфіденційності',
    ru: 'Политика конфиденциальности',
    en: 'Privacy Policy',
  },
  terms: {
    uk: 'Умови використання',
    ru: 'Условия использования',
    en: 'Terms of Use',
  },
  disclaimer: {
    uk: 'Дисклеймер',
    ru: 'Дисклеймер',
    en: 'Disclaimer',
  },
}

export const BRAND_LABELS: Record<Locale, { name: string; text: string }> = {
  uk: {
    name: 'Ренесанс',
    text: 'Центр лікування залежностей та реабілітації',
  },
  ru: {
    name: 'Ренессанс',
    text: 'Центр лечения зависимостей и реабилитации',
  },
  en: {
    name: 'Renaissance',
    text: 'Addiction Treatment and Rehabilitation Center',
  },
}

export const SERVICES_GROUP_LABEL: NavigationLabelMap = {
  uk: 'Лікування',
  ru: 'Лечение',
  en: 'Treatment',
}

export function buildNavigationItem(key: RouteKey): NavigationItem {
  return {
    key,
    label: NAVIGATION_LABELS[key],
    href: {
      uk: getLocalizedPath('uk', key),
      ru: getLocalizedPath('ru', key),
      en: getLocalizedPath('en', key),
    },
  }
}

export function buildNavigationItems(keys: RouteKey[]): NavigationItem[] {
  return keys.map(buildNavigationItem)
}

export const MAIN_NAV_ITEMS = buildNavigationItems(MAIN_NAV_KEYS)

export const SERVICES_NAV_ITEMS = buildNavigationItems(SERVICES_NAV_KEYS)

export const FOOTER_HELP_ITEMS = buildNavigationItems(FOOTER_HELP_KEYS)

export const FOOTER_CENTER_ITEMS = buildNavigationItems(FOOTER_CENTER_KEYS)

export const LEGAL_NAV_ITEMS = buildNavigationItems(LEGAL_NAV_KEYS)
