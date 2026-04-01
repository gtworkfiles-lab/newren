import Link from 'next/link'
import PageSection from '@/components/sections/shared/PageSection'
import type { Locale, RouteKey } from '@/lib/routes'
import { NAVIGATION_LABELS } from '@/data/navigation'
import { getLocalizedPath } from '@/lib/slug-map'

type InternalLinksSectionProps = {
  locale: Locale
  title: string
  routeKeys: RouteKey[]
}

export default function InternalLinksSection({
  locale,
  title,
  routeKeys,
}: InternalLinksSectionProps) {
  return (
    <PageSection title={title}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '12px',
        }}
      >
        {routeKeys.map((routeKey) => (
          <Link
            key={routeKey}
            href={getLocalizedPath(locale, routeKey)}
            style={{
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              padding: '16px',
              display: 'block',
            }}
          >
            {NAVIGATION_LABELS[routeKey][locale]}
          </Link>
        ))}
      </div>
    </PageSection>
  )
}