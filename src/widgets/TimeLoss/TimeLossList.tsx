import React from "react";

import { observer } from "mobx-react";

import Box from "@mui/material/Box";

import TimeLossListItem from "./TimeLossListItem";
import ioc from "../../lib/ioc";



const stuffList = ioc.timeLossService.stuffList;

export const TimeLossList = () => {
    return (
        <Box>
            {stuffList.map(i => (
                <TimeLossListItem id={i.id}/>
            ))}
        </Box>
    )
};

export default observer(TimeLossList);