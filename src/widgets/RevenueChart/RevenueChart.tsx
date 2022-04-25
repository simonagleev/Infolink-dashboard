import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

import Paper from "@mui/material/Paper";

import Toolbar from "./Toolbar";

import Chart from "./components/Chart";
import LeftBlock from "./components/LeftBlock";
import RightBlock from "./components/RightBlock";

import { formatSum } from "./utils/format";
import BottomBlock from "./components/BottomBlock";
import classNames from "classnames";

interface IRevenueChartProps {
  data: any;
  className?: string;
  style?: React.CSSProperties;
}

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    overflow: "hidden",
    padding: 5,
    "& $content": {
      alignItems: "flex-start",
    },
    "& $leftBlock": {
      display: "none",
    },
    "& $rightBlock": {
      display: "none",
    },
  },
  content: {
    position: "relative",
    height: "calc(100% - 75px)",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  chart: {
    position: "relative",
  },
  leftBlock: {
    position: "absolute",
    transform: "scale(0.9) translate(-15%, -10%)",
    left: 25,
    bottom: 0,
    height: "100%",
    width: "40%",
  },
  rightBlock: {
    position: "absolute",
    transform: "scale(0.9) translate(-45%, -10%)",
    right: -125,
    bottom: 0,
    height: "100%",
    width: "40%",
  },
  bottomBlock: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
  },
  label: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
}));

export const RevenueChart = ({ data, className, style }: IRevenueChartProps) => {
  const classes = useStyles();
  return (
    <Paper className={classNames(classes.root, className)} style={style}>
      <Toolbar style={{ background: '#424242', marginTop: -5, marginLeft: -5, marginRight: -5 }} title={data.header} />
      <div className={classes.content}>
        <LeftBlock className={classes.leftBlock} data={data} />
        <div className={classes.chart}>
          <Chart data={data} height={150} width={150}>
            <div className={classes.label}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  color: "#656D78",
                  fontWeight: 600,
                  fontSize: 13,
                  margin: 0,
                  marginTop: -10,
                  marginBottom: -5,
                }}
              >
                <h1 style={{ margin: 0 }}>100</h1>
                <h3 style={{ margin: 0, marginBottom: 4 }}>%</h3>
              </div>
              <p
                style={{
                  color: "#656D78",
                  fontWeight: 600,
                  fontSize: 13,
                  margin: 0,
                }}
              >
                Government
              </p>
              <p
                style={{
                  color: "#656D78",
                  fontWeight: 600,
                  fontSize: 13,
                  margin: 0,
                }}
              >
                contract
              </p>
              <i
                style={{
                  color: "#9AA4B3",
                  fontWeight: 600,
                  fontSize: 13,
                  margin: 0,
                }}
              >
                {`${formatSum(data.fullSum)} $`}
              </i>
            </div>
          </Chart>
        </div>
        <RightBlock className={classes.rightBlock} data={data} />
        <BottomBlock className={classes.bottomBlock} data={data} />
      </div>
    </Paper>
  );
};

export default RevenueChart;
