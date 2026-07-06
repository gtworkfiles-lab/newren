import Link from 'next/link'
import Container from '@/components/ui/Container'
import { CONTACTS_BY_LOCALE } from '@/data/contacts'
import {
  BRAND_LABELS,
  FOOTER_CENTER_ITEMS,
  FOOTER_HELP_ITEMS,
  LEGAL_NAV_ITEMS,
  NAVIGATION_LABELS,
} from '@/data/navigation'
import type { Locale } from '@/lib/routes'
import { getLocalizedPath } from '@/lib/slug-map'

type FooterProps = {
  locale: Locale
}

const FOOTER_COPY: Record<
  Locale,
  {
    description: string
    helpTitle: string
    copyrightLabel: string
  }
> = {
  uk: {
    description:
      'Центр лікування залежностей та реабілітації. Анонімна підтримка для людей із залежністю та їхніх родин.',
    helpTitle: 'Напрями допомоги',
    copyrightLabel: '© Ренесанс',
  },
  ru: {
    description:
      'Центр лечения зависимостей и реабилитации. Анонимная поддержка для людей с зависимостью и их семей.',
    helpTitle: 'Направления помощи',
    copyrightLabel: '© Ренессанс',
  },
  en: {
    description:
      'Addiction treatment and rehabilitation center. Anonymous support for people facing addiction and for their families.',
    helpTitle: 'Treatment Options',
    copyrightLabel: '© Renaissance',
  },
}

export default function Footer({ locale }: FooterProps) {
  const contacts = CONTACTS_BY_LOCALE[locale]
  const brandLabels = BRAND_LABELS[locale]
  const footerCopy = FOOTER_COPY[locale]

  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__inner">
          <div>
            <h2 className="site-footer__title">{brandLabels.name}</h2>
            <p className="site-footer__text">{footerCopy.description}</p>
          </div>

          <div>
            <h2 className="site-footer__title">{footerCopy.helpTitle}</h2>
            <nav className="site-footer__nav">
              {FOOTER_HELP_ITEMS.map((item) => (
                <Link key={item.key} href={item.href[locale]} className="site-footer__link">
                  {item.label[locale]}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="site-footer__title">{NAVIGATION_LABELS.about[locale]}</h2>
            <nav className="site-footer__nav">
              {FOOTER_CENTER_ITEMS.map((item) => (
                <Link key={item.key} href={item.href[locale]} className="site-footer__link">
                  {item.label[locale]}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="site-footer__title">{NAVIGATION_LABELS.contacts[locale]}</h2>
            <div className="site-footer__nav">
              {contacts.phones.map((phone) => (
                <a key={phone.type + phone.value} className="site-footer__link" href={phone.href}>
                  {phone.value}
                </a>
              ))}

              {contacts.messengers.map((messenger) => (
                <a
                  key={messenger.type}
                  className="site-footer__link"
                  href={messenger.href}
                >
                  {messenger.label}
                </a>
              ))}

              {contacts.email ? (
                <a className="site-footer__link" href={contacts.email.href}>
                  {contacts.email.value}
                </a>
              ) : null}

              <Link
                href={getLocalizedPath(locale, 'contacts')}
                className="site-footer__link"
              >
                {NAVIGATION_LABELS.contacts[locale]}
              </Link>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span className="site-footer__text">{footerCopy.copyrightLabel}</span>

          <div className="site-footer__legal">
            {LEGAL_NAV_ITEMS.map((item) => (
              <Link
                key={item.key}
                href={item.href[locale]}
                className="site-footer__legal-link"
              >
                {item.label[locale]}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}