import * as React from 'react';

import { makeStyles } from '@mui/styles';
import { IMenuOption } from 'react-declarative';

import classNames from 'classnames';

import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ButtonBase from "@mui/material/ButtonBase";

import OutlinedFlag from "@mui/icons-material/OutlinedFlag";
import Dot from "@mui/icons-material/FiberManualRecord";

import { Theme } from '@mui/material';

interface IMenuOptionProps {
    option: IMenuOption;
    style?: React.CSSProperties;
    selected?: string;
    className?: string;
    parent?: boolean;
    onClick: (name: string) => void;
}

const useStyles = makeStyles<Theme>((theme) => ({
    selected: {
        color: `${theme.palette.primary.main} !important`,
        '& .MuiListItemIcon-root': {
            color: `${theme.palette.primary.main} !important`,
        },
    },
    disabled: {
        pointerEvents: 'none',
        touchAction: 'none',
        opacity: 0.5,
    },
    bold: {
        fontWeight: 'bold',
    },
    root: {
        display: 'flex',
        width: '100%',
        flex: 1,
        '& .MuiListItemIcon-root': {
            maxWidth: '36px !important',
            minWidth: '36px !important',
        },
    },
    navLink: {
        color: theme.palette.text.primary,
        '& .MuiListItemIcon-root': {
            color: theme.palette.text.primary,
        },
    },
}));

export const MenuOption: React.FC<IMenuOptionProps> = ({
    option,
    style,
    parent,
    selected,
    className,
    onClick
}) => {
    const classes = useStyles();

    const linkClasses = classNames(classes.navLink, {
        [classes.selected]: option.name && option.name === selected,
        [classes.disabled]: option.disabled,
        [classes.bold]: option.bold,
    });

    const handleClick = () => {
        const { name } = option;
        name && onClick(name);
    };

    const Icon = option.icon || (parent ? Dot : OutlinedFlag);

    return (
        <ButtonBase  
            className={classNames(classes.root, linkClasses, className)}
            style={style}
        >
            <ListItem
                onClick={handleClick}
            >
                <ListItemIcon style={{ maxWidth: 24 }}>
                    <Icon />
                </ListItemIcon>
                <ListItemText primary={option.label} />
            </ListItem>
        </ButtonBase>
    );
};

export default MenuOption;
