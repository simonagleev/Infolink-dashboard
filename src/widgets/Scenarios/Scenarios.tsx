import * as React from "react";
import { makeStyles } from "@mui/styles";

import Hero from "./Hero";

import First from "./tabs/First";
import Third from "./tabs/Third";
import Second from "./tabs/Second";

import classNames from "classnames";

interface IScenariosProps {
  className?: string;
  style?: React.CSSProperties;
  data: any;
}

const useStyles = makeStyles({
  root: {},
});

export const Scenarios = ({ data, className, style }: IScenariosProps) => {
  const classes = useStyles();

  const tabs = [
    {
      label: "Scenario",
      element: <First data={data} />,
    },
    {
      label: "Criteria",
      element: <Second data={data} />,
    },
    {
      label: "Stages",
      element: <Third data={data} />,
    },
  ];

  return (
    <Hero
      className={classNames(classes.root, className)}
      style={style}
      tabs={tabs}
      centered={true}
      minWidth={false}
    />
  );
};

export default Scenarios;
