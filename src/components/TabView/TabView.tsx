import * as React from "react";
import { useState, useRef } from "react";

import { FadeView } from 'react-declarative'

import classNames from "classnames";

import { makeStyles } from "@mui/styles";

import { useDebounce } from "use-debounce";

import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const useStyles = makeStyles({
  root: {
    overflow: "hidden",
    "& button.MuiButtonBase-root.MuiTab-root": {
      borderBottom: "2px solid #dbdbdb",
      marginTop: 4,
      marginLeft: 2,
      marginRight: 2,
    },
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
  const [index, setIndex] = useState(0);

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
      <FadeView className={classes.content} disableRight>
        {tabs.find(({}, idx) => idx === indexD)?.element!}
      </FadeView>
    </Paper>
  );
};

export default Hero;
