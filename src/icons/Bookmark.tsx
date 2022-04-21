import * as React from "react";

interface IBookmarkProps {
  style?: React.CSSProperties;
  color: string;
}

export const Bookmark = ({ color, style }: IBookmarkProps) => (
  <svg
    width="18"
    height="27"
    viewBox="0 0 18 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
  >
    <path
      d="M0 3H18V25.3005C18 26.063 17.1809 26.5449 16.5144 26.1746L9 22L1.48564 26.1746C0.819113 26.5449 0 26.063 0 25.3005V3Z"
      fill={color}
    />
  </svg>
);

export default Bookmark;
