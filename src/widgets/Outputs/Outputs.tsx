import * as React from "react";
import { useRef, useLayoutEffect } from "react";
import { makeStyles } from "@mui/styles";

import { lighten } from "@mui/material";

import classNames from "classnames";

import Paper from "@mui/material/Paper";
import Toolbar from "./Toolbar";

import BottomFade from "./BottomFade";

interface IOutputsProps {
  data: {
    name: string;
    responsible: string;
    statusColor: string;
    status: string;
    resume: string;
  };
  className?: string;
  style?: React.CSSProperties;
}

const useStyles = makeStyles({
  root: {
    overflow: "hidden",
    padding: 5,
  },
  content: {
    "& *": {
      fontSize: "12.5px !important",
    },
    maxHeight: "calc(100% - 90px)",
    overflow: "hidden",
    overflowY: "scroll",
  },
});

const processTextDecoration = (text: string) => {
  const replace = (text: string, from: string, to: string) =>
    text.split(from).join(to);
  let patched = text;
  patched = replace(patched, "&lt;", "<");
  patched = replace(patched, "&gt;", ">");
  patched = replace(patched, "<text-spacer>", "<text-spacer></text-spacer>");
  return patched;
};

export const Outputs = ({ data, className, style }: IOutputsProps) => {
  const classes = useStyles();
  const elementRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const { current } = elementRef;
    if (current) {
      current.querySelectorAll("*").forEach((el) => {
        const { color } = getComputedStyle(el);
        if (color !== "rgb(0, 0, 0)" && !color.includes("rgba(0, 0, 0")) {
          (el as HTMLSpanElement).style.background = lighten(color, 0.9);
        }
      });
    }
  }, [data.resume]);

  return (
    <Paper className={classNames(className, classes.root)} style={style}>
      <Toolbar title={`${data.name} (${data.responsible})`} />
      <div style={{ display: "inline-block" }}>
        <h3
          style={{
            backgroundColor: data.statusColor,
            borderRadius: 25,
            fontSize: 12,
            padding: 5,
            paddingRight: 10,
            paddingLeft: 10,
            fontWeight: 400,
            color: "white",
            textAlign: "center",
            margin: 0,
            marginBottom: 10,
          }}
        >
          {String(data.status).toUpperCase()}
        </h3>
      </div>
      <div className={classes.content}>
        <div
          ref={elementRef}
          dangerouslySetInnerHTML={{
            __html: processTextDecoration(data.resume),
          }}
        />
        <BottomFade />
      </div>
    </Paper>
  );
};

export default Outputs;
