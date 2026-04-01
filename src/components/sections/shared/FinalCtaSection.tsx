import Container from '@/components/ui/Container'
import { CONTACTS_BY_LOCALE } from '@/data/contacts'
import type { Locale } from '@/lib/routes'

type FinalCtaSectionProps = {
  locale: Locale
  title: string
  text: string
}

export default function FinalCtaSection({
  locale,
  title,
  text,
}: FinalCtaSectionProps) {
  const contacts = CONTACTS_BY_LOCALE[locale]
  const primaryPhone = contacts.phones[0]

  return (
    <section style={{ paddingTop: '40px', paddingBottom: '56px' }}>
      <Container>
        <div
          style={{
            border: '1px solid #e5e7eb',
            padding: '24px',
            borderRadius: '12px',
          }}
        >
          <h2 style={{ marginTop: 0, marginBottom: '12px' }}>{title}</h2>
          <p style={{ marginTop: 0, marginBottom: '16px', lineHeight: 1.6 }}>
            {text}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {primaryPhone ? <a href={primaryPhone.href}>Подзвонити</a> : null}

            {contacts.messengers.map((messenger) => (
              <a key={messenger.type} href={messenger.href}>
                {messenger.label}
              </a>
            ))}

            <a href="#">Передзвоніть мені</a>
          </div>
        </div>
      </Container>
    </section>
  )
}