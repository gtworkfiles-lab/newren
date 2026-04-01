import { NextResponse, type NextRequest } from "next/server"
import { DEFAULT_LOCALE, isValidLocale } from "./lib/routes"

const LOCALE_HEADER = "x-path-locale"

function getLocaleFromPathname(pathname: string) {
  const [, maybeLocale] = pathname.split("/")

  return maybeLocale && isValidLocale(maybeLocale) ? maybeLocale : DEFAULT_LOCALE
}

export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set(LOCALE_HEADER, getLocaleFromPathname(request.nextUrl.pathname))

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
}
