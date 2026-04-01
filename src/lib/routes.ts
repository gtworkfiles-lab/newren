export type Locale = 'uk' | 'ru' | 'en'

export type RouteKey =
  | 'home'
  | 'alcohol'
  | 'drugs'
  | 'gambling'
  | 'family'
  | 'rehab'
  | 'about'
  | 'accommodation'
  | 'reviews'
  | 'faq'
  | 'contacts'
  | 'blog'
  | 'privacy'
  | 'terms'
  | 'disclaimer'

export const LOCALES: Locale[] = ['uk', 'ru', 'en']

export const DEFAULT_LOCALE: Locale = 'uk'

export const ROUTE_MAP: Record<Locale, Record<RouteKey, string>> = {
  uk: {
    home: '',
    alcohol: 'likuvannya-alkogolizmu',
    drugs: 'likuvannya-narkomanii',
    gambling: 'likuvannya-ludomanii',
    family: 'dopomoga-rodyni',
    rehab: 'reabilitaciya',
    about: 'pro-centr',
    accommodation: 'umovy-prozhivannya',
    reviews: 'vidguky',
    faq: 'faq',
    contacts: 'kontakty',
    blog: 'blog',
    privacy: 'privacy-policy',
    terms: 'terms-of-use',
    disclaimer: 'disclaimer',
  },

  ru: {
    home: '',
    alcohol: 'lechenie-alkogolizma',
    drugs: 'lechenie-narkomanii',
    gambling: 'lechenie-ludomanii',
    family: 'pomosh-rodnym',
    rehab: 'reabilitaciya',
    about: 'o-centre',
    accommodation: 'usloviya-prozhivaniya',
    reviews: 'otzyvy',
    faq: 'faq',
    contacts: 'kontakty',
    blog: 'blog',
    privacy: 'privacy-policy',
    terms: 'terms-of-use',
    disclaimer: 'disclaimer',
  },

  en: {
    home: '',
    alcohol: 'alcohol-addiction-treatment',
    drugs: 'drug-addiction-treatment',
    gambling: 'gambling-addiction-treatment',
    family: 'family-support',
    rehab: 'rehabilitation',
    about: 'about-center',
    accommodation: 'accommodation',
    reviews: 'reviews',
    faq: 'faq',
    contacts: 'contacts',
    blog: 'blog',
    privacy: 'privacy-policy',
    terms: 'terms-of-use',
    disclaimer: 'disclaimer',
  },
} as const

export const CORE_ROUTE_KEYS: RouteKey[] = [
  'home',
  'alcohol',
  'drugs',
  'gambling',
  'family',
  'rehab',
  'about',
  'accommodation',
  'reviews',
  'faq',
  'contacts',
]

export const PHASE_2_ROUTE_KEYS: RouteKey[] = ['blog']

export const LEGAL_ROUTE_KEYS: RouteKey[] = [
  'privacy',
  'terms',
  'disclaimer',
]

export function isValidLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale)
}

export function getRouteSlug(locale: Locale, routeKey: RouteKey): string {
  return ROUTE_MAP[locale][routeKey]
}

export function getPath(locale: Locale, routeKey: RouteKey): string {
  const slug = getRouteSlug(locale, routeKey)
  return slug ? `/${locale}/${slug}` : `/${locale}`
}

export function getAlternates(routeKey: RouteKey): Record<Locale, string> {
  return {
    uk: getPath('uk', routeKey),
    ru: getPath('ru', routeKey),
    en: getPath('en', routeKey),
  }
}

export function getBlogPostPath(locale: Locale, slug: string): string {
  return `/${locale}/${ROUTE_MAP[locale].blog}/${slug}`
}

export function findRouteKeyBySlug(
  locale: Locale,
  slug: string
): RouteKey | null {
  const normalizedSlug = slug.replace(/^\/+|\/+$/g, '')

  for (const [routeKey, routeSlug] of Object.entries(ROUTE_MAP[locale])) {
    if (routeSlug === normalizedSlug) {
      return routeKey as RouteKey
    }
  }

  return null
}