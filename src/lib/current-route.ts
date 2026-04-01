import { findRouteKeyBySlug } from '@/lib/routes'
import type { Locale, RouteKey } from '@/lib/routes'

export function resolveCurrentRouteKey(
  locale: Locale,
  pathname: string
): RouteKey {
  const segments = pathname.split('/').filter(Boolean)
  const localizedSegments = segments.slice(1)

  if (localizedSegments.length === 0) {
    return 'home'
  }

  const [slug] = localizedSegments

  const routeKey = findRouteKeyBySlug(locale, slug)

  return routeKey ?? 'home'
}
