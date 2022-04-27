import React from 'react';

import { observer } from "mobx-react";
import { makeStyles } from '@mui/styles';
import { alpha, Theme } from '@mui/material';

import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

import Restore from '@mui/icons-material/Restore';
import Menu from "@mui/icons-material/Menu";

import ioc from '../../lib/ioc';

const HEADER_HEIGHT = 50;

const useStyles = makeStyles<Theme>((theme) => ({
    appBar: {
        background: `${theme.palette.background.paper} !important`,
        color: `${theme.palette.getContrastText(theme.palette.background.paper)} !important`,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 'auto',
        height: HEADER_HEIGHT,
        '& .MuiGrid-item': {
            display: 'flex',
            alignItems: 'center',
        }
    },
    loaderBar: {
        marginBottom: -4,
        marginTop: -2,
        zIndex: 9999,
    },
    grid: {
        margin: 0,
    },
    adjust: {
        paddingTop: HEADER_HEIGHT,
    }
}));

interface IHeaderProps {
    onMenuToggle?: () => void;
}

export const Header = ({
    onMenuToggle,
}: IHeaderProps) => {
    const classes = useStyles();

    const handleClick = () => {
        ioc.alertService.notify('Chart update scheduled successfully');
    };
    const homeHandler = () => {
        ioc.routerService.push('/')
    }
    return (
        <>
            <AppBar className={classes.appBar}>
                <Toolbar variant='dense' disableGutters>
                    <Grid className={classes.grid} container>
                        <Grid item>
                            <Box pl={1}>
                                <IconButton
                                    sx={{pl: 1}}
                                    color="inherit"
                                    onClick={onMenuToggle}
                                >
                                    <Menu />
                                </IconButton>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box  onClick={homeHandler}>
                                <Typography variant="h6">
                                    InfoLink Dashboard
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs />
                        <Grid item>
                            <Box pr={1}>
                                <IconButton onClick={handleClick}>
                                    <Restore />
                                </IconButton>
                            </Box>
                        </Grid>
                    </Grid>
                </Toolbar>
                {ioc.layoutService.hasLoader && (
                    <Box className={classes.loaderBar}>
                        <LinearProgress color="secondary" />
                    </Box>
                )}
            </AppBar>
            <div className={classes.adjust} />
        </>
    );
};

export default observer(Header);
