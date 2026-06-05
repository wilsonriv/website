# wilsonrivera.com

Personal portfolio site for Wilson Rivera — Software Engineer. Built with Angular 9, deployed to GitHub Pages.

## Prerequisites

- Node.js (v16 recommended; v17+ requires the OpenSSL workaround below)
- Angular CLI: `npm install -g @angular/cli@9`

## Install

```bash
npm install
```

## Development

```bash
NODE_OPTIONS=--openssl-legacy-provider ng serve
```

Opens at `http://localhost:4200`. The app hot-reloads on file changes.

> **Why the NODE_OPTIONS flag?** Angular 9 uses Webpack 4, which relies on an OpenSSL hash algorithm removed in Node 17+. The flag re-enables legacy OpenSSL support.

## Build for production

```bash
NODE_OPTIONS=--openssl-legacy-provider ng build --prod
```

Output goes to `docs/` — the GitHub Pages source branch for this repo. No extra copy step needed.

## Deploy

Push the updated `docs/` folder to `master`. GitHub Pages serves from `docs/` automatically.

```bash
git add docs/
git commit -m "build: production deploy"
git push
```

Live at: **https://wilsonrivera.com**

## Project structure

```
src/
  app/
    header/
      jumbotron/        # Full-viewport hero section
      header.*          # Sticky glassmorphism nav
    about/              # Two-column about + skills
    clients/
      clients-list/     # Work experience card grid
      client.service.ts # All client/company data lives here
    certifications/     # Certification badge grid
  styles.css            # Global CSS design system (variables, shared styles)
  index.html            # Google Fonts loaded here
```

## Adding a new company

1. Add an entry to the `clients` array in `src/app/clients/client.service.ts`
2. Drop the logo into `src/assets/logos/`
3. Create a detail component under `src/app/clients/clients-<name>/`
4. Register the route in `src/app/clients/clients-routing.module.ts`
