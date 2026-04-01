import Container from '@/components/ui/Container'

type PageSectionProps = {
  title: string
  children?: React.ReactNode
}

export default function PageSection({
  title,
  children,
}: PageSectionProps) {
  return (
    <section style={{ paddingTop: '40px', paddingBottom: '40px' }}>
      <Container>
        <h2 style={{ marginTop: 0, marginBottom: '16px' }}>{title}</h2>
        {children}
      </Container>
    </section>
  )
}