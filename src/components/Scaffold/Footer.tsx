import React from 'react';

import { observer } from "mobx-react";
import { makeStyles } from '@mui/styles';
import { alpha, Theme } from '@mui/material';

import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import Badge from '@mui/material/Badge';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import SyncIcon from '@mui/icons-material/Sync';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import CardIcon from '@mui/icons-material/CreditCardOutlined';
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import PersonIcon from '@mui/icons-material/PersonOutlined';

import ioc from '../../lib/ioc';

const FOOTER_HEIGHT = 50;

const useStyles = makeStyles<Theme>((theme) => ({
    footer: {
        background: `${theme.palette.background.paper} !important`,
        color: `${theme.palette.getContrastText(theme.palette.background.paper)} !important`,
        position: 'fixed',
        top: 'auto !important',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: FOOTER_HEIGHT,
        '& .MuiGrid-item': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
    },
    adjust: {
        paddingTop: FOOTER_HEIGHT,
    },
}));

export const Footer = () => {
    const classes = useStyles();

    const handleClick = () => {
        //
    };

    return (
        <>
            <AppBar className={classes.footer}>
                <Toolbar variant='dense' disableGutters>
                    <Grid container>
                        <Grid item xs>
                            <IconButton onClick={handleClick} size="small" color="inherit">
                                <HomeIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs>
                            <IconButton onClick={handleClick} size="small" color="inherit">
                                <CardIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs>
                            <Fab onClick={handleClick} sx={{ marginTop: '-25px' }} size="small" color="primary" aria-label="add">
                                <SyncIcon sx={{ color: 'white !important' }} />
                            </Fab>
                        </Grid>
                        <Grid item xs>
                            <IconButton onClick={handleClick} size="small" color="inherit">
                                <Badge color="secondary" badgeContent="4">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                        </Grid>
                        <Grid item xs>
                            <IconButton onClick={handleClick} size="small" color="inherit">
                                <PersonIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <div className={classes.adjust} />
        </>
    );
};

export default observer(Footer);
