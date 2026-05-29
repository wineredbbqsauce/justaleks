# justaleks.no — Portfolio

A minimalist, dark, editorial portfolio for an IT developer + visual artist.
Static React app, ready to host on **GitHub Pages**.

## Stack

- React 19 (Create React App + CRACO)
- Tailwind CSS
- Lucide icons, Sonner toasts
- Pure CSS animations (no heavy runtime libs)

## Sections

`Hero` · `Selected Software` (IT projects bento grid) · `Gallery` (art works) ·
`About` (split layout with timeline) · `Toolbox` (marquee of skills) ·
`Contact` (mailto-driven form) · `Footer`.

## Local development

```bash
cd frontend
yarn install
yarn start
# → http://localhost:3000
```

Edit content in `frontend/src/data/portfolio.js` — projects, art works, profile,
timeline, and skills all live there.

## Deploy to GitHub Pages

1. Push this repo to GitHub under `justaleks/<repo-name>` (or any name).
2. In **Settings → Pages**, set the source to **GitHub Actions**.
3. (Optional, for the custom domain) add a `CNAME` DNS record at your domain
   registrar pointing `justaleks.no` to `<username>.github.io`. The included
   workflow already writes a `CNAME` file containing `justaleks.no`.
4. Push to `main` — the included workflow at
   `.github/workflows/deploy.yml` builds the React app and publishes it.

### Manual build

```bash
cd frontend
PUBLIC_URL=. CI=false yarn build
# upload ./build to any static host
```

## Contact form

The form opens the visitor's mail client via `mailto:` — perfect for a
fully-static GitHub Pages deploy. To switch to async submissions, replace the
handler in `src/components/Contact.jsx` with a Formspree (or similar) endpoint.

## Customising

- Colors live as CSS variables at the top of `src/index.css`.
- Images can be replaced inside `src/data/portfolio.js` (`MEDIA` object).
- All sections live under `src/components/`.
