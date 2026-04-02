import { getAllRouteDefinitions } from '@/lib/slug-map'
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

  const routeKey = getAllRouteDefinitions().find((routeDefinition) => {
    return (
      routeDefinition.slugs[locale] === slug ||
      Object.values(routeDefinition.slugs).includes(slug)
    )
  })?.key

  return routeKey ?? 'home'
}
