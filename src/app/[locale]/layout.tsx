import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { DEFAULT_LOCALE, isValidLocale, LOCALES, type Locale } from '@/lib/routes'

type LocaleLayoutProps = {
  children: React.ReactNode
  params: Promise<{
    locale: string
  }>
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  title: {
    default: 'Ренесанс',
    template: '%s | Ренесанс',
  },
  description: 'Центр лікування залежностей та реабілітації Ренесанс',
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params

  if (!isValidLocale(locale)) {
    notFound()
  }

  const currentLocale: Locale = locale

  return (
    <div
      className="layout-shell"
      data-locale={currentLocale}
      data-default-locale={DEFAULT_LOCALE}
    >
      <Header locale={currentLocale} />
      <main className="site-main">{children}</main>
      <Footer locale={currentLocale} />
    </div>
  )
}
