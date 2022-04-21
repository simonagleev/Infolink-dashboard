import * as React from "react";
import { makeStyles } from "@mui/styles";

interface INumberProps {
  children: string;
}

const useStyles = makeStyles({
  root: {
    position: "relative",
    background: "#B4BFCE",
    borderRadius: "50%",
    minHeight: 25,
    minWidth: 25,
    maxHeight: 25,
    maxWidth: 25,
    margin: 5,
  },
  content: {
    position: "absolute",
    top: 2,
    left: 2,
    right: 2,
    bottom: 2,
    background: "#fff",
    color: "#8C96A4",
    fontWeight: "bold",
    fontSize: 14,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const Number = ({ children }: INumberProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default Number;
