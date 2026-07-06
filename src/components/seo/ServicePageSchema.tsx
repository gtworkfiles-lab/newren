import 'server-only'
import JsonLd from '@/components/seo/JsonLd'
import { buildBreadcrumbs } from '@/data/breadcrumbs'
import { buildCanonicalUrl, SITE_URL } from '@/seo/metadata'
import type { Locale, RouteKey } from '@/lib/routes'

type ServicePageSchemaProps = {
  locale: Locale
  routeKey: RouteKey
  faqTitle?: string
  faqItems?: Array<{ question: string; answer: string }>
  hasFaqSection: boolean
}

function hasMeaningfulText(value?: string): boolean {
  return typeof value === 'string' && value.trim().length > 0
}

function hasSafeFaqData(
  faqTitle?: string,
  faqItems?: Array<{ question: string; answer: string }>
): boolean {
  if (!hasMeaningfulText(faqTitle)) {
    return false
  }

  const hasFaqItems = Array.isArray(faqItems) && faqItems.length > 0

  if (!hasFaqItems) {
    return false
  }

  return faqItems.every((item) => {
    const question = item?.question?.trim() ?? ''
    const answer = item?.answer?.trim() ?? ''

    if (!hasMeaningfulText(question) || !hasMeaningfulText(answer)) {
      return false
    }

    const combined = `${faqTitle} ${question} ${answer}`.toUpperCase()
    return !combined.includes('TODO') && !combined.includes('TBD')
  })
}

export default function ServicePageSchema({
  locale,
  routeKey,
  faqTitle,
  faqItems,
  hasFaqSection,
}: ServicePageSchemaProps) {
  const breadcrumbs = buildBreadcrumbs(locale, routeKey)
  const canonicalUrl = buildCanonicalUrl(locale, routeKey)
  const breadcrumbPageId = `${canonicalUrl}#breadcrumb`
  const pageName = breadcrumbs[breadcrumbs.length - 1]?.label ?? ''
  const faqEligible = hasFaqSection && hasSafeFaqData(faqTitle, faqItems)

  const graph = [
    {
      '@type': 'WebPage',
      '@id': canonicalUrl,
      name: pageName,
      inLanguage: locale,
      url: canonicalUrl,
      breadcrumb: {
        '@id': breadcrumbPageId,
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': breadcrumbPageId,
      itemListElement: breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
        item: new URL(item.href, SITE_URL).toString(),
      })),
    },
    ...(faqEligible
      ? [
          {
            '@type': 'FAQPage',
            '@id': `${canonicalUrl}#faq`,
            mainEntity: faqItems!.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          },
        ]
      : []),
  ]

  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@graph': graph,
      }}
    />
  )
}
