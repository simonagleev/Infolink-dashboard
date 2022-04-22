import React from "react";

import { observer } from "mobx-react";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import Toolbar from "./Toolbar";
import TimeLossItem from "./TimeLossItem";

import ioc from "../../lib/ioc";

export const TimeLoss = () => {
    
    return (
        <Paper
            sx={{
                position: 'relative',
            }}
        >
            <Toolbar
                style={{position: 'sticky', top: 0, background: '#424242', zIndex: 99}}
                title={"Toolbar Power 1337"}
            />
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    height: '100%',
                    width: '100%',
                    overflowY: 'auto',
                    overflowX: 'hidden',
                }}
            >
                <Box
                    sx={{
                        paddingBottom: '37px',
                    }}
                />
                {ioc.mockService.homePage.timeConsumption.map(i => (
                    <TimeLossItem 
                    name={i.name} 
                    avatar={i.avatar}
                    occupation={i.occupation}
                    />
                ))}
            </Box>
            <Box 
                sx={{
                    position: 'absolute',
                    bottom: 10,
                    right: 30,
                }}
            >
                123
            </Box>
        </Paper>
    )
};

export default observer(TimeLoss);