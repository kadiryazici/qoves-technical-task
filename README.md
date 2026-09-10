# Technical Task

A UI project built with Next.js, React, and TypeScript. Styles use SCSS Modules, and Storybook lets you explore components in isolation.

## Live previews

- [App on Vercel](https://qoves-technical-task.vercel.app)
- [Storybook on GitHub Pages](https://kadiryazici.github.io/qoves-technical-task/)

## Installation

Install Node.js and pnpm before getting started. This project uses pnpm `10.32.0`.

```bash
pnpm install
```

## Running the app

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Storybook

```bash
pnpm storybook
```

Open [http://localhost:6006](http://localhost:6006) to view Storybook. Select component examples from the sidebar and use the Controls panel to adjust their available properties.

Story files live alongside their components as `*.stories.tsx`. Global styles and fonts are loaded automatically in Storybook.

## Production build

```bash
pnpm build
pnpm start
```

To generate a static Storybook build:

```bash
pnpm build-storybook
```

The output is written to `storybook-static/`. To stop a running development server, press `Ctrl+C` in the terminal.

## Storybook deployment

The `Deploy Storybook` workflow runs on every push to `main` and can also be started manually from the Actions tab. It builds Storybook, creates or updates the `gh-pages` branch with the static output, and deploys the same build to GitHub Pages.

For the initial setup, open **Settings → Pages → Build and deployment** in the GitHub repository and set **Source** to **GitHub Actions**. The workflow uses the built-in `GITHUB_TOKEN`; no additional secrets are required.
