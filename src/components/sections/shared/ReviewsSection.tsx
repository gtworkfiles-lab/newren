import PageSection from '@/components/sections/shared/PageSection'
import { REVIEWS } from '@/data/reviews'
import type { Locale } from '@/lib/routes'

type ReviewsSectionProps = {
  locale: Locale
  title: string
}

export default function ReviewsSection({ locale, title }: ReviewsSectionProps) {
  const publishedReviews = REVIEWS.filter(
    (review) => review.locale === locale && review.status === 'published'
  ).sort((a, b) => a.order - b.order)

  return (
    <PageSection title={title}>
      {publishedReviews.length > 0 ? (
        <div style={{ display: 'grid', gap: '24px' }}>
          {publishedReviews.map((review) => (
            <div
              key={review.id}
              style={{
                border: '1px solid var(--color-border)',
                padding: '20px',
                borderRadius: '8px',
              }}
            >
              <div style={{ marginBottom: '12px' }}>
                {review.name && (
                  <strong style={{ display: 'block', marginBottom: '4px' }}>
                    {review.name}
                  </strong>
                )}
                {review.relation && (
                  <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                    {review.relation}
                  </span>
                )}
              </div>
              <p style={{ margin: 0, lineHeight: 1.6 }}>{review.text}</p>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '40px', color: 'var(--color-text-secondary)' }}>
          TODO: reviews block placeholder
        </div>
      )}
    </PageSection>
  )
}