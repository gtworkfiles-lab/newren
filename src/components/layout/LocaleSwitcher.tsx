import Link from 'next/link'
import { LOCALES, type Locale, type RouteKey } from '@/lib/routes'
import { getLocalizedPath } from '@/lib/slug-map'

type LocaleSwitcherProps = {
  currentLocale: Locale
  routeKey: RouteKey
}

export default function LocaleSwitcher({
  currentLocale,
  routeKey,
}: LocaleSwitcherProps) {
  return (
    <div className="locale-switcher" aria-label="Language switcher">
      {LOCALES.map((locale) => {
        const isActive = locale === currentLocale

        return (
          <Link
            key={locale}
            href={getLocalizedPath(locale, routeKey)}
            className={`locale-switcher__link ${
              isActive ? 'locale-switcher__link--active' : ''
            }`.trim()}
          >
            {locale.toUpperCase()}
          </Link>
        )
      })}
    </div>
  )
}