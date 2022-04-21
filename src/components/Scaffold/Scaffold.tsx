import React from 'react';

import { observer } from "mobx-react";
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Header from './Header';
import Footer from './Footer';

import ioc from '../../lib/ioc';

interface IScaffoldProps {
    children: React.ReactNode;
}

export const Scaffold = ({
    children,
}: IScaffoldProps) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CssBaseline />
            {ioc.layoutService.hasHeader && (
                <Header />
            )}
            <Box p={1}>
                <Grid component="main" container>
                    {children}
                </Grid>
            </Box>
            {ioc.layoutService.hasFooter && (
                <Footer />
            )}
        </Box>
    );
};

export default observer(Scaffold);
