import { findRouteKeyBySlug } from '@/lib/routes'
import type { Locale, RouteKey } from '@/lib/routes'

export function resolveCurrentRouteKey(
  locale: Locale,
  pathname: string
): RouteKey {
  const segments = pathname.split('/').filter(Boolean)

  const slug = segments.slice(1).join('/')

  const routeKey = findRouteKeyBySlug(locale, slug)

  return routeKey ?? 'home'
}