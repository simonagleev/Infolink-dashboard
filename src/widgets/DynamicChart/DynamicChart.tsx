import * as React from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";

import Paper from "@mui/material/Paper";

import Toolbar from "./Toolbar";
import StockChart from "./StockChart";
import IChartItem from "./IChartItem";

import getMomentStamp, {
  toStockDate,
  parse,
} from "../../utils/getMomentStamp";
import { Theme } from "@mui/material";
import classNames from "classnames";

const INFO_FULL_WIDTH = 155;
const INFO_SMALL_HEIGHT = 90;

interface IDynamicChartProps {
  className?: string;
  style?: React.CSSProperties;
  data: any;
}

const priorityMap: any = {
  contract: 5,
  scenario: 4,
  fact: 3,
  progress: 2,
  plan: 1,
};

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    position: "relative",
    overflow: "hidden",
    height: "100%",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      "& $content": {
        top: 35,
        left: 0,
        right: 0,
        bottom: INFO_SMALL_HEIGHT,
      },
      "& $info": {
        left: 0,
        right: 0,
        bottom: 0,
        top: `calc(100% - ${INFO_SMALL_HEIGHT}px + 35px)`,
        height: INFO_SMALL_HEIGHT,
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridRowGap: 0,
        padding: 10,
        paddingTop: 0,
      },
    },
  },
  content: {
    position: "absolute",
    overflow: "hidden",
    top: 35,
    left: 0,
    right: INFO_FULL_WIDTH,
    bottom: 0,
  },
  info: {
    position: "absolute",
    overflow: "hidden",
    top: 35,
    left: `calc(100% - ${INFO_FULL_WIDTH}px)`,
    right: 0,
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: -30,
    gap: 10,
    padding: 5,
  },
  item: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    "& > div": {
      height: 15,
      width: 15,
      borderRadius: 3,
    },
    "& > span": {
      flex: 1,
      color: "#656D78",
      fontSize: 11,
    },
  },
}));

const createItemList = (data: any) =>
  Object.values<any>(data)
    .filter((v) => v.code)
    .sort(({ code: a }, { code: b }) => priorityMap[b] - priorityMap[a]);

export const DynamicChart = ({ data, className, style }: IDynamicChartProps) => {
  const [stocks, setStocks] = useState<IChartItem[]>([]);
  const classes = useStyles();

  const itemList = createItemList(data);

  return (
    <Paper className={classNames(classes.root, className)} style={style}>
      <Toolbar title={"Burn rate"} />
      <StockChart className={classes.content} title="%" items={data} />
      <div className={classes.info}>
        {itemList.map((item: any, idx: number) => {
          return (
            <div className={classes.item} key={idx}>
              <div style={{ background: item.color }} />
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
    </Paper>
  );
};

export default DynamicChart;
