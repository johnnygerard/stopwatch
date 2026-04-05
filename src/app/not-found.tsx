import type { Metadata } from "next";
import Link from "next/link";
import type { FC } from "react";

export const metadata: Metadata = {
  title: "Page Not Found",
};

const NotFound: FC = () => (
  <div className="mx-auto w-full max-w-3xl px-6 py-16 text-center">
    <hgroup>
      <p className="text-xs tracking-[0.3em] text-neutral-400 uppercase">
        404 Error
      </p>
      <h1 className="mt-4 text-3xl leading-tight font-semibold text-balance sm:text-4xl">
        Page Not Found
      </h1>
    </hgroup>
    <p className="mt-2 text-base text-neutral-300">
      Sorry, the page you are looking for does not exist or has been moved.
    </p>

    <div className="mt-10 flex items-center justify-center">
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/70 px-5 py-2 text-sm font-semibold text-neutral-100 transition hover:border-neutral-700 hover:bg-neutral-900"
      >
        Back to Home
      </Link>
    </div>
  </div>
);

export default NotFound;
