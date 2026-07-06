# Sprint 4 — Schema / SEO Layer Checkpoint

## Status

Sprint 4 Narrow Implementation completed and ready for final review.

## Base and branch

- Base commit: `bfc456d`
- Working branch: `sprint-4-schema-seo-review`
- Scope: service-page Schema.org / JSON-LD layer only

## Implemented

- Added a server-only JSON-LD renderer:
  - `src/components/seo/JsonLd.tsx`
- Added centralized service-page schema output:
  - `src/components/seo/ServicePageSchema.tsx`
- Added one schema ownership point in:
  - `src/components/templates/ServicePageTemplate.tsx`
- Added:
  - `WebPage`
  - `BreadcrumbList`
  - conditional `FAQPage`
- Reused existing breadcrumb and canonical URL boundaries.
- Added shared `buildCanonicalUrl(...)` helper in:
  - `src/seo/metadata.ts`
- Aligned canonical metadata, Open Graph URL, and schema URL source.

## FAQ schema safety

`FAQPage` is emitted only when:

- the visible FAQ block is rendered;
- the FAQ title is meaningful;
- FAQ items are non-empty;
- every question and answer is meaningful;
- no `TODO` or `TBD` placeholder marker is present.

Current placeholder-like gambling FAQ content is excluded from `FAQPage` schema.

## Intentionally not changed

- locale strategy: `/uk`, `/ru`, `/en`
- legacy redirects
- translated slugs
- routing
- navigation
- Header, Footer, global layout
- sitemap
- approved copy
- service source data
- Service schema
- Organization / MedicalOrganization schema
- address, geo, ratings, reviews, pricing, or unsupported entity fields

## Validation

- `npm.cmd run lint`
  - passed with 0 errors
  - 1 existing warning in `GallerySection.tsx` for `no-img-element`
- `npm.cmd run build`
  - passed
- `git.exe diff --check`
  - passed
- whitespace checks for new schema files
  - no whitespace output reported
  - exit code `1` expected because files differ from `/dev/null`

## Remaining risk

Future service FAQ content containing placeholders or incomplete items will not emit `FAQPage` schema by design.

## Next step

Review checkpoint content and final Sprint 4 diff before any staging, commit, tag, or deployment action.
