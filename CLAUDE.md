# Portfolio: working rules

## The design is final. Don't change it.

The visual design was agreed with Faris on 2026-10-28. Do **not** change layout, typography, colours,
spacing, animations, or component structure (`src/styles/`, `src/layouts/`, the markup in `src/pages/`)
unless Faris explicitly asks for a design change in that conversation.

Things to avoid even when asked to "improve" the site: stat cards, glowing or gradient effects, grid
backgrounds, pulsing badges, numbered section labels, icon skill grids, and slogan heroes. These make it
look template- or AI-made.

## Content updates

- Experience, projects, research, and links live in `src/data.ts`. Edit there.
- The intro, Tools, and Outside-work prose is in `src/pages/index.astro`. Change the words, not the markup.
- Use only facts Faris has confirmed. Never invent metrics.
- Never call Faris a "lead" (not at AUD and not on IN). Display the location as "Egypt" only. Don't show the phone number.
- The résumé is `public/Faris-Sharara-CV.pdf`. Replace the file to update it.

## Deploy

Pushing to `master` builds and deploys through `.github/workflows/deploy.yml` (Pages source: GitHub Actions).
