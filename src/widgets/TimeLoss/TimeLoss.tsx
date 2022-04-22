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
                width: '50%'
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
                    work={i.timeValues.work}
                    overWork={i.timeValues.overWork}
                    sickLeave={i.timeValues.overWork}
                    offWork={i.timeValues.overWork}
                    />
                ))}
            </Box>
            <Box 
                sx={{
                    position: 'absolute',
                    bottom: 10,
                    right: 30,
                    zIndex: 2,
                    opacity: '.7',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <div style={{background: '#4FC0E8', width: 15, height: 15, borderRadius: '3px', marginRight: '5px'}}></div>
                    <span>Работа</span>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <div style={{background: '#7FB537', width: 15, height: 15, borderRadius: '3px', marginRight: '5px'}}></div>
                    <span>Перерабоки</span>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <div style={{background: '#FE9B31', width: 15, height: 15, borderRadius: '3px', marginRight: '5px'}}></div>
                    <span>Больничные</span>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <div style={{background: '#FA5F5A', width: 15, height: 15, borderRadius: '3px', marginRight: '5px'}}></div>
                    <span>Отстутствие</span>
                </Box>
            </Box>
        </Paper>
    )
};

export default observer(TimeLoss);