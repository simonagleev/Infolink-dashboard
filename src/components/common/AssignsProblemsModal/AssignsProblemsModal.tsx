import * as React from "react";
import Tooltip from '@mui/material/Tooltip';
import { makeStyles } from "@mui/styles";
import classNames from "classnames";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

import List from "@mui/material/core/List";
import ListItem from "@mui/material/core/ListItem";
import ListItemText from "@mui/material/core/ListItemText";
import ListItemSecondaryAction from "@mui/material/core/ListItemSecondaryAction";

import ModalDialog from "../ModalDialog";

import Bookmark from "../../widgets/ServicesReport/icons/Bookmark";
import ArrowIcon from "../../widgets/Indicator/icons/Icon";

import AccountCircle from "@mui/icons-material/AccountCircle";
import Schedule from "@mui/icons-material/Schedule";

const BORDER_WIDTH = 4;

interface IAssignmentItem {
  title: string;
  description: string;
  assigmentInfo?: {
    responsible: string;
    deadline: string;
    status?: string;
    color?: string;
  };
}

interface IModalItem {
  title: string;
  description: string;
  subtitle?: string;
  isNew: "true" | "false";
  assignments: any[];
}

interface IAssignsProblemsModalProps {
  open: boolean;
  color: string;
  title: string;
  onAccept?: () => void;
  items: IModalItem[] | any[];
  modalFn?: (arr: any, idx: number) => IModalItem;
  assignmentFn?: (arr: any, idx: number) => IAssignmentItem;
}

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("md")]: {
      minWidth: 540,
    },
    "& .MuiDialogContent-root:first-child": {
      padding: 0,
    },
    "& .MuiPaper-root": {
      minHeight: "80vh",
    },
    zIndex: 9999999999,
  },
  content: {
    position: "relative",
    padding: 0,
    height: 350,
    [theme.breakpoints.up("md")]: {
      minWidth: 540,
    },
    display: "flex",
    flexDirection: "column",
  },
  header: {
    flex: 1,
    background: "#f5f5f5",
    minHeight: 60,
    maxHeight: 60,
    display: "flex",
    alignItems: "center",
    padding: 0,
    paddingLeft: 15,
    zIndex: 999,
    borderBottom: "1px solid #dedede",
  },
  list: {
    overflowY: "scroll",
  },
  actions: {
    marginTop: -1,
  },
  listItem: {
    display: "flex",
    minHeight: 40,
    marginBottom: 10,
    marginTop: 10,
    flexWrap: "wrap",
    /*[theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
    },*/
    gap: 5,
    paddingLeft: 15,
    paddingRight: 15,
    "& > h2": {
      [theme.breakpoints.down("xs")]: {
        order: -1,
        flex: 1,
      },
      fontWeight: 600,
      fontSize: 14,
      margin: 0,
    },
    "& > span": {
      [theme.breakpoints.down("xs")]: {
        minWidth: "100%",
      },
      flex: 1,
      margin: 0,
    },
    "& > div": {
      width: "100%",
      fontSize: 12,
      fontWeight: 300,
    },
    "& > p": {
      [theme.breakpoints.down("xs")]: {
        order: -1,
      },
      display: "flex",
      alignItems: "center",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      color: "red",
      fontWeight: "bold",
      fontSize: 12,
      textAlign: "right",
      minWidth: 30,
      margin: 0,
    },
  },
  assigment: {
    display: "grid",
    gridTemplateColumns: "1fr auto",
    width: "100%",
    "& > span": {
      marginRight: 5,
    },
    marginBottom: 10,
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr",
      marginBottom: "unset",
      "& > $assigmentInfo": {
        maxWidth: "unset",
        "& > div > span": {
          maxWidth: 235,
        },
      },
      "& > span": {
        marginRight: "unset",
      },
    },
  },
  assigmentInfo: {
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    gridColumnGap: 5,
    minWidth: 175,
    maxWidth: 175,
    [theme.breakpoints.down("md")]: {
      "& $assigmentChipContent": {
        marginTop: 5,
      },
      marginLeft: -18,
    },
    "& > div": {
      display: "flex",
      alignItems: "center",
    },
    "& > div > span": {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      color: "#656D78",
      fontSize: 13,
      fontWeight: "400",
      maxWidth: 140,
    },
  },
  assigmentChip: {
    gridColumn: "1 / 3",
  },
  assigmentChipContent: {
    borderRadius: 25,
    fontSize: 12,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: 400,
    color: "white",
    textAlign: "center",
    width: "100%",
    maxWidth: 165,
  },
}));

const EmptyList = () => (
  <div
    style={{
      display: "flex",
      background: "#0000000d",
      paddingBottom: 10,
    }}
  >
    <ArrowIcon
      style={{
        height: 12,
        marginTop: 15,
        marginLeft: 15,
        marginRight: 7,
      }}
    />
    <div>
      <h2
        style={{
          fontWeight: 600,
          fontSize: 14,
          margin: 0,
          marginTop: 10,
          marginBottom: 5,
        }}
      >
        Нет поручений
      </h2>
    </div>
  </div>
);

export const AssignsProblemsModal = ({
  color,
  title,
  onAccept,
  open,
  items,
  modalFn = (v: any, idx: number) => v,
  assignmentFn = (v: any, idx: number) => v,
}: IAssignsProblemsModalProps) => {
  const classes = useStyles();
  const itemList = items ? Object.values(items) : [];

  const contentBorder: React.CSSProperties = {
    borderTop: `${BORDER_WIDTH}px solid ${color}`,
    borderLeft: `${BORDER_WIDTH}px solid ${color}`,
    borderRight: `${BORDER_WIDTH}px solid ${color}`,
  };

  const actionBorder: React.CSSProperties = {
    borderLeft: `${BORDER_WIDTH}px solid ${color}`,
    borderRight: `${BORDER_WIDTH}px solid ${color}`,
    borderBottom: `${BORDER_WIDTH}px solid ${color}`,
  };

  return (
    <Dialog className={classes.root} open={open}>
      <DialogContent className={classes.content} style={contentBorder} dividers>
        <div className={classes.header}>
          <Bookmark
            style={{
              marginTop: -1,
              marginRight: 5,
              transform: "scale(0.85)",
            }}
            color={color}
          />
          <span style={{ fontWeight: "bold", marginRight: 5 }}>{title}</span>
        </div>
        <div
          className={classNames(classes.list, "the-scroll-area__needScroll")}
        >
          {itemList.map(modalFn).map((item: IModalItem, idx: number) => {
            const assignmentList = item?.assignments
              ? Object.values(item?.assignments)
              : [];
            return (
              <React.Fragment key={idx}>
                <div className={classes.listItem}>
                  <h2>{item.title}</h2>
                  <span>{item.description}</span>
                  {!!item.subtitle && <div>{item.subtitle}</div>}
                  {item.isNew === "true" && <p>NEW</p>}
                </div>
                {!!assignmentList.length ? (
                  <div
                    style={{
                      display: "flex",
                      background: "#0000000d",
                      paddingBottom: 10,
                    }}
                  >
                    <ArrowIcon
                      style={{
                        height: 12,
                        marginTop: 15,
                        marginLeft: 15,
                        marginRight: 7,
                      }}
                    />
                    <div style={{ width: "100%" }}>
                      <h2
                        style={{
                          fontWeight: 600,
                          fontSize: 14,
                          margin: 0,
                          marginTop: 10,
                          marginBottom: 5,
                        }}
                      >
                        Поручения
                      </h2>
                      {assignmentList
                        .map(assignmentFn)
                        .map((a: IAssignmentItem, idx: number) => (
                          <div
                            key={idx}
                            style={{
                              display: "flex",
                              paddingBottom: 5,
                              gap: 3,
                            }}
                          >
                            <h2
                              style={{
                                fontWeight: 600,
                                fontSize: 14,
                                margin: 0,
                              }}
                            >
                              {idx + 1}.{" "}
                            </h2>
                            <div className={classes.assigment}>
                              <span>
                                {a.title} {a.description}
                              </span>
                              {a.assigmentInfo && (
                                <div className={classes.assigmentInfo}>
                                  {a.assigmentInfo.status && (
                                    <div className={classes.assigmentChip}>
                                      <div
                                        className={classes.assigmentChipContent}
                                        style={{
                                          background: a.assigmentInfo.color,
                                        }}
                                      >
                                        {a.assigmentInfo.status.toUpperCase()}
                                      </div>
                                    </div>
                                  )}
                                  <div
                                    style={{
                                      color: "#8C96A4",
                                    }}
                                  >
                                    <AccountCircle />
                                  </div>
                                  <div>
                                    <Tooltip
                                      title={a.assigmentInfo.responsible}
                                      arrow
                                    >
                                      <span>{a.assigmentInfo.responsible}</span>
                                    </Tooltip>
                                  </div>
                                  <div
                                    style={{
                                      color: "#8C96A4",
                                    }}
                                  >
                                    <Schedule />
                                  </div>
                                  <div>
                                    <Tooltip
                                      title={a.assigmentInfo.deadline}
                                      arrow
                                    >
                                      <span>{a.assigmentInfo.deadline}</span>
                                    </Tooltip>
                                  </div>
                                </div>
                              )}
                            </div>
                            <div style={{ flex: 1 }} />
                          </div>
                        ))}
                    </div>
                  </div>
                ) : (
                  <EmptyList />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </DialogContent>
      <DialogActions className={classes.actions} style={actionBorder}>
        <Button color="primary" onClick={onAccept}>
          Закрыть
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AssignsProblemsModal;
