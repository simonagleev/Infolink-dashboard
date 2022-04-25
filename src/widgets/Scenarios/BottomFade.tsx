import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { makeStyles } from "@mui/styles";
import classNames from "classnames";
import { debounce, Theme } from "@mui/material";

interface IBottomFadeProps {
  className?: string;
  dataRef?: React.RefObject<HTMLElement>;
  style?: React.CSSProperties;
}

const useStyles = makeStyles<Theme>((theme) => ({
  fade: {
    [theme.breakpoints.down("md")]: {
      position: "absolute",
      pointerEvents: "none",
      bottom: 0,
      height: 75,
      left: 0,
      right: 0,
      zIndex: 9,
      background: `linear-gradient(
                to bottom,
                #00000000,
                #000000
            )`,
    },
  },
  none: {
    display: "none",
  },
  visible: {
    animation: `$visible 500ms ${theme.transitions.easing.easeInOut}`,
    opacity: 1,
  },
  hidden: {
    animation: `$hidden 500ms ${theme.transitions.easing.easeInOut}`,
    opacity: 0,
  },
  "@keyframes visible": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
  "@keyframes hidden": {
    "0%": {
      opacity: 1,
    },
    "100%": {
      opacity: 0,
    },
  },
}));

export const BottomFade = ({ dataRef, className, style }: IBottomFadeProps) => {
  const classes = useStyles();
  const [classList, setClassList] = useState(new Set<string>([classes.fade]));
  const currentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const { current } = currentRef;
    const { parentElement } = current!;
    const element = dataRef?.current || parentElement;
    const update = debounce(() => {
      setClassList(new Set(classList));
    });
    const handleScroll = () => {
      const { scrollTop } = element!;
      if (scrollTop > 0) {
        classList.add(classes.hidden);
        classList.delete(classes.visible);
      } else {
        classList.add(classes.visible);
        classList.delete(classes.hidden);
      }
      update();
    };
    const handleResize = () => {
      const { scrollHeight, clientHeight } = element!;
      if (scrollHeight > clientHeight) {
        classList.delete(classes.none);
      } else {
        classList.add(classes.none);
      }
      update();
    };
    handleScroll();
    handleResize();
    element!.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      element!.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [classList]);
  return (
    <div
      ref={currentRef}
      className={classNames(className, ...(classList as any))}
      style={style}
    />
  );
};

export default BottomFade;
