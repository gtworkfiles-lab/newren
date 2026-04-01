import PageSection from '@/components/sections/shared/PageSection'
import AccordionItem from '@/components/ui/AccordionItem'

type FaqItem = {
  question: string
  answer: string
}

type FaqSectionProps = {
  title: string
  items: FaqItem[]
}

export default function FaqSection({ title, items }: FaqSectionProps) {
  return (
    <PageSection title={title}>
      <div style={{ display: 'grid', gap: '12px' }}>
        {items.map((item) => (
          <AccordionItem
            key={item.question}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </PageSection>
  )
}