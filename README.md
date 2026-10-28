# sharara6.github.io

My portfolio: [sharara6.github.io](https://sharara6.github.io/).

Built with [Astro](https://astro.build) and Tailwind CSS v4. It's a static site with almost no client JavaScript, and it deploys to GitHub Pages through GitHub Actions.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Editing content

Experience, projects, and links lives in [`src/data.ts`](src/data.ts).
Each project in `featured` gets its own page at `/projects/<slug>/`.

To show the résumé button, put a PDF at `public/Faris-Sharara-CV.pdf`.
