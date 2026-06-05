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

## Deploy to GitHub Pages

This repo is configured to serve GitHub Pages from the `docs/` folder on the `master` branch, with a custom domain (`wilsonrivera.com`).

### One-time GitHub setup

1. Push the repo to GitHub.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*.
4. Set the branch to **`master`** and the folder to **`/docs`**, then **Save**.
5. Under **Custom domain**, enter `wilsonrivera.com` and **Save**. This writes a `CNAME` file (see the note below about keeping it).
6. Once DNS verifies, tick **Enforce HTTPS**.

### One-time DNS setup

At your domain registrar / DNS provider, point the domain at GitHub Pages:

| Type    | Host / Name | Value                                  |
| ------- | ----------- | -------------------------------------- |
| `A`     | `@`         | `185.199.108.153`                      |
| `A`     | `@`         | `185.199.109.153`                      |
| `A`     | `@`         | `185.199.110.153`                      |
| `A`     | `@`         | `185.199.111.153`                      |
| `CNAME` | `www`       | `wilsonriv.github.io.` *(your Pages domain)* |

DNS changes can take up to 24 hours to propagate. Verify with `dig wilsonrivera.com +short` (should return the four GitHub IPs).

### Keep the custom domain across builds

`ng build` **clears the entire `docs/` folder** on every build, which deletes `docs/CNAME` and breaks the custom domain until it's restored. To make the `CNAME` survive every build, keep it as a source asset:

1. Create `src/CNAME` containing a single line:

   ```
   wilsonrivera.com
   ```

2. Add it to the `assets` array in `angular.json` (under `projects → <app> → architect → build → options → assets`):

   ```json
   "assets": [
     "src/favicon.ico",
     "src/assets",
     "src/CNAME"
   ]
   ```

Now each production build copies `CNAME` into `docs/` automatically.

> If you skip this, you must manually re-create `docs/CNAME` (containing `wilsonrivera.com`) after every build, or set the custom domain again in **Settings → Pages**.

### Deploy steps

```bash
# 1. Build production output into docs/
NODE_OPTIONS=--openssl-legacy-provider ng build --prod

# 2. Confirm the CNAME is present
cat docs/CNAME   # -> wilsonrivera.com

# 3. Commit and push the updated docs/ folder
git add docs/
git commit -m "build: production deploy"
git push
```

GitHub Pages redeploys automatically within a minute or two.

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
