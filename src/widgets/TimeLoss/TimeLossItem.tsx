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
            flex: 99,
            border: '1px solid #fff',
            minWidth: '275px',
        },
        bar: {
            flex: 1,
            minWidth: '1px',
        },
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    }
)

interface ITimeLossItemProps {
    primaryLabel: string;
    avatar: string;
    occupation: string;
}

export const TimeLossItem = ({
    primaryLabel,
    avatar,
    occupation
}: ITimeLossItemProps) => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.bar}>
                
            </Box>
            <Box className={classes.worker}>
                <Box className={classes.container}>
                    <Avatar alt="Remy Sharp" src={avatar} />
                    <ListItemText 
                        primary={primaryLabel}
                        secondary={occupation}
                        sx={{flex:'none', marginLeft: '0.5em'}}
                    />
                </Box>
                
                <ColorProgressBar data={{
                    done: {color: '#4FC0E8', title: 'Работа', value: 30},
                    inWork: {color: '#7FB537', title: 'Переработки', value: 30},
                    notDone: {color: '#FE9B31', title: 'Больничные', value: 30},
                    offset: {color: '#FA5F5A', title: 'Отсутствие', value: 10}
                }}/>
            </Box>
            <Box className={classes.bar}>
                
            </Box>
        </Box>
    )
};

export default observer(TimeLossItem);