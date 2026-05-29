# justaleks.no — Portfolio PRD

## Original problem statement
> "lage en portefølje for justaleks.no — IT, kunstnerisk, minimalistisk, realistisk — skal kunne hostes på github" (Norwegian)

A personal portfolio for Aleks, a hybrid IT developer + visual artist based in Norway.

## User choices (gathered on Day 1)
- Content: hybrid IT + art (both)
- Sections: designer chooses (surprise me)
- Style: dark mode with muted/realistic tones
- Hosting: static React app for GitHub Pages
- Integrations: contact form (mailto-based for static hosting)

## User personas
- **Visitor / Recruiter** — wants a quick read of who Aleks is, what he ships, and how to reach him.
- **Curator / Gallery scout** — interested in art works and material practice.
- **Engineering peer / Open-source collaborator** — wants links to GitHub repos and the tech stack.

## Architecture
- React 19 (CRA + CRACO) + Tailwind CSS
- Lucide icons, Sonner toasts, Cormorant Garamond + IBM Plex Mono fonts
- Pure CSS animations (marquee, slow-pan, reveal-on-scroll via IntersectionObserver)
- No backend, no DB — fully static
- GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages with CNAME for `justaleks.no`

## Implemented features (2026-05-29 — first finish)
- **Hero** — abstract textured background, "Just Aleks" giant serif type, mono subtitle, CTA into archive
- **Selected Software (work)** — asymmetric bento grid of 4 IT projects with tech stack tags and GitHub links
- **Gallery** — staggered art-grid of 4 works with mixed aspect ratios and offset vertical rhythm
- **About** — split layout, atelier portrait, 4-row career timeline
- **Toolbox (skills)** — dual-direction serif/mono marquees
- **Contact** — minimalist form opens user's mail client via `mailto:`, toast feedback
- **Footer** — sitemap, social links, copy
- **Navbar** — sticky glass nav, smooth-scroll links, mobile drawer
- **Film-grain SVG overlay** for tactile "realistic" feel
- **All elements carry data-testid** — frontend test suite passes 44/44 (100%)
- **GitHub Pages deployment workflow** — pushes to `main` auto-deploy to `justaleks.no`

## Backlog (P0 / P1 / P2)

### P0 — blocker if user wants production
- Replace placeholder projects/art with Aleks's real content (`src/data/portfolio.js`)
- Replace placeholder email / GitHub / LinkedIn URLs in `PROFILE` constant

### P1 — nice next iteration
- Swap mailto for Formspree/Resend so messages don't open the visitor's mail client
- Add individual case-study pages for each IT project (use HashRouter for GH Pages)
- SEO meta tags + OpenGraph image
- Add `favicon.ico` and proper Apple touch icons
- Light/dark theme toggle (currently dark only — by design)

### P2 — future
- CMS-style content (Contentful or simple JSON) so Aleks can edit without code
- Blog / journal section ("field notes")
- I18n: Norwegian translation (currently English)
- Lenis smooth-scroll library if richer scroll feel needed
- Visit analytics (Plausible / Umami)

## Next tasks
1. Receive real content from Aleks and replace placeholders in `src/data/portfolio.js`
2. Push to GitHub (`justaleks/justaleks.no` recommended) and enable Pages → GitHub Actions
3. Point `justaleks.no` DNS CNAME at `<username>.github.io`
