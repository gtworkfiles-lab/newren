import type { Locale } from '@/lib/routes'
import type { RouteKey } from '@/lib/routes'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import ServiceHero from '@/components/sections/shared/ServiceHero'
import TextListSection from '@/components/sections/shared/TextListSection'
import TextBlockSection from '@/components/sections/shared/TextBlockSection'
import FaqSection from '@/components/sections/shared/FaqSection'
import FinalCtaSection from '@/components/sections/shared/FinalCtaSection'
import InternalLinksSection from '@/components/sections/shared/InternalLinksSection'
import ServicePageSchema from '@/components/seo/ServicePageSchema'

type ServicePageTemplateProps = {
  locale: Locale
  routeKey: RouteKey

  heroTitle: string
  heroSubtitle: string

  problemTitle: string
  problemItems: string[]

  symptomsTitle: string
  symptomsItems: string[]

  consequencesTitle: string
  consequencesItems: string[]

  processTitle: string
  processItems: string[]

  programTitle: string
  programItems: string[]

  familyTitle: string
  familyText: string
  familyItems: string[]

  whyUsTitle: string
  whyUsItems: string[]

  faqTitle: string
  faqItems: {
    question: string
    answer: string
  }[]

  finalCtaTitle: string
  finalCtaText: string
}

function hasMeaningfulText(value?: string): boolean {
  return typeof value === 'string' && value.trim().length > 0
}

function hasMeaningfulItems(items?: string[]): boolean {
  return Array.isArray(items) && items.some((item) => hasMeaningfulText(item))
}

function hasMeaningfulFaqItems(
  items?: Array<{ question: string; answer: string }>
): boolean {
  return (
    Array.isArray(items) &&
    items.some(
      (item) => hasMeaningfulText(item.question) && hasMeaningfulText(item.answer)
    )
  )
}

export default function ServicePageTemplate({
  locale,
  routeKey,
  heroTitle,
  heroSubtitle,
  problemTitle,
  problemItems,
  symptomsTitle,
  symptomsItems,
  consequencesTitle,
  consequencesItems,
  processTitle,
  processItems,
  programTitle,
  programItems,
  familyTitle,
  familyText,
  familyItems,
  whyUsTitle,
  whyUsItems,
  faqTitle,
  faqItems,
  finalCtaTitle,
  finalCtaText,
}: ServicePageTemplateProps) {
  const hasHero = hasMeaningfulText(heroTitle) && hasMeaningfulText(heroSubtitle)
  const hasProblemSection = hasMeaningfulText(problemTitle) && hasMeaningfulItems(problemItems)
  const hasSymptomsSection = hasMeaningfulText(symptomsTitle) && hasMeaningfulItems(symptomsItems)
  const hasConsequencesSection =
    hasMeaningfulText(consequencesTitle) && hasMeaningfulItems(consequencesItems)
  const hasProcessSection = hasMeaningfulText(processTitle) && hasMeaningfulItems(processItems)
  const hasProgramSection = hasMeaningfulText(programTitle) && hasMeaningfulItems(programItems)
  const hasFamilySection =
    hasMeaningfulText(familyTitle) &&
    (hasMeaningfulText(familyText) || hasMeaningfulItems(familyItems))
  const hasWhyUsSection = hasMeaningfulText(whyUsTitle) && hasMeaningfulItems(whyUsItems)
  const hasFaqSection = hasMeaningfulText(faqTitle) && hasMeaningfulFaqItems(faqItems)
  const hasFinalCtaSection =
    hasMeaningfulText(finalCtaTitle) && hasMeaningfulText(finalCtaText)

  return (
    <>
      <ServicePageSchema
        locale={locale}
        routeKey={routeKey}
        faqTitle={faqTitle}
        faqItems={faqItems}
        hasFaqSection={hasFaqSection}
      />
      <Breadcrumbs locale={locale} routeKey={routeKey} />

      {hasHero ? (
        <ServiceHero locale={locale} title={heroTitle} subtitle={heroSubtitle} />
      ) : null}

      {hasProblemSection ? (
        <TextListSection title={problemTitle} items={problemItems} />
      ) : null}
      {hasSymptomsSection ? (
        <TextListSection title={symptomsTitle} items={symptomsItems} />
      ) : null}
      {hasConsequencesSection ? (
        <TextListSection title={consequencesTitle} items={consequencesItems} />
      ) : null}
      {hasProcessSection ? (
        <TextListSection title={processTitle} items={processItems} />
      ) : null}
      {hasProgramSection ? (
        <TextListSection title={programTitle} items={programItems} />
      ) : null}
      {hasFamilySection ? (
        <TextBlockSection title={familyTitle} text={familyText} items={familyItems} />
      ) : null}
      {hasWhyUsSection ? (
        <TextListSection title={whyUsTitle} items={whyUsItems} />
      ) : null}

      <InternalLinksSection
        locale={locale}
        title="Пов’язані сторінки"
        routeKeys={['rehab', 'family', 'about', 'faq', 'contacts']}
      />

      {hasFaqSection ? <FaqSection title={faqTitle} items={faqItems} /> : null}

      {hasFinalCtaSection ? (
        <FinalCtaSection locale={locale} title={finalCtaTitle} text={finalCtaText} />
      ) : null}
    </>
  )
}