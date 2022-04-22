import React from "react";

import { observer } from "mobx-react";

import Paper from "@mui/material/Paper";

import Toolbar from "./Toolbar";
import TimeLossItem from "./TimeLossItem";

import ioc from "../../lib/ioc";

export const TimeLoss = () => {
    
    return (
        <Paper>
            <Toolbar
                title={"Toolbar Power 1337"}
            />
            {ioc.mockService.homePage.timeConsumption.map(i => (
                <TimeLossItem primaryLabel={i}/>
            ))}
        </Paper>
    )
};

export default observer(TimeLoss);