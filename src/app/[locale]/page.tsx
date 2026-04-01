import Container from '@/components/ui/Container'

type HomePageProps = {
  params: Promise<{
    locale: string
  }>
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