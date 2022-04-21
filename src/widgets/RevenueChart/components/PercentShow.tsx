import * as React from "react";
import { makeStyles } from "@mui/styles";

import classNames from "classnames";

import { formatSum } from "../utils/format";

interface IPercentShowProps {
  style?: React.CSSProperties;
  className?: string;
  data: any;
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    "& > :nth-child(1)": {
      display: "flex",
      alignItems: "flex-end",
    },
    "& > :nth-child(2)": {
      "& h3": {
        color: "#656D78",
        margin: 0,
      },
      "& span": {
        color: "#9AA4B3",
      },
    },
  },
});

export const PercentShow = ({
  data,
  style = {},
  className,
}: IPercentShowProps) => {
  const classes = useStyles();
  return (
    <div
      className={classNames(classes.root, className)}
      style={{ color: data.color, ...style }}
    >
      <div style={{ marginRight: 5 }}>
        <h1 style={{ margin: 0 }}>{data.percent}</h1>
        <h3 style={{ margin: 0, marginBottom: 4 }}>%</h3>
      </div>
      <div>
        <h3>{data.name}</h3>
        <span>
          {formatSum(data.sum)}
          {!String(data.sum).includes("₽") && " ₽"}
        </span>
      </div>
    </div>
  );
};

export default PercentShow;
