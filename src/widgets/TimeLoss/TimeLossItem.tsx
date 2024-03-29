import React from "react";

import { observer } from "mobx-react";

import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { Avatar, ListItemText } from "@mui/material";

import ColorProgressBar from "../../components/common/ColorProgressBar";


const useStyles = makeStyles(
    {
        root: {
            display: 'flex',
        },
        worker: {
            display: 'flex',
            alignItems: 'center',
        },
        row: {
            flex: 1,
            paddingLeft: 15,
            paddingRight: 15,
            paddingBottom: 15
        }
    }
)

interface ITimeLossItemProps {
    name: string;
    avatar: string;
    occupation: string;
    work: number;
    overTime: number;
    sickLeave: number;
    downTime: number;
}


export const TimeLossItem = ({
    name,
    avatar,
    occupation,
    work,
    overTime,
    sickLeave,
    downTime
}: ITimeLossItemProps) => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.row}>
                <Box className={classes.worker}>
                    <Avatar alt="Remy Sharp" src={avatar} />
                    <ListItemText
                        primary={name}
                        secondary={occupation}
                        sx={{ flex: 'none', marginLeft: '0.5em' }}
                    />
                </Box>
                <Box flex="1">
                    <ColorProgressBar data={{
                        work: { color: '#7FB537', title: 'Работа', value: work },
                        overTime: { color: '#4FC0E8', title: 'Переработки', value: overTime },
                        sickLeave: { color: '#FE9B31', title: 'Больничные', value: sickLeave },
                        downTime: { color: '#FA5F5A', title: 'Отсутствие', value: downTime }
                    }} />
                </Box>
            </Box>
        </Box>
    )
};

export default observer(TimeLossItem);