import React from "react";

import { observer } from "mobx-react";

import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import ioc from "../../lib/ioc";


const useStyles = makeStyles(
    {
        root: {
            display: 'flex',
        },
        worker: {
            flex: 1,
        },
        bar: {
            flex: 1,
        }
    }
)

interface ITimeLossItemProps {
    id: string
}

export const TimeLossListItem = (
    {
        id = '1'
    }: ITimeLossItemProps) => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.root}>
                <Typography></Typography>
            </Box>
            <Box className={classes.root}>

            </Box>
        </Box>
    )
};

export default observer(TimeLossListItem);