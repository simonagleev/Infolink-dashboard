import React from "react";

import { observer } from "mobx-react";

import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { ListItemText } from "@mui/material";

import ColorProgressBar from "../../components/common/ColorProgressBar";


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
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
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
                <ColorProgressBar data={{
                    done: {color: '#4FC0E8', title: 'Работа', value: 30},
                    inWork: {color: '#7FB537', title: 'Переработки', value: 30},
                    notDone: {color: '#FE9B31', title: 'Больничные', value: 30},
                    offset: {color: '#FA5F5A', title: 'Отсутствие', value: 10}
                }}/>
            </Box>
        </Box>
    )
};

export default observer(TimeLossItem);