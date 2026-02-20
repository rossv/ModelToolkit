# ModelToolkit

Centralized source for various H&H modeling tools including web tools and local applications.

## Web directory preview

This repository now includes a polished front-end landing page that provides:

- searchable and filterable tool discovery,
- categories for web apps, downloadable apps, installable scripts, and third-party tools,
- tool detail drill-down modal,
- dark/light theme toggle,
- help modal with credits,
- authentication stub for future Okta / Azure AD integration.

### Run locally

Open `index.html` in a browser, or serve with a local static server.

## Deploy to GitHub Pages

This repo is configured for automatic GitHub Pages deployment through GitHub Actions.

1. Push changes to the `main` branch.
2. In GitHub, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. The workflow at `.github/workflows/deploy-pages.yml` will publish the site.

If you use a custom domain, add a `CNAME` file at the repository root before deployment.
## Development change log

Project change history and implementation knowledge are tracked in `DEVELOPMENT_LOG.md` and updated with each meaningful commit.

