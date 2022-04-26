
import React from 'react';

import Box from '@mui/material/Box';

import ioc from '../../../lib/ioc';
import Avatar from '@mui/material/Avatar';


interface ICountryFlagProps {
    avatar: any;
}

export const WorkerAvatar = ({
    avatar,
}: ICountryFlagProps) => {

    return (
        <Box style={{display: 'flex', alignItems: 'center'}}>
            <Avatar alt="photo" src={avatar} />
        </Box>
    )
}

export default WorkerAvatar;