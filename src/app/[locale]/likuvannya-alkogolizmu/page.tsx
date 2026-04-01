import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/templates/ServicePageTemplate'
import { ALCOHOL_SERVICE_CONTENT } from '@/data/services'
import { buildPageMetadata } from '@/seo/metadata'
import { isValidLocale, type Locale } from '@/lib/routes'

type AlcoholPageProps = {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({
  params,
}: AlcoholPageProps): Promise<Metadata> {
  const { locale } = await params

  if (!isValidLocale(locale)) {
    return {}
  }

  const currentLocale: Locale = locale

  const titleByLocale: Record<Locale, string> = {
    uk: 'Лікування алкоголізму',
    ru: 'Лечение алкоголизма',
    en: 'Alcohol addiction treatment',
  }

  const descriptionByLocale: Record<Locale, string> = {
    uk: 'Лікування алкогольної залежності, системна допомога та підтримка родини в центрі Ренесанс.',
    ru: 'Лечение алкогольной зависимости, системная помощь и поддержка семьи в центре Ренесанс.',
    en: 'Alcohol addiction treatment, structured support and family guidance at Renaissance center.',
  }

  return buildPageMetadata({
    locale: currentLocale,
    routeKey: 'alcohol',
    title: titleByLocale[currentLocale],
    description: descriptionByLocale[currentLocale],
  })
}

export default async function AlcoholPage({ params }: AlcoholPageProps) {
  const { locale } = await params

  if (!isValidLocale(locale)) {
    notFound()
  }

  const currentLocale: Locale = locale
  const content = ALCOHOL_SERVICE_CONTENT[currentLocale]

  return <ServicePageTemplate locale={currentLocale} routeKey="alcohol" {...content} />
}