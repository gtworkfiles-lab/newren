import type { Locale, RouteKey } from '@/lib/routes'
import Breadcrumbs from '@/components/layout/Breadcrumbs'

type BlogPostTemplateProps = {
  locale: Locale

  // Basic post data (scaffold placeholders)
  title?: string
  excerpt?: string
  content?: string
  publishedAt?: string
  author?: string

  // Related posts (scaffold)
  relatedPostsTitle?: string
  relatedPostIds?: string[]
}

export default function BlogPostTemplate({
  locale,
  title = 'TODO: Blog post title',
  excerpt = 'TODO: Blog post excerpt',
  content = 'TODO: Blog post content',
  publishedAt,
  author,
  relatedPostsTitle = 'TODO: Related posts',
  relatedPostIds = [],
}: BlogPostTemplateProps) {
  return (
    <>
      <Breadcrumbs locale={locale} routeKey={"blog" as RouteKey} />

      <article style={{ paddingTop: '40px', paddingBottom: '40px' }}>
        <header style={{ marginBottom: '32px', textAlign: 'center' }}>
          <h1 style={{ marginBottom: '16px' }}>{title}</h1>
          {excerpt && (
            <p style={{
              fontSize: '18px',
              color: 'var(--color-text-secondary)',
              marginBottom: '16px',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              {excerpt}
            </p>
          )}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            fontSize: '14px',
            color: 'var(--color-text-secondary)'
          }}>
            {publishedAt && <span>{publishedAt}</span>}
            {author && <span>{author}</span>}
          </div>
        </header>

        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: 1.7,
          fontSize: '16px'
        }}>
          <p style={{ margin: 0 }}>{content}</p>
        </div>

        {relatedPostIds && relatedPostIds.length > 0 && (
          <section style={{ marginTop: '64px', paddingTop: '40px', borderTop: '1px solid var(--color-border)' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '32px' }}>{relatedPostsTitle}</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '24px',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              {relatedPostIds.map((postId) => (
                <div
                  key={postId}
                  style={{
                    border: '1px solid var(--color-border)',
                    padding: '20px',
                    borderRadius: '8px'
                  }}
                >
                  <h3 style={{ marginTop: 0 }}>TODO: Related post {postId}</h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>TODO: Related post excerpt</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {!relatedPostIds || relatedPostIds.length === 0 ? (
          <section style={{ marginTop: '64px', paddingTop: '40px', borderTop: '1px solid var(--color-border)' }}>
            <div style={{ textAlign: 'center', padding: '40px', color: 'var(--color-text-secondary)' }}>
              TODO: Related posts section placeholder
            </div>
          </section>
        ) : null}
      </article>
    </>
  )
}