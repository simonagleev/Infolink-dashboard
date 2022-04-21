import * as React from "react";
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "stretch",
    position: "relative",
    height: 35,
    "& > span": {
      flex: 1,
      textAlign: "center",
      color: "rgba(0, 0, 0, 0.54)",
    },
  },
  leadingIcon: {
    position: "absolute",
    left: 0,
    bottom: 0,
    top: 0,
    width: 48,
  },
  trailingIcon: {
    position: "absolute",
    right: 0,
    bottom: 0,
    top: 0,
    width: 48,
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& img": {
      height: 32,
      width: 32,
    },
  },
  line: {
    width: "100%",
    height: 2,
    background: "#dbdbdb",
    marginBottom: 15,
  },
  text: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 35,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

interface IToolbarProps {
  leadingIcon?: string;
  trailingIcon?: string;
  title?: string;
}

export const Toolbar = ({
  leadingIcon,
  trailingIcon,
  title,
}: IToolbarProps) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        {leadingIcon && (
          <Box className={classes.box}>
            {/*<ImagePlacer className={classes.leadingIcon} src={leadingIcon} />*/}
          </Box>
        )}
        <div className={classes.text}>
          <span
            style={{
              fontWeight: 700,
              fontSize: 14,
              color: "#656D78",
              maxWidth: "calc(100% - 64px)",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </span>
        </div>
        {trailingIcon && (
          <Box className={classes.box}>
            {/*<ImagePlacer className={classes.trailingIcon} src={trailingIcon} />*/}
          </Box>
        )}
      </div>
      <div className={classes.line} />
    </>
  );
};

export default Toolbar;
