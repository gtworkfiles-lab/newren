import type { Locale } from '@/lib/routes'

export type SiteConfig = {
  brandName: string
  brandDescriptor: Record<Locale, string>
  defaultLocale: Locale
  locales: Locale[]
}

export const SITE_CONFIG: SiteConfig = {
  brandName: 'Ренесанс',
  brandDescriptor: {
    uk: 'Центр лікування залежностей та реабілітації',
    ru: 'Центр лечения зависимостей и реабилитации',
    en: 'Addiction treatment and rehabilitation center',
  },
  defaultLocale: 'uk',
  locales: ['uk', 'ru', 'en'],
}