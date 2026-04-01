import type { Locale } from '@/lib/routes'
import type { RouteKey } from '@/lib/routes'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import ServiceHero from '@/components/sections/shared/ServiceHero'
import TextListSection from '@/components/sections/shared/TextListSection'
import TextBlockSection from '@/components/sections/shared/TextBlockSection'
import FaqSection from '@/components/sections/shared/FaqSection'
import FinalCtaSection from '@/components/sections/shared/FinalCtaSection'
import InternalLinksSection from '@/components/sections/shared/InternalLinksSection'

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
  return (
    <>
      <Breadcrumbs locale={locale} routeKey={routeKey} />

      <ServiceHero locale={locale} title={heroTitle} subtitle={heroSubtitle} />

      <TextListSection title={problemTitle} items={problemItems} />
      <TextListSection title={symptomsTitle} items={symptomsItems} />
      <TextListSection title={consequencesTitle} items={consequencesItems} />
      <TextListSection title={processTitle} items={processItems} />
      <TextListSection title={programTitle} items={programItems} />
      <TextBlockSection title={familyTitle} text={familyText} items={familyItems} />
      <TextListSection title={whyUsTitle} items={whyUsItems} />

      <InternalLinksSection
        locale={locale}
        title="Пов’язані сторінки"
        routeKeys={['rehab', 'family', 'about', 'faq', 'contacts']}
      />

      <FaqSection title={faqTitle} items={faqItems} />

      <FinalCtaSection locale={locale} title={finalCtaTitle} text={finalCtaText} />
    </>
  )
}