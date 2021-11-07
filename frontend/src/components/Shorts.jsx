import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import shortsImage from '../asset/unnamed.jpg'
import { Box } from '@mui/material';
export default function Shorts() {
    return (
        <Box component="div" sx={{ overflow: 'visible', paddingTop: '10px', paddingLeft: '25px' }}>

            <Stack direction="row" spacing={2} justifyContent="center"
                alignItems="center" sx={{ lineHeight: '5rem', height: '100px' }} >
                <Avatar alt="Remy Sharp" src={shortsImage} sx={{ width: '60px', height: '60px' }} />
                <Avatar alt="Remy Sharp" src={shortsImage} sx={{ width: '60px', height: '60px' }} />
                <Avatar alt="Remy Sharp" src={shortsImage} sx={{ width: '60px', height: '60px' }} />
                <Avatar alt="Remy Sharp" src={shortsImage} sx={{ width: '60px', height: '60px' }} />
                <Avatar alt="Remy Sharp" src={shortsImage} sx={{ width: '60px', height: '60px' }} />
                <Avatar alt="Remy Sharp" src={shortsImage} sx={{ width: '60px', height: '60px' }} />
            </Stack>
        </Box>
    );
}