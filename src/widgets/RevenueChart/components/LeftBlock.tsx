import * as React from "react";
import { makeStyles } from "@mui/styles";

import { formatSum } from "../utils/format";

import classNames from "classnames";

import DownBrace from "./DownBrace";
import PercentShow from "./PercentShow";

interface ILeftBlockProps {
  style?: React.CSSProperties;
  className?: string;
  data: any;
}

const useStyles = makeStyles({
  root: {},
  grid: {
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    marginLeft: 10,
    gridGap: 10,
  },
  percentLabel: {
    display: "flex",
    alignItems: "flex-start",
    "& > *": {
      margin: 0,
    },
    "& > h3": {
      marginTop: 12,
    },
  },
  percentValue: {
    "& h3": {
      color: "#656D78",
      margin: 0,
    },
    "& span": {
      color: "#6D7865",
    },
  },
  downBrace: {
    position: "absolute",
    top: 35,
    left: 10,
  },
  line: {
    position: "absolute",
    top: 205,
    left: 10,
    background: "#c0c0c0",
  },
});

export const LeftBlock = ({ data, style = {}, className }: ILeftBlockProps) => {
  const classes = useStyles();

  const keys = ["risks", "penalty", "penaltyRisk", "riskShortfall"];

  return (
    <div
      className={classNames(className, classes.root)}
      style={{ width: 260, ...style }}
    >
      <div className={classes.grid} style={style}>
        {keys.map((k, idx) => {
          const { percent, color, name, sum } = data[k];
          const symbol = !String(sum).includes("₽") && " ₽";
          return (
            <React.Fragment key={idx}>
              <div className={classes.percentLabel} style={{ color }}>
                <h1>{percent}</h1>
                <h3>%</h3>
              </div>
              <div className={classes.percentValue} style={{ color }}>
                <h3>{name}</h3>
                <span>
                  {formatSum(sum)}
                  {symbol}
                </span>
              </div>
            </React.Fragment>
          );
        })}
        {/*<ImagePlacer
          style={{ height: 35, width: 35 }}
          src={data.overflowRisk.icon.src}
        />*/}
        <div>
          <h3
            style={{
              color: data.overflowRisk.color,
              margin: 0,
            }}
          >
            {data.overflowRisk.name}
          </h3>
          <span style={{ color: "#6D7865" }}>
            на {data.overflowRisk.percent}% - {formatSum(data.overflowRisk.sum)}{" "}
            {!String(data.overflowRisk.sum).includes("₽") && " ₽"}
          </span>
        </div>
      </div>
      <DownBrace className={classes.downBrace} width={220} />
      <div style={{ width: 220, height: 1 }} className={classes.line} />
    </div>
  );
}

export default LeftBlock;
