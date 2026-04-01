import PageSection from '@/components/sections/shared/PageSection'
import { CONTACTS_BY_LOCALE } from '@/data/contacts'
import type { Locale } from '@/lib/routes'

type ContactSectionProps = {
  locale: Locale
  title: string
}

export default function ContactSection({ locale, title }: ContactSectionProps) {
  const contacts = CONTACTS_BY_LOCALE[locale]

  const sectionLabels = {
  uk: {
    phones: 'Телефони',
    messengers: 'Месенджери',
    email: 'Email',
    address: 'Адреса',
  },
  ru: {
    phones: 'Телефоны',
    messengers: 'Мессенджеры',
    email: 'Email',
    address: 'Адрес',
  },
  en: {
    phones: 'Phones',
    messengers: 'Messengers',
    email: 'Email',
    address: 'Address',
  },
}

  const labels = sectionLabels[locale]

  return (
    <PageSection title={title}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px',
        }}
      >
        <div>
          <h3 style={{ marginTop: 0, marginBottom: '12px' }}>{labels.phones}</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {contacts.phones.map((phone) => (
              <a
                key={phone.type + phone.value}
                href={phone.href}
                style={{
                  color: 'var(--color-primary)',
                  textDecoration: 'none',
                  fontWeight: phone.isPrimary ? 'bold' : 'normal',
                }}
              >
                {phone.value}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 style={{ marginTop: 0, marginBottom: '12px' }}>{labels.messengers}</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {contacts.messengers.map((messenger) => (
              <a
                key={messenger.type}
                href={messenger.href}
                style={{
                  color: 'var(--color-primary)',
                  textDecoration: 'none',
                  fontWeight: messenger.isPrimary ? 'bold' : 'normal',
                }}
              >
                {messenger.label}
              </a>
            ))}
          </div>
        </div>

        {contacts.email && (
          <div>
            <h3 style={{ marginTop: 0, marginBottom: '12px' }}>{labels.email}</h3>
            <a
              href={contacts.email.href}
              style={{ color: 'var(--color-primary)', textDecoration: 'none' }}
            >
              {contacts.email.value}
            </a>
          </div>
        )}

        <div>
          <h3 style={{ marginTop: 0, marginBottom: '12px' }}>{labels.address}</h3>
          <p style={{ margin: 0, lineHeight: 1.6 }}>{contacts.address}</p>
          {contacts.locationNote && (
            <p style={{ margin: '8px 0 0 0', fontSize: '14px', color: 'var(--color-text-secondary)' }}>
              {contacts.locationNote}
            </p>
          )}
        </div>
      </div>
    </PageSection>
  )
}