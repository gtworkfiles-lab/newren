import {
  CORE_ROUTE_KEYS,
  LEGAL_ROUTE_KEYS,
  LOCALES,
  PHASE_2_ROUTE_KEYS,
  ROUTE_MAP,
  getAlternates,
  getPath,
  type Locale,
  type RouteKey,
} from '@/lib/routes'

export type RouteGroup = 'core' | 'phase2' | 'legal'

export type RouteDefinition = {
  key: RouteKey
  group: RouteGroup
  slugs: Record<Locale, string>
  paths: Record<Locale, string>
  alternates: Record<Locale, string>
}

export const ROUTE_DEFINITIONS: Record<RouteKey, RouteDefinition> = {
  home: buildRouteDefinition('home'),
  alcohol: buildRouteDefinition('alcohol'),
  drugs: buildRouteDefinition('drugs'),
  gambling: buildRouteDefinition('gambling'),
  family: buildRouteDefinition('family'),
  rehab: buildRouteDefinition('rehab'),
  about: buildRouteDefinition('about'),
  accommodation: buildRouteDefinition('accommodation'),
  reviews: buildRouteDefinition('reviews'),
  faq: buildRouteDefinition('faq'),
  contacts: buildRouteDefinition('contacts'),
  blog: buildRouteDefinition('blog'),
  privacy: buildRouteDefinition('privacy'),
  terms: buildRouteDefinition('terms'),
  disclaimer: buildRouteDefinition('disclaimer'),
}

function buildRouteDefinition(routeKey: RouteKey): RouteDefinition {
  return {
    key: routeKey,
    group: getRouteGroup(routeKey),
    slugs: {
      uk: ROUTE_MAP.uk[routeKey],
      ru: ROUTE_MAP.ru[routeKey],
      en: ROUTE_MAP.en[routeKey],
    },
    paths: {
      uk: getPath('uk', routeKey),
      ru: getPath('ru', routeKey),
      en: getPath('en', routeKey),
    },
    alternates: getAlternates(routeKey),
  }
}

function getRouteGroup(routeKey: RouteKey): RouteGroup {
  if (CORE_ROUTE_KEYS.includes(routeKey)) {
    return 'core'
  }

  if (PHASE_2_ROUTE_KEYS.includes(routeKey)) {
    return 'phase2'
  }

  if (LEGAL_ROUTE_KEYS.includes(routeKey)) {
    return 'legal'
  }

  throw new Error(`Unknown route group for route key: ${routeKey}`)
}

export function getRouteDefinition(routeKey: RouteKey): RouteDefinition {
  return ROUTE_DEFINITIONS[routeKey]
}

export function getAllRouteDefinitions(): RouteDefinition[] {
  return Object.values(ROUTE_DEFINITIONS)
}

export function getRouteDefinitionsByGroup(group: RouteGroup): RouteDefinition[] {
  return getAllRouteDefinitions().filter((route) => route.group === group)
}

export function getLocalizedPath(locale: Locale, routeKey: RouteKey): string {
  return ROUTE_DEFINITIONS[routeKey].paths[locale]
}

export function getLocalizedSlug(locale: Locale, routeKey: RouteKey): string {
  return ROUTE_DEFINITIONS[routeKey].slugs[locale]
}

export function getLocaleAlternates(routeKey: RouteKey): Record<Locale, string> {
  return ROUTE_DEFINITIONS[routeKey].alternates
}

export function getAllLocales(): Locale[] {
  return [...LOCALES]
}
