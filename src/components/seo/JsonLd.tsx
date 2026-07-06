import 'server-only'

export type JsonLdData = Record<string, unknown>

type JsonLdProps = {
  data: JsonLdData
}

function escapeJsonScript(value: string): string {
  return value
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

export default function JsonLd({ data }: JsonLdProps) {
  const serialized = JSON.stringify(data)
  const safeContent = escapeJsonScript(serialized)

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeContent }} />
}
