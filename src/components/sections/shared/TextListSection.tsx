import PageSection from '@/components/sections/shared/PageSection'

type TextListSectionProps = {
  title: string
  intro?: string
  items: string[]
}

export default function TextListSection({
  title,
  intro,
  items,
}: TextListSectionProps) {
  return (
    <PageSection title={title}>
      {intro ? (
        <p style={{ marginTop: 0, marginBottom: '16px', lineHeight: 1.6 }}>
          {intro}
        </p>
      ) : null}

      <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: 1.8 }}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </PageSection>
  )
}