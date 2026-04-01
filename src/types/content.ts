import type { Locale, RouteKey } from '@/lib/routes'

export type ContactChannelType =
  | 'phone'
  | 'viber'
  | 'whatsapp'
  | 'telegram'
  | 'email'

export type ContactChannel = {
  type: ContactChannelType
  label: string
  value: string
  href: string
  note?: string
  isPrimary?: boolean
}

export type ContactData = {
  phones: ContactChannel[]
  messengers: ContactChannel[]
  email?: ContactChannel
  address: string
  mapUrl: string
  locationNote?: string
}

export type FaqItem = {
  question: string
  answer: string
}

export type FaqGroup = {
  id: string
  title: string
  items: FaqItem[]
}

export type ReviewType = 'family' | 'recovery'

export type ReviewItem = {
  id: string
  locale: Locale
  type: ReviewType
  name?: string
  relation?: string
  text: string
  status: 'draft' | 'published'
  order: number
}

export type GalleryCategory = 'accommodation' | 'center' | 'other'

export type GalleryImage = {
  id: string
  locale: Locale
  category: GalleryCategory
  src: string
  alt: string
  caption?: string
  order: number
  isPublished: boolean
}

export type RelatedArticle = {
  id: string
  locale: Locale
  title: string
  slug: string
  excerpt?: string
}

export type SeoPageMetadata = {
  title: string
  description: string
  routeKey: RouteKey
  ogImage?: string
  noIndex?: boolean
}

export type BasicHeroBlock = {
  title: string
  subtitle: string
  trustItems: string[]
}

export type BasicTextBlock = {
  sectionTitle: string
  sectionText: string
}

export type BasicItemsBlock = {
  sectionTitle: string
  items: string[]
}