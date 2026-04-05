import type { FC } from "react";

type Props = {
  milliseconds: number;
};

export const StopwatchDisplay: FC<Props> = ({ milliseconds }) => {
  const hours = Math.floor(milliseconds / 3600000);
  const minutes = Math.floor((milliseconds % 3600000) / 60000);
  const seconds = Math.floor((milliseconds % 60000) / 1000);
  const centiseconds = Math.floor((milliseconds % 1000) / 10);

  const fmt = (n: number, digits = 2) => String(n).padStart(digits, "0");

  return (
    <div className="font-mono text-7xl font-light tracking-tight text-slate-800 tabular-nums dark:text-slate-100">
      <span>{fmt(hours)}</span>
      <span className="opacity-40">:</span>
      <span>{fmt(minutes)}</span>
      <span className="opacity-40">:</span>
      <span>{fmt(seconds)}</span>
      <span className="opacity-40">.</span>
      <span className="text-5xl">{fmt(centiseconds)}</span>
    </div>
  );
};
