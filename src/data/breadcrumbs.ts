import type { Locale, RouteKey } from '@/lib/routes'
import { NAVIGATION_LABELS } from '@/data/navigation'
import { getLocalizedPath } from '@/lib/slug-map'

export type BreadcrumbItem = {
  label: string
  href: string
}

export function buildBreadcrumbs(
  locale: Locale,
  routeKey: RouteKey
): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [
    {
      label: NAVIGATION_LABELS.home[locale],
      href: getLocalizedPath(locale, 'home'),
    },
  ]

  if (routeKey === 'home') {
    return items
  }

  items.push({
    label: NAVIGATION_LABELS[routeKey][locale],
    href: getLocalizedPath(locale, routeKey),
  })

  return items
}