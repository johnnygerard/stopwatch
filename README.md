# Next.js 16 Starter

![project status](https://img.shields.io/badge/project_status-active-success?style=for-the-badge)
[![live site](https://img.shields.io/badge/live_site-blue?style=for-the-badge)](https://starter-nextjs-16.vercel.app/)

## Overview

This starter repository facilitates the creation of new Next.js projects using the configuration described below. Note that this Next.js starter is configured for use with a [static export](https://nextjs.org/docs/app/guides/static-exports). To use the default build process instead, remove `output: "export"` from `next.config.ts` and replace `serve out` with `next start` in `package.json`.

To learn how to use a GitHub template repository, check out [Creating a repository from a template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).

## Tech Stack

### Frontend

- **UI library**: [React 19](https://react.dev/)
- **Framework**: [Next.js 16](https://nextjs.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)

### Backend

- **CDN**: [Vercel](https://vercel.com/docs/cdn)

### Quality Assurance

- **Unit testing**: [Vitest](https://vitest.dev/)
- **End-to-end testing**: [Playwright](https://playwright.dev/)

## Notes

- The GitHub Action `actions/setup-node@v6` relies on both `package.json` `engines` and `devEngines` to set the Node.js version and automatically cache npm dependencies.

## Dev Environment & Tools

- **System**: [Ubuntu](https://ubuntu.com/desktop)
- **Editor**: [VS Code](https://code.visualstudio.com/)
- **Formatter**: [Prettier](https://prettier.io/)
- **Linter**: [ESLint](https://eslint.org/)
- **AI assistant**: [GitHub Copilot](https://github.com/features/copilot)

## Copyright

© 2025–2026 Johnny Gérard
