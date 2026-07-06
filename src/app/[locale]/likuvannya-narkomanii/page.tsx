import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/templates/ServicePageTemplate'
import { getServiceContent } from '@/data/services'
import { buildPageMetadata } from '@/seo/metadata'
import { isValidLocale, type Locale } from '@/lib/routes'

type DrugsPageProps = {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({
  params,
}: DrugsPageProps): Promise<Metadata> {
  const { locale } = await params

  if (!isValidLocale(locale)) {
    return {}
  }

  const currentLocale: Locale = locale

  const titleByLocale: Record<Locale, string> = {
    uk: 'Лікування наркоманії',
    ru: 'Лечение наркомании',
    en: 'Drug addiction treatment',
  }

  const descriptionByLocale: Record<Locale, string> = {
    uk: 'Лікування наркотичної залежності, системна допомога та підтримка родини в центрі Ренесанс.',
    ru: 'Лечение наркотической зависимости, системная помощь и поддержка семьи в центре Ренесанс.',
    en: 'Drug addiction treatment, structured support and family guidance at Renaissance center.',
  }

  return buildPageMetadata({
    locale: currentLocale,
    routeKey: 'drugs',
    title: titleByLocale[currentLocale],
    description: descriptionByLocale[currentLocale],
  })
}

export default async function DrugsPage({ params }: DrugsPageProps) {
  const { locale } = await params

  if (!isValidLocale(locale)) {
    notFound()
  }

  const currentLocale: Locale = locale
  const content = getServiceContent('drugs', currentLocale)

  if (!content) {
    notFound()
  }

  return <ServicePageTemplate locale={currentLocale} routeKey="drugs" {...content} />
}