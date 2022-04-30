import React from 'react';
import { useState, useMemo } from 'react';
import { IMenuGroup, IMenuOption, ScrollView } from 'react-declarative';

import { observer } from "mobx-react";
import { makeStyles } from '@mui/styles';
import { cloneDeep } from 'lodash';

import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import IconButton from "@mui/material/IconButton";
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';

import Header from './Header';
import Footer from './Footer';

import Search from "@mui/icons-material/Search";

import SideMenu from './SideMenu';

import ioc from '../../lib/ioc';

interface IScaffoldProps {
    children: React.ReactNode;
    selected?: string;
    roles?: string[];
    options?: IMenuGroup[];
    onOptionClick?: (name: string) => void;
}

const DRAWER_WIDTH = 256;

const flatifyMenu = (items: IMenuGroup[]) => {
    const result = [];
    while (items.length) {
        const [item, ...last] = items;
        item.options?.forEach((i) => last.push(i));
        result.push(item);
        items = last;
    }
    return result;
};

const filerFlatMenu = (options: IMenuOption[], {
    keyword,
    currentRoles,
}: {
    keyword: string;
    currentRoles?: string[];
}) => options
    .filter(item => item.label.toLowerCase().includes(keyword))
    .filter(({ roles = [] }) => !currentRoles || roles.find((role) => currentRoles.includes(role)));

const cleanupMenu = (entry: Partial<IMenuGroup>, allowed: Set<IMenuOption>) =>
    entry.options = entry.options?.filter((option: any) => {
        if (allowed.has(option)) {
            return true;
        } else if (option.options?.length) {
            cleanupMenu(option, allowed);
            return flatifyMenu(option.options).find((o) => allowed.has(o));
        } else {
            return false;
        }
    });

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'stretch',
        flexDirection: 'column',
        minHeight: '100vh',
        maxHeight: '100vh',
        minWidth: '100vw',
        maxWidth: '100vw',
    },
    container: {
        flex: 1,
    },
    drawer: {
        width: DRAWER_WIDTH,
        '& > .MuiPaper-root': {
            width: DRAWER_WIDTH,
            overflowX: 'hidden',
        },
    },
    searchBox: {
        display: 'inline-flex',
        margin: 5,
        '& > *': {
            flex: 1,
        },
    },
});

export const Scaffold = ({
    children,
    selected,
    options = [],
    roles: currentRoles,
    onOptionClick,
}: IScaffoldProps) => {

    const [opened, setOpened] = useState(false);

    const classes = useStyles();

    const [filterText, setFilterText] = useState('');

    const filteredMenuOptions = useMemo<IMenuGroup[]>(() => {
        const allowed = new Set<IMenuOption>();
        const safeOptions = cloneDeep(options);
        const keyword = filterText.toLowerCase();
        filerFlatMenu(flatifyMenu(safeOptions), { keyword, currentRoles })
            .forEach((o) => allowed.add(o));
        const entry = { options: safeOptions };
        cleanupMenu(entry, allowed);
        return entry.options;
    }, [filterText, currentRoles]);

    const handleClose = () => {
        setOpened(false);
    };

    const handleClick = (name: string) => {
        handleClose();
        onOptionClick && onOptionClick(name);
    };

    const handleMenuToggle = () => setOpened(!opened);

    return (
        <Box className={classes.root}>
            <CssBaseline />
            <Drawer
                className={classes.drawer}
                open={opened}
                onClose={() => setOpened(false)}
            >
                <Box className={classes.searchBox}>
                    <TextField
                        variant="standard"
                        onChange={({ target }) => setFilterText(target.value.toString())}
                        value={filterText}
                        placeholder="Search"
                        InputProps={{
                            autoComplete: 'off',
                            endAdornment: (
                                <InputAdornment position="end">
                                    <div style={{ marginRight: -10 }}>
                                        <IconButton>
                                            <Search />
                                        </IconButton>
                                    </div>
                                </InputAdornment>
                            ),
                        }}
                        name="search"
                        type="text"
                    />
                </Box>
                <SideMenu selected={selected} onClick={handleClick} options={filteredMenuOptions} />
            </Drawer>
            {ioc.layoutService.hasHeader && (
                <Header onMenuToggle={handleMenuToggle} />
            )}
            <ScrollView className={classes.container}>
                <Box p={1}>
                    <Grid component="main" container>
                        {children}
                    </Grid>
                </Box>
            </ScrollView>
            {ioc.layoutService.hasFooter && (
                <Footer />
            )}
        </Box>
    );
};

export default observer(Scaffold);
