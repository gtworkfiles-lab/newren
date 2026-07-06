import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/data/site-config'
import { getLocaleAlternates, getLocalizedPath } from '@/lib/slug-map'
import type { Locale, RouteKey } from '@/lib/routes'

type BuildPageMetadataParams = {
  locale: Locale
  routeKey: RouteKey
  title: string
  description: string
  noIndex?: boolean
}

export const SITE_URL = 'https://reabilitacia.cv.ua'

export function buildCanonicalUrl(locale: Locale, routeKey: RouteKey): string {
  const path = getLocalizedPath(locale, routeKey)
  return `${SITE_URL}${path}`
}

export function buildPageMetadata({
  locale,
  routeKey,
  title,
  description,
  noIndex = false,
}: BuildPageMetadataParams): Metadata {
  const alternatesMap = getLocaleAlternates(routeKey)
  const canonicalUrl = buildCanonicalUrl(locale, routeKey)

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        uk: alternatesMap.uk,
        ru: alternatesMap.ru,
        en: alternatesMap.en,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_CONFIG.brandName,
      locale,
      type: 'website',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
  }
}
