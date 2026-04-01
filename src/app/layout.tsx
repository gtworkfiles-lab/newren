import type { Metadata } from "next"
import { headers } from "next/headers"
import { Manrope, Inter } from "next/font/google"
import { DEFAULT_LOCALE, isValidLocale } from "@/lib/routes"
import "./globals.css"

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: "swap",
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ренесанс",
  description: "Центр лікування залежностей та реабілітації Ренесанс",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const requestHeaders = await headers()
  const requestLocale = requestHeaders.get("x-path-locale")
  const htmlLang =
    requestLocale && isValidLocale(requestLocale) ? requestLocale : DEFAULT_LOCALE

  return (
    <html
      lang={htmlLang}
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
