import * as React from "react";

interface IDownBraceProps {
  height?: number;
  width?: number;
}

export const DownBrace = ({
  height = 18,
  width = 288,
  className,
}: IDownBraceProps & JSX.IntrinsicElements["svg"]) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 288 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 0C1 0 1 9.94444 8.88966 9.94444H134.138C141.534 9.94444 144 15.9028 144 15.9028C144 15.9028 146.466 9.94444 153.862 9.94444H279.11C287 9.94444 287 0 287 0"
      stroke="#AC92ED"
    />
  </svg>
);

export default DownBrace;
