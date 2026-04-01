import Link from 'next/link'
import Container from '@/components/ui/Container'
import MainNav from '@/components/layout/MainNav'
import LocaleSwitcher from '@/components/layout/LocaleSwitcher'
import { CONTACTS_BY_LOCALE } from '@/data/contacts'
import type { Locale, RouteKey } from '@/lib/routes'
import { getLocalizedPath } from '@/lib/slug-map'

type HeaderProps = {
  locale: Locale
  routeKey: RouteKey
}

export default function Header({ locale, routeKey }: HeaderProps) {
  const contacts = CONTACTS_BY_LOCALE[locale]
  const primaryPhone = contacts.phones[0]

  return (
    <header className="site-header">
      <Container>
        <div className="site-header__inner">
          <Link href={getLocalizedPath(locale, 'home')} className="site-brand">
            <span className="site-brand__name">Ренесанс</span>
            <span className="site-brand__text">
              Центр лікування залежностей та реабілітації
            </span>
          </Link>

          <MainNav locale={locale} />

          <div className="site-header__right">
            {primaryPhone ? (
              <a className="site-phone" href={primaryPhone.href}>
                {primaryPhone.value}
              </a>
            ) : null}

            <LocaleSwitcher currentLocale={locale} routeKey={routeKey} />
          </div>
        </div>
      </Container>
    </header>
  )
}