import type { FC } from "react";

export const Starter: FC = () => (
  <section className="mx-auto w-full max-w-3xl px-6 py-16">
    <header className="space-y-4">
      <p className="text-xs tracking-[0.3em] text-neutral-400 uppercase">
        Next.js 16 Starter
      </p>
      <h1 className="text-3xl leading-tight font-semibold text-balance sm:text-4xl">
        Minimal, modern, and ready for Vercel.
      </h1>
      <p className="text-base text-neutral-300">
        A lightweight Next.js 16 starter with Tailwind CSS 4, testing tools, and
        sensible defaults to ship quickly.
      </p>
    </header>

    <div className="mt-10 grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-5 shadow-sm">
        <p className="text-sm text-neutral-400">Frontend</p>
        <h2 className="mt-2 text-lg font-semibold">
          <a
            className="transition-colors hover:text-blue-400"
            href="https://nextjs.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Next.js 16
          </a>{" "}
          +{" "}
          <a
            className="transition-colors hover:text-blue-400"
            href="https://tailwindcss.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Tailwind CSS 4
          </a>
        </h2>
        <p className="mt-2 text-sm text-neutral-300">
          Build fast, responsive interfaces with React 19 and utility-first
          styling.
        </p>
      </div>
      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-5 shadow-sm">
        <p className="text-sm text-neutral-400">Backend</p>
        <h2 className="mt-2 text-lg font-semibold">
          <a
            className="transition-colors hover:text-blue-400"
            href="https://vercel.com/docs/cdn"
            rel="noopener noreferrer"
            target="_blank"
          >
            Vercel CDN
          </a>
        </h2>
        <p className="mt-2 text-sm text-neutral-300">
          Global edge delivery with caching and simple, scalable deployment.
        </p>
      </div>
      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-5 shadow-sm">
        <p className="text-sm text-neutral-400">Tooling</p>
        <h2 className="mt-2 text-lg font-semibold">
          <a
            className="transition-colors hover:text-blue-400"
            href="https://www.typescriptlang.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            TypeScript
          </a>
          ,{" "}
          <a
            className="transition-colors hover:text-blue-400"
            href="https://eslint.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            ESLint
          </a>
          ,{" "}
          <a
            className="transition-colors hover:text-blue-400"
            href="https://prettier.io/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Prettier
          </a>
        </h2>
        <p className="mt-2 text-sm text-neutral-300">
          Opinionated defaults for type safety, linting, and formatting.
        </p>
      </div>
      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-5 shadow-sm">
        <p className="text-sm text-neutral-400">Quality Assurance</p>
        <h2 className="mt-2 text-lg font-semibold">
          <a
            className="transition-colors hover:text-blue-400"
            href="https://vitest.dev/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Vitest
          </a>
          ,{" "}
          <a
            className="transition-colors hover:text-blue-400"
            href="https://playwright.dev/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Playwright
          </a>
        </h2>
        <p className="mt-2 text-sm text-neutral-300">
          Unit and end-to-end testing for reliable, production-ready code.
        </p>
      </div>
    </div>
  </section>
);
