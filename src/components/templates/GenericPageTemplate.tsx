import type { Locale, RouteKey } from '@/lib/routes'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import ServiceHero from '@/components/sections/shared/ServiceHero'
import TextBlockSection from '@/components/sections/shared/TextBlockSection'
import TextListSection from '@/components/sections/shared/TextListSection'
import FaqSection from '@/components/sections/shared/FaqSection'
import ReviewsSection from '@/components/sections/shared/ReviewsSection'
import GallerySection from '@/components/sections/shared/GallerySection'
import ContactSection from '@/components/sections/shared/ContactSection'
import FinalCtaSection from '@/components/sections/shared/FinalCtaSection'
import InternalLinksSection from '@/components/sections/shared/InternalLinksSection'

type GenericPageTemplateProps = {
  locale: Locale
  routeKey: RouteKey

  // Hero section (optional)
  heroTitle?: string
  heroSubtitle?: string

  // Text sections (optional)
  textBlocks?: Array<{
    title: string
    text: string
    items?: string[]
  }>

  // List sections (optional)
  listSections?: Array<{
    title: string
    items: string[]
  }>

  // FAQ section (optional)
  faqTitle?: string
  faqItems?: Array<{
    question: string
    answer: string
  }>

  // Reviews section (optional)
  reviewsTitle?: string

  // Gallery section (optional)
  galleryTitle?: string

  // Contact section (optional)
  contactTitle?: string

  // Final CTA section (optional)
  finalCtaTitle?: string
  finalCtaText?: string

  // Internal links section (optional)
  internalLinksTitle?: string
  internalLinkKeys?: RouteKey[]
}

export default function GenericPageTemplate({
  locale,
  routeKey,
  heroTitle,
  heroSubtitle,
  textBlocks,
  listSections,
  faqTitle,
  faqItems,
  reviewsTitle,
  galleryTitle,
  contactTitle,
  finalCtaTitle,
  finalCtaText,
  internalLinksTitle,
  internalLinkKeys,
}: GenericPageTemplateProps) {
  return (
    <>
      <Breadcrumbs locale={locale} routeKey={routeKey} />

      {heroTitle && heroSubtitle && (
        <ServiceHero locale={locale} title={heroTitle} subtitle={heroSubtitle} />
      )}

      {textBlocks && textBlocks.map((block, index) => (
        <TextBlockSection
          key={index}
          title={block.title}
          text={block.text}
          items={block.items}
        />
      ))}

      {listSections && listSections.map((section, index) => (
        <TextListSection
          key={index}
          title={section.title}
          items={section.items}
        />
      ))}

      {faqTitle && faqItems && (
        <FaqSection title={faqTitle} items={faqItems} />
      )}

      {reviewsTitle && (
        <ReviewsSection locale={locale} title={reviewsTitle} />
      )}

      {galleryTitle && (
        <GallerySection locale={locale} title={galleryTitle} />
      )}

      {contactTitle && (
        <ContactSection locale={locale} title={contactTitle} />
      )}

      {internalLinksTitle && internalLinkKeys && (
        <InternalLinksSection
          locale={locale}
          title={internalLinksTitle}
          routeKeys={internalLinkKeys}
        />
      )}

      {finalCtaTitle && finalCtaText && (
        <FinalCtaSection locale={locale} title={finalCtaTitle} text={finalCtaText} />
      )}
    </>
  )
}