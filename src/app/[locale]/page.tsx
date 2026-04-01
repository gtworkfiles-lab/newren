import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import { SITE_CONFIG } from '@/data/site-config'
import { isValidLocale, type Locale } from '@/lib/routes'
import { buildPageMetadata } from '@/seo/metadata'

type HomePageProps = {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params

  if (!isValidLocale(locale)) {
    return {}
  }

  const currentLocale: Locale = locale

  return buildPageMetadata({
    locale: currentLocale,
    routeKey: 'home',
    title: SITE_CONFIG.brandName,
    description: `${SITE_CONFIG.brandDescriptor[currentLocale]} ${SITE_CONFIG.brandName}`,
  })
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params

  return (
    <main className="page-placeholder">
      <Container>
        <h1>Home page</h1>
        <p>Locale: {locale}</p>
      </Container>
    </main>
  )
}
