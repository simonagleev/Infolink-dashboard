import * as React from "react";

export interface ICircleProps {
  progress: {
    value: number;
    color: string;
  }[];
  bgColor?: string;
  size?: string;
  lineWidth?: string;
  roundedStroke?: boolean;
  responsive?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const radius = 175;
const diameter = Math.round(Math.PI * radius * 2);
const getOffset = (val = 0) =>
  Math.round(((100 - Math.min(val, 100)) / 100) * diameter);

export const Circle = ({
  progress = [],
  bgColor = "#ecedf0",
  size = "100",
  lineWidth = "25",
  roundedStroke,
  responsive,
  style,
  className,
}: ICircleProps) => {
  const strokeLinecap = roundedStroke ? "round" : "butt";
  const svgSize = responsive ? "100%" : size;

  return (
    <svg
      className={className}
      style={style}
      width={svgSize}
      height={svgSize}
      viewBox="-25 -25 400 400"
    >
      <circle
        stroke={bgColor}
        cx="175"
        cy="175"
        r="175"
        strokeWidth={lineWidth}
        fill="none"
      />
      {progress.map(({ value, color }, idx) => {
        const strokeDashoffset = getOffset(value);
        return (
          <circle
            key={idx}
            stroke={color}
            transform="rotate(-90 175 175)"
            cx="175"
            cy="175"
            r="175"
            strokeDasharray="1100"
            strokeWidth={lineWidth}
            strokeDashoffset="1100"
            strokeLinecap={strokeLinecap}
            fill="none"
            style={{ strokeDashoffset }}
          />
        );
      })}
    </svg>
  );
};

export default Circle;
