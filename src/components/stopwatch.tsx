"use client";
import { useEffect, useState, type FC } from "react";
import { StopwatchDisplay } from "~/components/stopwatch-display";
import { tw } from "~/utils/tw";

const btnBase = tw(
  "w-32 rounded-full px-8 py-3 text-sm font-semibold tracking-wide uppercase transition-colors",
);

const STORAGE_KEY = "stopwatch:milliseconds";

export const Stopwatch: FC = () => {
  const [initialized, setInitialized] = useState(false);
  const [milliseconds, setMilliseconds] = useState(0);
  const [stopped, setStopped] = useState(true);

  useEffect(() => {
    const keyValue = window.localStorage.getItem(STORAGE_KEY) ?? "0";
    const parsed = window.parseInt(keyValue, 10);

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMilliseconds(window.isNaN(parsed) ? 0 : parsed);
    setInitialized(true);
  }, []);

  useEffect(() => {
    let timerId = 0;

    if (stopped) {
      window.clearInterval(timerId);
    } else {
      timerId = window.setInterval(() => {
        setMilliseconds((value) => value + 10);
      }, 10);
    }

    return () => {
      if (timerId > 0) window.clearInterval(timerId);
    };
  }, [stopped]);

  useEffect(() => {
    if (stopped) {
      window.localStorage.setItem(STORAGE_KEY, milliseconds.toString());
    }
  }, [milliseconds, stopped]);

  return (
    <div
      aria-hidden={!initialized}
      className={tw(
        "mx-auto flex flex-col items-center gap-10",
        "rounded-3xl bg-white px-16 py-14 shadow-xl",
        "ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-700",
        initialized ? "opacity-100" : "pointer-events-none opacity-0",
        "transition-opacity duration-1000",
      )}
    >
      <h1
        className={tw(
          "text-xs font-semibold tracking-widest uppercase",
          "text-slate-600 dark:text-slate-400",
        )}
      >
        Stopwatch
      </h1>
      <StopwatchDisplay milliseconds={milliseconds} />
      <div className="flex gap-4">
        {stopped ? (
          <button
            type="button"
            onClick={() => setStopped(false)}
            className={tw(
              btnBase,
              "bg-emerald-700 text-white hover:bg-emerald-800 active:bg-emerald-900",
            )}
          >
            {milliseconds === 0 ? "Start" : "Resume"}
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setStopped(true)}
            className={tw(
              btnBase,
              "bg-rose-700 text-white hover:bg-rose-800 active:bg-rose-900",
            )}
          >
            Stop
          </button>
        )}
        <button
          type="button"
          aria-disabled={stopped && milliseconds === 0}
          onClick={() => {
            if (stopped && milliseconds === 0) return;
            setStopped(true);
            setMilliseconds(0);
          }}
          className={tw(
            btnBase,
            stopped && milliseconds === 0
              ? [
                  "cursor-not-allowed border border-slate-200",
                  "bg-white text-slate-300",
                  "dark:border-slate-800 dark:bg-slate-900 dark:text-slate-700",
                ]
              : [
                  "border border-slate-300 bg-white text-slate-500",
                  "hover:bg-slate-100 hover:text-slate-700 active:bg-slate-200",
                  "dark:border-slate-600 dark:bg-slate-900 dark:text-slate-400",
                  "dark:hover:bg-slate-800 dark:hover:text-slate-200",
                ],
          )}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
