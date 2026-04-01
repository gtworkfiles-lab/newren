import Link from 'next/link'
import { MAIN_NAV_ITEMS } from '@/data/navigation'
import type { Locale } from '@/lib/routes'

type MainNavProps = {
  locale: Locale
}

export default function MainNav({ locale }: MainNavProps) {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      {MAIN_NAV_ITEMS.map((item) => (
        <Link key={item.key} href={item.href[locale]} className="site-nav__link">
          {item.label[locale]}
        </Link>
      ))}
    </nav>
  )
}