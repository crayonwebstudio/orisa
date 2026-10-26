# Orisa (Astro conversion)

Astro static conversion of the supplied Orisa HTML template, for
https://orisa.woodwolfdigital.com (not yet deployed, see Status).

## Conversion

- All 74 supplied HTML pages were first converted to Astro pages with
  clean URLs: `index.html` at `/`, every other page at `/<slug>/`, and
  `404.html` kept as `/404.html`.
- At milan's request the 15 dark-variant homepages were then removed:
  `index-dark` and `index-2-dark` through `index-15-dark`. Links to them
  from the remaining pages were retargeted to the matching light page
  (`/index-dark/` to `/`, `/index-N-dark/` to `/index-N/`). The site
  now has 59 pages: 58 routes plus `404.html`. Dark theme assets such
  as `favicon-dark.svg` and dark CSS classes inside light pages were
  not removed, as they are not dark-version pages.
- Original CSS, vendor JS/CSS and fonts are copied unchanged to
  `public/assets/`. Original body markup, CSS list and script list are
  preserved per page, including light/dark `data-bs-theme` variants.
- Template links that pointed at pages not in the zip were retargeted to
  the matching existing page, so no internal link points at a missing
  route: `services.html` to `/services-1/`,
  `service-details-1.html` and `services-details-1.html` to
  `/services-details/`, `faqs-1.html` to `/faqs/`.
- No PHP backend is carried over. All 102 forms in the template use
  `action="#"`, so they are front-end only as supplied.
- Indexing is off for this staging/demo conversion: every page carries
  `noindex, nofollow` and `public/robots.txt` disallows all.

## Images supplied so far

The first zip (`orisa.zip`) contained HTML, CSS, JS and fonts only, no
`assets/imgs/` or video files.

The second zip (`2.zip`, 32 files) contains exactly the
`assets/imgs/pages/img-27.webp` through `img-53.webp` set used by
`/index-2/` and `/index-2-dark/`, including the `-lg` variants for
img-40 to img-44. Those files were copied byte-for-byte (SHA-256 verified
identical) to `public/assets/imgs/pages/`, with no resize, crop or redraw.

That also covers the same filenames reused elsewhere: about-1 (img-40 to
img-44), portfolio-5 (img-34 to img-39), services-2 (img-30 to img-33),
services-3 and index-7 (img-45 to img-49), index-3 (img-51 to img-53),
index-15 (img-50 to img-53), and others.

The third zip (`3.zip`, 35 files) contains `img-54.webp` through
`img-88.webp`, copied byte-for-byte (SHA-256 verified identical) to the
same folder, for a total of 67 page images so far. This batch completes
the page images for `/portfolio-2/` and `/portfolio-6/` (6 of 6 each),
and brings `/index-3/` and `/index-3-dark/` to 23 of 27 page images
(only img-17 to img-20 still missing there). img-81 to img-84 in this
batch are referenced from `main.css`, not from page HTML.

The fourth zip (`4_0_tfqk.zip`, folder `4/`, 106 files) adds img-1 to
img-26, img-89 to img-122, bg-img-6 and bg-img-7, plus img-1_1.webp
(unreferenced in the HTML). 32 of its files duplicate earlier batches
with identical hashes; 74 are new, for a total of 141 page images.
After this batch, the page images (not counting icons, avatars, logos
or video) are complete for index-3 except bg-img-3, and for index-4
except bg-img-4, bg-img-5 and img-gemstone. A template typo with a
leading space in `src=" assets/imgs/pages/img-74.webp"` (and a few
other pages) was fixed to `src="/assets/..."` in the Astro pages, so
that image now resolves.

## Still missing for index-2, index-3 and index-4 (checked 2026-10-26
after batch 4, light and dark variants identical)

- index-2: 26 of 58 media refs missing. Page images present except
  bg-img-2.webp and noise.gif.
- index-3: 25 of 53 media refs missing. Page images present except
  bg-img-3.webp.
- index-4: 16 of 47 media refs missing. Page images present except
  bg-img-4.webp, bg-img-5.webp and img-gemstone.webp.
- Union across index-2, index-3 and index-4: 41 distinct files:
  icons badge-1.svg and brand-1 to brand-6; pages bg-img-2, bg-img-3,
  bg-img-4, bg-img-5, img-gemstone, noise.gif; avatars avatar-6 to
  avatar-19; logos favicon.svg, favicon-dark.svg, favicon-md.webp and
  logo-brand-01 to logo-brand-10; video live-bg.mov.

The fifth zip (`template.zip`, 71 files) supplies the template folder:
icons (28 files), template avatars (21), template logos (20) and video
(2), copied byte-for-byte (SHA-256 verified identical) to their matching
`public/assets/imgs/` folders. After this batch, checked 2026-10-26,
index-2 is missing only bg-img-2.webp and noise.gif, index-3 only
bg-img-3.webp, and index-4 only bg-img-4.webp, bg-img-5.webp and
img-gemstone.webp. Union across index-2, index-3 and index-4 is now
just those 6 page files.

Those 6 files were then supplied as individual uploads, in the order
previously listed, and copied byte-for-byte to
`public/assets/imgs/pages/`: fire image to bg-img-2.webp, static image
to noise.gif, teal waves to bg-img-3.webp, blue and orange lines to
bg-img-4.webp, red waves to bg-img-5.webp, small gemstone to
img-gemstone.webp. After this, checked 2026-10-26, index-2, index-3
and index-4, light and dark, are all at 0 missing media refs
(58 of 58, 53 of 53 and 47 of 47 respectively).

## Still missing

For `/index-2/` specifically, these referenced files were not in either
zip and will still 404 until supplied:

- `assets/imgs/pages/bg-img-2.webp`, `assets/imgs/pages/noise.gif`
- `assets/imgs/icons/badge-1.svg`, `brand-1.webp` to `brand-9.webp`
- `assets/imgs/template/avatar/avatar-6.webp` to `avatar-19.webp`
  (avatar-15 to avatar-19 are referenced only by index-2 variants)
- `assets/imgs/template/logo/favicon.svg`, `favicon-dark.svg`
- `assets/imgs/video/live-bg.mov`

The rest of the site (index-1 images img-1 to img-26, and all other
page/icon/avatar/logo images) is likewise still missing. Do not present
the site as visually complete until those files arrive.

## Development

```sh
npm install
npm run dev
npm run build
npm run preview
```

## Deployment (Coolify, Docker, when approved)

The repo includes a `Dockerfile` (Node build, Nginx serve) and
`nginx.conf`. In Coolify, create an application from this repository,
branch `main`, build pack Dockerfile, domain
`orisa.woodwolfdigital.com`, with HTTPS enabled. Nginx serves the static
build, redirects old `.html` URLs to clean URLs, and serves the custom
404 page.
