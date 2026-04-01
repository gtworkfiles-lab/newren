import Container from '@/components/ui/Container'
import { CONTACTS_BY_LOCALE } from '@/data/contacts'
import type { Locale } from '@/lib/routes'

type ServiceHeroProps = {
  locale: Locale
  title: string
  subtitle: string
}

export default function ServiceHero({
  locale,
  title,
  subtitle,
}: ServiceHeroProps) {
  const contacts = CONTACTS_BY_LOCALE[locale]
  const primaryPhone = contacts.phones[0]

  return (
    <section style={{ paddingTop: '48px', paddingBottom: '32px' }}>
      <Container>
        <div style={{ maxWidth: '860px' }}>
          <p
            style={{
              marginTop: 0,
              marginBottom: '12px',
              color: '#4b5563',
              fontSize: '14px',
            }}
          >
            Locale: {locale}
          </p>

          <h1 style={{ marginTop: 0, marginBottom: '16px' }}>{title}</h1>

          <p
            style={{
              marginTop: 0,
              marginBottom: '20px',
              fontSize: '18px',
              lineHeight: 1.6,
              color: '#374151',
            }}
          >
            {subtitle}
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            {primaryPhone ? <a href={primaryPhone.href}>Подзвонити</a> : null}

            {contacts.messengers.map((messenger) => (
              <a key={messenger.type} href={messenger.href}>
                {messenger.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}