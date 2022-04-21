import * as React from "react";
import { makeStyles } from "@mui/styles";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";

interface IFirstProps {
  data: any;
}

const useStyles = makeStyles({
  root: {
    background: "transparent",
    "&&& .MuiSvgIcon-root": {
      background: "#e3e3e3",
      borderRadius: "50%",
      marginLeft: -7,
      padding: 10,
      height: 40,
      width: 40,
      "& > circle": {
        color: "#4FC0E8",
      },
      "& > text": {
        opacity: 0,
      },
    },
  },
});

export const First = ({ data }: IFirstProps) => {
  const classes = useStyles();
  const itemList: any[] = data.items ? Object.values(data.items) : [];
  return (
    <div
      style={{
        paddingLeft: 15,
        paddingRight: 15,
      }}
    >
      <div style={{ display: "inline-block" }}>
        <h2
          style={{
            backgroundColor: data.status.color,
            borderRadius: 25,
            fontSize: 12,
            padding: 5,
            paddingRight: 10,
            paddingLeft: 10,
            fontWeight: 400,
            color: "white",
            textAlign: "center",
          }}
        >
          {String(data.status.text).toUpperCase()}
        </h2>
      </div>
      <br />
      {/*<span style={{ color: "blue", textDecoration: "underline", margin: 0 }}>
        {data.status.additional1}
        </span>*/}
      <div>
        {itemList.map((item, index) => (
          <Stepper
            key={index}
            className={classes.root}
            activeStep={0}
            orientation="vertical"
            style={{ marginTop: -25, marginLeft: -25 }}
          >
            <Step>
              <StepLabel>
                <span style={{ fontWeight: 600, color: "black" }}>
                  {item.header}
                </span>
              </StepLabel>
              <StepContent>
                <div style={{ marginLeft: 10 }}>{item.text}</div>
              </StepContent>
            </Step>
          </Stepper>
        ))}
      </div>
    </div>
  );
};

export default First;
