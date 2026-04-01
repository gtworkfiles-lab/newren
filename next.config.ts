import type { NextConfig } from "next"
import { LOCALES, ROUTE_MAP, type RouteKey } from "./src/lib/routes"

const IMPLEMENTED_ROUTE_KEYS: RouteKey[] = [
  "alcohol",
  "drugs",
  "gambling",
  "family",
  "rehab",
  "about",
  "accommodation",
  "reviews",
  "faq",
  "contacts",
  "blog",
  "privacy",
  "terms",
]

const localizedRewrites = LOCALES.flatMap((locale) =>
  IMPLEMENTED_ROUTE_KEYS.flatMap((routeKey) => {
    const sourceSlug = ROUTE_MAP[locale][routeKey]
    const destinationSlug = ROUTE_MAP.uk[routeKey]

    if (locale === "uk" || sourceSlug === destinationSlug) {
      return []
    }

    return [
      {
        source: `/${locale}/${sourceSlug}`,
        destination: `/${locale}/${destinationSlug}`,
      },
    ]
  })
)

const nextConfig: NextConfig = {
  reactCompiler: true,
  redirects: async () => [
    {
      source: '/ua/:path*',
      destination: '/uk/:path*',
      permanent: true,
    },
  ],
  rewrites: async () => localizedRewrites,
}

export default nextConfig
