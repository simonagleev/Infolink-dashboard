import * as React from "react";
import { makeStyles } from "@mui/styles";
import { forwardRef } from "react";

import classNames from "classnames";

import { formatSum } from "../utils/format";

interface IBottomBlockProps {
  className?: string;
  style?: React.CSSProperties;
  data: any;
}

const useStyles = makeStyles(() => ({
  root: {},
  grid: {
    display: "grid",
    gridTemplateColumns: "auto 1fr auto 1fr",
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
}));

export const BottomBlock = forwardRef(
  (
    { data, className, style }: IBottomBlockProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const classes = useStyles();

    const keys = [
      "risks",
      "income",
      "penalty",
      "inwork",
      "penaltyRisk",
      "riskShortfall",
    ];

    return (
      <div className={classNames(className, classes.root)}>
        <div className={classes.grid} style={style} ref={ref}>
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
                  <span style={{ fontSize: 13 }}>
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
            <span style={{ color: "#6D7865", fontSize: 13 }}>
              на {data.overflowRisk.percent}% -{" "}
              {formatSum(data.overflowRisk.sum)}{" "}
              {!String(data.overflowRisk.sum).includes("₽") && " ₽"}
            </span>
          </div>
          {/*<ImagePlacer
            style={{ height: 35, width: 35 }}
            src={data.dynamic.icon.src}
            />*/}
          <div>
            <h3
              style={{
                color: "#656D78",
                margin: 0,
                fontSize: 14,
              }}
            >
              {data.dynamic.name}
            </h3>
            <h4 style={{ margin: 0, color: "#6D7865", fontWeight: 300 }}>
              {data.dynamic.sum}
            </h4>
          </div>
        </div>
      </div>
    );
  }
);

export default BottomBlock;
