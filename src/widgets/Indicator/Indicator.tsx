import * as React from "react";
import { useState } from "react";

import { makeStyles } from "@mui/styles";

import classNames from "classnames";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import IndicatorCommunications from "../../icons/IndicatorCommunications";
import IndicatorScope from "../../icons/IndicatorScope";
import IndicatorResources from "../../icons/IndicatorResources";
import IndicatorBek from "../../icons/IndicatorBek";
import IndicatorDeadline from "../../icons/IndicatorDeadline";
import IndicatorBudget from "../../icons/IndicatorBudget";
import IndicatorQuality from "../../icons/IndicatorQuality";

import ImportExport from '@mui/icons-material/ImportExport';
import ArrowDown from "@mui/icons-material/ArrowDownward";
import ArrowUp from "@mui/icons-material/ArrowUpward";
import Remove from "@mui/icons-material/RemoveCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import AssignsProblemsModal from "../../common/AssignsProblemsModal";

const useStyles = makeStyles({
  root: {
    position: "relative",
    display: "flex",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
    minHeight: 190,
    padding: 5,
    cursor: "pointer",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    marginTop: 10,
  },
  subtitle: {
    lineHeight: 1,
    marginTop: -10,
    textAlign: "center",
    fontWeight: "lighter",
    color: "white",
    fontSize: 14,
  },
  logo: {
    padding: 5,
    marginTop: 5,
    marginBottom: -5,
  },
  desc: {
    position: "absolute",
    background: "white",
    color: "gray",
    // paddingLeft: 30,
    // paddingRight: 30,
    // paddingBottom: 10,
    height: 50,
    zIndex: 9,
    bottom: 0,
    right: 0,
    left: 0,
    display: "flex",
    alignItems: "stretch",
    justifyContent: "stretch",
  },
  text: {
    flex: 1,
    fontSize: 12.5,
    display: "flex",
    alignItems: "center",
  },
  arrow: {
    minWidth: 35,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  noMargin: {
    margin: 0,
    "& *": {
      margin: 0,
    },
  },
});

interface IIndicatorProps {
  className?: string;
  data: any;
  colors: any;
  reverse?: boolean;
}

const Icon = new Map<string, JSX.Element>(
  Object.entries({
    indicator_communications: <IndicatorCommunications />,
    indicator_scope: <IndicatorScope />,
    indicator_resources: <IndicatorResources />,
    indicator_bek: <IndicatorBek />,
    indicator_deadline: <IndicatorDeadline />,
    indicator_budget: <IndicatorBudget />,
    indicator_quality: <IndicatorQuality />,
  })
);

export const Indicator = ({
  className,
  data: {
    color,
    name,
    icon: { src: iconType },
    dynamic: { src: dynamicSrc },
    modal,
    text,
    text2,
  },
  colors,
  reverse = false,
}: IIndicatorProps) => {
  const [showModal, setShowModal] = useState(false);
  const classes = useStyles();

  /**
   * Mobx хранит массивы следующим образом
   * {0: {…}, 1: {…}}
   */
  const modalList: any[] = modal ? Object.values(modal) : [];

  const handleToggle = () => {
    if (modalList.length) {
      setShowModal(!showModal);
    }
  };

  const colorMap: Record<string, string> = Object.values<any>(colors).reduce(
    (acm: any, { statusCode, color }: any) => ({
      ...acm,
      [statusCode]: color,
    }),
    {}
  );

  return (
    <div className={classNames(classes.root, className)}>
      <AssignsProblemsModal
        title={`${name}. Проблемы и поручения`}
        open={showModal}
        onAccept={() => setShowModal(false)}
        items={modalList}
        color={color}
        assignmentFn={(a) => ({
          title: a.assignmentNumber,
          description: a.description,
          assigmentInfo: {
            color: colorMap[a.statusCode],
            status: a.status,
            responsible: a.responsible,
            deadline: a.deadline,
          },
        })}
        modalFn={(m) => ({
          title: `Проблема ${m.number}`,
          description: `${m.description}`,
          assignments: m.assignments,
          isNew: m.isNew,
        })}
      />
      <Paper
        className={classes.root}
        style={{
          background: color,
        }}
        onClick={handleToggle}
      >
        <Typography
          style={reverse ? { order: 3, marginTop: 0 } : {}}
          className={classes.title}
          variant="body1"
        >
          {name}
        </Typography>
        <div className={classes.logo}>{Icon.get(iconType)}</div>
        <Typography className={classes.subtitle} variant="subtitle1">
          <pre
            style={{
              maxWidth: 190,
              overflow: "hidden",
              whiteSpace: "break-spaces",
            }}
          >
            {text}
          </pre>
        </Typography>
        <div className={classes.desc}>
          <div className={classes.arrow}>
            {dynamicSrc.includes("updown") ? (
              <ImportExport />
            ) : dynamicSrc.includes("up") ? (
              <ArrowUp />
            ) : dynamicSrc.includes("down") ? (
              <ArrowDown />
            ) : dynamicSrc.includes("minus") ? (
              <Remove />
            ) : dynamicSrc.includes("stop_dash") ? (
              <RemoveCircleOutlineIcon />
            ) : (
              <></>
            )}
          </div>
          <div className={classes.text}>
            <pre
              style={{
                maxWidth: 150,
                overflow: "hidden",
                whiteSpace: "break-spaces",
              }}
            >
              {text2}
            </pre>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Indicator;