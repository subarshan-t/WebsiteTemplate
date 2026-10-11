# Redox — Astro creative agency template

An Astro rebuild of the look and feel of the **Redox – Creative Agency & Portfolio** WordPress theme, modelled on its "Digital Agency" demo: dark UI, orange accent, giant condensed wordmark, italic serif accents, GSAP scroll animations and Lenis smooth scrolling.

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Pages

| Route | Contents |
| --- | --- |
| `/` | Hero + REDOX wordmark, marquee, about/stats, services list, pinned horizontal project scroller, process, testimonial slider, clients, blog teaser |
| `/about` | Story, stats, values, team |
| `/services` | Service breakdown, process, FAQ |
| `/portfolio` | Filterable staggered grid; `/portfolio/[slug]` case-study pages |
| `/blog` | Featured + list; `/blog/[slug]` article pages |
| `/contact` | Contact details + project enquiry form |
| `/404` | Not-found page |

## Customising

- **Content**: everything (projects, services, team, posts, contact details) is in `src/data/site.ts`.
- **Colours & fonts**: CSS tokens at the top of `src/styles/global.css` (`--accent`, `--bg`, fonts). Light mode is under `[data-theme='light']`.
- **Images**: the template ships with generated placeholder artwork (`src/components/Art.astro`). Swap these for your own images via Astro's `<Image />`.
- **Animations**: `src/scripts/main.ts` — add `data-reveal`, `data-split` (lines split on `<br>`), `data-parallax`, `data-count`, `data-magnetic` or `data-cursor="Label"` to any element.
- **Contact form**: static by default; set the form `action` to Formspree, Netlify Forms or your own endpoint.

Animations respect `prefers-reduced-motion`. No assets (images, fonts, code) from the original WordPress theme are included.
