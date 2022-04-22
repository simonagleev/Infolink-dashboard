import React from "react";

import Paper from "@mui/material/Paper";

import Toolbar from "./Toolbar";
import { observer } from "mobx-react";

export const TimeLoss = () => {
    
    return (
        <Paper>
            <Toolbar
                title={"Toolbar Power 1337"}
            />
        </Paper>
    )
};

export default observer(TimeLoss);