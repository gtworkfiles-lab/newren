import Link from 'next/link'
import Container from '@/components/ui/Container'
import { buildBreadcrumbs } from '@/data/breadcrumbs'
import type { Locale, RouteKey } from '@/lib/routes'

type BreadcrumbsProps = {
  locale: Locale
  routeKey: RouteKey
}

export default function Breadcrumbs({
  locale,
  routeKey,
}: BreadcrumbsProps) {
  const items = buildBreadcrumbs(locale, routeKey)

  if (items.length <= 1) {
    return null
  }

  return (
    <div style={{ borderBottom: '1px solid #f1f5f9' }}>
      <Container>
        <nav
          aria-label="Breadcrumbs"
          style={{
            paddingTop: '14px',
            paddingBottom: '14px',
            fontSize: '14px',
            color: '#64748b',
          }}
        >
          <ol
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
          >
            {items.map((item, index) => {
              const isLast = index === items.length - 1

              return (
                <li
                  key={item.href}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  {isLast ? (
                    <span style={{ color: '#111827', fontWeight: 500 }}>
                      {item.label}
                    </span>
                  ) : (
                    <Link href={item.href}>{item.label}</Link>
                  )}

                  {!isLast ? <span>/</span> : null}
                </li>
              )
            })}
          </ol>
        </nav>
      </Container>
    </div>
  )
}