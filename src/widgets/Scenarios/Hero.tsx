import * as React from "react";
import { useState, useRef } from "react";

/* eslint-disable no-empty-pattern */

import classNames from "classnames";

import { makeStyles } from "@mui/styles";

import { useDebounce } from "use-debounce";

import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import BottomFade from "./BottomFade";

const useStyles = makeStyles({
  root: {
    overflow: "hidden",
    "& button.MuiButtonBase-root.MuiTab-root": {
      borderBottom: "2px solid #dbdbdb",
      marginTop: 2,
      marginLeft: 2,
      marginRight: 2,
    },
    '& .MuiTabs-root': {
      minHeight: '42px !important',
      maxHeight: '42px !important',
    }
  },
  item: {
    position: "relative",
    height: "calc(100% - 47px)",
  },
  content: {
    position: "absolute",
    top: 5,
    left: 5,
    right: 5,
    bottom: 5,
    height: "calc(100% - 10px)",
    width: "calc(100% - 10px)",
    overflow: "hidden",
    overflowY: "auto",
  },
  noMinWidth: {
    minWidth: "unset",
  },
  centered: {
    marginTop: -5,
    "& span[class*=PrivateTabIndicator]": {
      backgroundColor: "#4FC0E8 !important",
    },
    "& div[class*=flexContainer]": {
      justifyContent: "center",
    },
    "& span[class*=wrapper]": {
      fontWeight: 700,
      fontSize: 14,
      color: "#656D78",
      marginTop: 5,
    },
  },
  line: {
    width: "100%",
    height: 2,
    background: "#dbdbdb",
    marginTop: -2
  },
});

interface IHeroProps {
  tabs: {
    label: string;
    element: JSX.Element;
  }[];
  minWidth?: boolean;
  centered?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const Hero = ({
  tabs,
  minWidth = true,
  centered = false,
  className,
  style,
}: IHeroProps) => {
  const classes = useStyles();
  const contentRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(1);

  const [indexD] = useDebounce(index, 100);

  const handleTabChange = (...args: any[]) => {
    const [newValue] = args.slice(1);
    setIndex(newValue);
  };

  return (
    <Paper className={classNames(classes.root, className)} style={style}>
      <Tabs
        value={index}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleTabChange}
        className={classNames({
          [classes.centered]: centered,
        })}
      >
        {tabs.map(({ label }, idx) => (
          <Tab
            key={idx}
            label={label}
            className={classNames({
              [classes.noMinWidth]: !minWidth,
            })}
          />
        ))}
      </Tabs>
      <div className={classes.line} />
      <div
        className={classes.item}
        aria-labelledby={`scrollable-force-tab-${indexD}`}
      >
        <div ref={contentRef} className={classes.content}>
          {tabs.find(({}, idx) => idx === indexD)?.element}
        </div>
        {/*<BottomFade dataRef={contentRef} />*/}
      </div>
    </Paper>
  );
};

export default Hero;
