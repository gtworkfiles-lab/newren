import PageSection from '@/components/sections/shared/PageSection'

type TextBlockSectionProps = {
  title: string
  text: string
  items?: string[]
}

export default function TextBlockSection({
  title,
  text,
  items = [],
}: TextBlockSectionProps) {
  return (
    <PageSection title={title}>
      <p style={{ marginTop: 0, marginBottom: items.length ? '16px' : 0, lineHeight: 1.6 }}>
        {text}
      </p>

      {items.length ? (
        <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: 1.8 }}>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </PageSection>
  )
}