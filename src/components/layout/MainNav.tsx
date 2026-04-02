import Link from 'next/link'
import {
  MAIN_NAV_ITEMS,
  SERVICES_GROUP_LABEL,
  SERVICES_NAV_ITEMS,
} from '@/data/navigation'
import type { Locale } from '@/lib/routes'

type MainNavProps = {
  locale: Locale
}

export default function MainNav({ locale }: MainNavProps) {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      {MAIN_NAV_ITEMS.slice(0, 1).map((item) => (
        <Link key={item.key} href={item.href[locale]} className="site-nav__link">
          {item.label[locale]}
        </Link>
      ))}

      <details>
        <summary className="site-nav__link">{SERVICES_GROUP_LABEL[locale]}</summary>
        <div>
          {SERVICES_NAV_ITEMS.map((item) => (
            <Link key={item.key} href={item.href[locale]} className="site-nav__link">
              {item.label[locale]}
            </Link>
          ))}
        </div>
      </details>

      {MAIN_NAV_ITEMS.slice(1).map((item) => (
        <Link key={item.key} href={item.href[locale]} className="site-nav__link">
          {item.label[locale]}
        </Link>
      ))}
    </nav>
  )
}
