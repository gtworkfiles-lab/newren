import type { Locale } from '@/lib/routes'
import type { ContactData } from '@/types/content'

export const CONTACTS_BY_LOCALE: Record<Locale, ContactData> = {
  uk: {
    phones: [
      {
        type: 'phone',
        label: 'Телефон',
        value: '+38 (000) 000-00-00',
        href: 'tel:+380000000000',
        isPrimary: true,
      },
    ],
    messengers: [
      {
        type: 'viber',
        label: 'Viber',
        value: 'Viber',
        href: '#',
        isPrimary: true,
      },
      {
        type: 'whatsapp',
        label: 'WhatsApp',
        value: 'WhatsApp',
        href: '#',
        isPrimary: true,
      },
      {
        type: 'telegram',
        label: 'Telegram',
        value: 'Telegram',
        href: '#',
        isPrimary: true,
      },
    ],
    email: {
      type: 'email',
      label: 'Email',
      value: 'info@example.com',
      href: 'mailto:info@example.com',
    },
    address: 'Чернівці, Україна',
    mapUrl: '#',
    locationNote: 'Деталі адреси та формат приїзду уточнюються під час консультації.',
  },

  ru: {
    phones: [
      {
        type: 'phone',
        label: 'Телефон',
        value: '+38 (000) 000-00-00',
        href: 'tel:+380000000000',
        isPrimary: true,
      },
    ],
    messengers: [
      {
        type: 'viber',
        label: 'Viber',
        value: 'Viber',
        href: '#',
        isPrimary: true,
      },
      {
        type: 'whatsapp',
        label: 'WhatsApp',
        value: 'WhatsApp',
        href: '#',
        isPrimary: true,
      },
      {
        type: 'telegram',
        label: 'Telegram',
        value: 'Telegram',
        href: '#',
        isPrimary: true,
      },
    ],
    email: {
      type: 'email',
      label: 'Email',
      value: 'info@example.com',
      href: 'mailto:info@example.com',
    },
    address: 'Черновцы, Украина',
    mapUrl: '#',
    locationNote: 'Детали адреса и формат приезда уточняются во время консультации.',
  },

  en: {
    phones: [
      {
        type: 'phone',
        label: 'Phone',
        value: '+38 (000) 000-00-00',
        href: 'tel:+380000000000',
        isPrimary: true,
      },
    ],
    messengers: [
      {
        type: 'viber',
        label: 'Viber',
        value: 'Viber',
        href: '#',
        isPrimary: true,
      },
      {
        type: 'whatsapp',
        label: 'WhatsApp',
        value: 'WhatsApp',
        href: '#',
        isPrimary: true,
      },
      {
        type: 'telegram',
        label: 'Telegram',
        value: 'Telegram',
        href: '#',
        isPrimary: true,
      },
    ],
    email: {
      type: 'email',
      label: 'Email',
      value: 'info@example.com',
      href: 'mailto:info@example.com',
    },
    address: 'Chernivtsi, Ukraine',
    mapUrl: '#',
    locationNote: 'Address details and visit format are clarified during consultation.',
  },
}