import type { FC } from "react";

type Props = {
  milliseconds: number;
};

export const StopwatchDisplay: FC<Props> = ({ milliseconds }) => {
  return <div>{(milliseconds / 1000).toFixed(2)}s</div>;
};
