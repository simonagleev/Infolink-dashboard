import * as React from "react";

import { makeStyles } from "@mui/styles";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

interface IModalDialogProps {
  children: React.ReactNode;
  title: string | JSX.Element;
  dividers?: boolean;
  open?: boolean;
  showDismiss?: boolean;
  onAccept?: () => void;
  onDismiss?: () => void;
}

const useStyles = makeStyles({
  dialog: {
    "&:first-child": {
      padding: 0,
    },
    overflow: "hidden",
  },
  content: {
    minWidth: 600,
  },
});

export const ModalDialog = ({
  children,
  open = false,
  dividers = false,
  showDismiss = false,
  title = "Dialog title",
  onAccept = () => console.log("accept"),
  onDismiss = () => console.log("dismiss"),
}: IModalDialogProps) => {
  const classes = useStyles();
  return (
    <Dialog open={open}>
      <DialogContent dividers={dividers} className={classes.dialog}>
        <DialogTitle>
          <Box mr={3}>{title}</Box>
        </DialogTitle>
        <Box className={classes.content} p={3}>
          {children}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={onAccept}>
          OK
        </Button>
        {showDismiss && (
          <Button color="primary" onClick={onDismiss}>
            Cancel
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default ModalDialog;
