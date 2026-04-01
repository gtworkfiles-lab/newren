import PageSection from '@/components/sections/shared/PageSection'
import { GALLERY_IMAGES } from '@/data/gallery'
import type { Locale } from '@/lib/routes'

type GallerySectionProps = {
  locale: Locale
  title: string
}

export default function GallerySection({ locale, title }: GallerySectionProps) {
  const localeImages = GALLERY_IMAGES.filter(
    (image) => image.locale === locale && image.isPublished
  ).sort((a, b) => a.order - b.order)

  return (
    <PageSection title={title}>
      {localeImages.length > 0 ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '16px',
          }}
        >
          {localeImages.map((image) => (
            <div key={image.id} style={{ position: 'relative' }}>
              <img
                src={image.src}
                alt={image.alt}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              {image.caption && (
                <p
                  style={{
                    margin: '8px 0 0 0',
                    fontSize: '14px',
                    color: 'var(--color-text-secondary)',
                    textAlign: 'center',
                  }}
                >
                  {image.caption}
                </p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '40px', color: 'var(--color-text-secondary)' }}>
          TODO: gallery block placeholder
        </div>
      )}
    </PageSection>
  )
}