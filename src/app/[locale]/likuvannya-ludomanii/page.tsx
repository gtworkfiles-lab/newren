import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/templates/ServicePageTemplate'
import { GAMBLING_SERVICE_CONTENT } from '@/data/services'
import { buildPageMetadata } from '@/seo/metadata'
import { isValidLocale, type Locale } from '@/lib/routes'

type GamblingPageProps = {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({
  params,
}: GamblingPageProps): Promise<Metadata> {
  const { locale } = await params

  if (!isValidLocale(locale)) {
    return {}
  }

  const currentLocale: Locale = locale

  const titleByLocale: Record<Locale, string> = {
    uk: 'Лікування лудоманії',
    ru: 'Лечение лудомании',
    en: 'Gambling addiction treatment',
  }

  const descriptionByLocale: Record<Locale, string> = {
    uk: 'Лікування ігрової залежності, системна допомога та підтримка родини в центрі Ренесанс.',
    ru: 'Лечение игровой зависимости, системная помощь и поддержка семьи в центре Ренесанс.',
    en: 'Gambling addiction treatment, structured support and family guidance at Renaissance center.',
  }

  return buildPageMetadata({
    locale: currentLocale,
    routeKey: 'gambling',
    title: titleByLocale[currentLocale],
    description: descriptionByLocale[currentLocale],
  })
}

export default async function GamblingPage({ params }: GamblingPageProps) {
  const { locale } = await params

  if (!isValidLocale(locale)) {
    notFound()
  }

  const currentLocale: Locale = locale
  const content = GAMBLING_SERVICE_CONTENT[currentLocale]

  return <ServicePageTemplate locale={currentLocale} routeKey="gambling" {...content} />
}