import * as React from "react";

import { makeStyles, withStyles } from "@mui/styles";
import LinearProgress from "@mui/material/LinearProgress";
import Tooltip from "@mui/material/Tooltip";

import { AutoSizer } from 'react-declarative';

const BAR_HEIGHT = 10;
const LABEL_WIDTH = 50;

interface IDimension {
  color: string;
  title: string;
  value: number;
}

interface IColorProgressBarProps {
  data: {
    done: IDimension;
    inWork: IDimension;
    notDone: IDimension;
    offset: IDimension;
  }
}

const percent = (v: number, m = 100) =>
  Math.min(100, Math.round((Math.max(Number(v), 0) / m) * 100));

const createProgressBar = (color: string, zIndex: number) =>
  withStyles({
    root: {
      height: `${BAR_HEIGHT}px !important`,
      zIndex: `${zIndex} !important`,
    },
    colorPrimary: {
      backgroundColor: "transparent !important",
    },
    bar: {
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
      backgroundColor: `${color} !important`,
    },
  })(LinearProgress);

const useStyles = makeStyles({
  root: {
    position: "relative",
    height: BAR_HEIGHT,
    flex: 1,
  },
  bar: {
    position: "absolute !important" as "absolute",
    top: 0,
    left: 0,
    right: 10,
  },
});

export const ColorProgressBar = (props: IColorProgressBarProps) => {
  const classes = useStyles();

  const keys = ["notDone", "offset", "done", "inWork"];

  const getColor = (key: string) => (props.data as any)[key]?.color;
  const getValue = (key: string) => (props.data as any)[key]?.value;
  const getTitle = (key: string) => (props.data as any)[key]?.title;

  const getPrevIndexCoef = (currentKey: string, key: string) => {
    const prevKeys = keys.slice(0, keys.indexOf(currentKey));
    return prevKeys.indexOf(key);
  };

  const tooltip = keys
    .map((k) => {
      const value = getValue(k);
      const title = getTitle(k) || k;
      return `${title} - ${value}%`;
    })
    .join(" | ");

  const items = keys.map((key) => {
    const color = getColor(key);
    const value = getValue(key);
    return {
      color,
      value,
      key,
    };
  });

  const progress = items
    .map(({ color, value, key }, idx) => {
      let fix = 0;
      if (idx !== 0) {
        for (let i = idx - 1; i >= 0; i--) {
          fix += getValue(keys[i]);
        }
      }
      return {
        value: value > 0 ? value + fix : value,
        key,
        color,
      };
    })
    .sort(({ value: a }, { value: b }) => b - a);

  const total = Math.max(...progress.map(({ value }) => value));

  return (
    <AutoSizer className={classes.root}>
      {({ width }) => (
        <Tooltip title={tooltip} arrow>
          <div>
            {progress.map(({ color, value: curValue, key }, idx) => {
              const Bar = createProgressBar(color, idx + 1);
              const percentValue = percent(curValue, total);

              const labelStyle: React.CSSProperties = {
                display: "none",
                position: "absolute",
                marginLeft: -LABEL_WIDTH / 2,
                textAlign: "center",
                width: LABEL_WIDTH,
                left: 0,
                top: 10,
                color,
              };

              const prevItems = progress
                .filter(({ value }) => value !== 0)
                .sort(
                  ({ key: a }, { key: b }) =>
                    getPrevIndexCoef(key, b) - getPrevIndexCoef(key, a)
                );

              const prevValue = prevItems.length
                ? getPrevIndexCoef(key, prevItems[0].key) !== -1
                  ? prevItems[0].value
                  : 0
                : 0;

              if (curValue !== 0) {
                const leftMarginAdjust = (prevValue / 100) * width;
                const leftCenterAdjust =
                  (((curValue - prevValue) / 100) * width) / 2;
                labelStyle.display = "block";
                labelStyle.left = leftMarginAdjust + leftCenterAdjust;
              }

              return (
                <React.Fragment key={idx}>
                  <Bar
                    variant="determinate"
                    className={classes.bar}
                    value={percentValue}
                  />
                  <span style={labelStyle}>{getValue(key).toFixed()}%</span>
                </React.Fragment>
              );
            })}
          </div>
        </Tooltip>
      )}
    </AutoSizer>
  );
};

export default ColorProgressBar;
