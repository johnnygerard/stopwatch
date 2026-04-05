import type { FC } from "react";
import { Stopwatch } from "~/components/stopwatch";

const HomePage: FC = () => (
  <>
    <noscript>
      <p className="mx-auto max-w-prose px-4 text-center text-pretty text-slate-600">
        This stopwatch requires JavaScript to operate. Please ensure that it is
        supported and enabled in your browser settings. To learn more, check out{" "}
        <a
          className="underline hover:text-slate-900"
          href="https://www.enable-javascript.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          How to enable JavaScript in your browser
        </a>
        .
      </p>
    </noscript>
    <Stopwatch className="noscript:hidden" />
  </>
);
export default HomePage;
