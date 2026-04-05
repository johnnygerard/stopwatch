"use client";
import { useEffect, useState, type FC } from "react";
import { StopwatchDisplay } from "~/components/stopwatch-display";

export const Stopwatch: FC = () => {
  const [milliseconds, setMilliseconds] = useState(0);
  const [stopped, setStopped] = useState(true);

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

  return (
    <div>
      {stopped ? (
        <button type="button" onClick={() => setStopped(false)}>
          {milliseconds === 0 ? "Start" : "Resume"}
        </button>
      ) : (
        <button type="button" onClick={() => setStopped(true)}>
          Stop
        </button>
      )}
      <button
        type="button"
        onClick={() => {
          setStopped(true);
          setMilliseconds(0);
        }}
      >
        Reset
      </button>
      <StopwatchDisplay milliseconds={milliseconds} />
    </div>
  );
};
