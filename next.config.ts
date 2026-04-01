import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactCompiler: true,
  redirects: async () => [
    {
      source: '/ua/:path*',
      destination: '/uk/:path*',
      permanent: true,
    },
  ],
}

export default nextConfig

