import type { Metadata } from "next";
import Link from "next/link";
import type { FC } from "react";

export const metadata: Metadata = {
  title: "Page Not Found",
};

const NotFound: FC = () => (
  <div className="flex flex-col items-center justify-center gap-6 text-center">
    <hgroup className="flex flex-col gap-2">
      <p className="text-sm font-semibold tracking-widest text-blue-400 uppercase">
        404 Error
      </p>
      <h1 className="text-4xl font-bold">Page Not Found</h1>
    </hgroup>
    <p className="max-w-sm text-gray-400">
      Sorry, the page you are looking for does not exist or has been moved.
    </p>
    <Link
      href="/"
      className="rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-600 focus-visible:outline-blue-400"
    >
      Back to Home
    </Link>
  </div>
);

export default NotFound;
