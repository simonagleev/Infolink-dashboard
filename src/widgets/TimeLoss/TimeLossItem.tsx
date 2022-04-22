import React from "react";

import { observer } from "mobx-react";

import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import ioc from "../../lib/ioc";
import { ListItemText } from "@mui/material";


const useStyles = makeStyles(
    {
        root: {
            display: 'flex',
        },
        worker: {
            flex: 1,
            border: '1px solid #fff'
        },
        bar: {
            flex: 2,
        }
    }
)

interface ITimeLossItemProps {
    primaryLabel: string;
}

export const TimeLossItem = ({
    primaryLabel
}: ITimeLossItemProps) => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.worker}>
                <ListItemText 
                    primary={primaryLabel}
                    secondary="July 20, 2014"
                />
            </Box>
            <Box className={classes.bar}>

            </Box>
        </Box>
    )
};

export default observer(TimeLossItem);