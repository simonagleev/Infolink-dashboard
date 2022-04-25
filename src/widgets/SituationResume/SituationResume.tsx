import * as React from "react";
import { useRef, useLayoutEffect } from "react";
import { makeStyles } from "@mui/styles";

import { lighten } from "@mui/material";

import Paper from "@mui/material/Paper";

import Toolbar from "./Toolbar";
import BottomFade from "./BottomFade";
import classNames from "classnames";

interface ISituationResumeProps {
  data: any;
  className?: string;
  style?: React.CSSProperties;
}

const useStyles = makeStyles({
  root: {
    padding: 5,
    position: "relative",
  },
  content: {
    paddingLeft: 5,
    paddingRight: 5,
    "& *": {
      fontSize: "12.5px !important",
      color: 'white',
    },
    height: "calc(100% - 55px)",
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

export const SituationResume = ({ data, className, style }: ISituationResumeProps) => {
  const classes = useStyles();
  const elementRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const { current } = elementRef;
    if (current) {
      current.querySelectorAll("*").forEach((el) => {
        const { color } = getComputedStyle(el);
        if (color !== "rgb(0, 0, 0)" && !color.includes("rgba(0, 0, 0")) {
          (el as HTMLSpanElement).style.background = '#424242'//lighten(color, 0.9);
        } else {
          (el as HTMLSpanElement).style.color = 'white';
        }
      });
    }
  }, [data.resume]);
  return (
    <Paper className={classNames(classes.root, className)} style={style}>
      <Toolbar
        leadingIcon={data.dynamic.src}
        trailingIcon={data.indicator.src}
        title={data.header}
        style={{ background: '#424242', marginTop: -5, marginLeft: -5, marginRight: -5 }}
      />
      <div
        ref={elementRef}
        className={classes.content}
        dangerouslySetInnerHTML={{ __html: processTextDecoration(data.resume) }}
      />
      {/*<BottomFade dataRef={elementRef} />*/}
    </Paper>
  );
};

export default SituationResume;
