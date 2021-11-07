import React from 'react'
import { Container, Typography } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import { alpha, styled } from '@mui/material/styles';

// const divs = styled('div')(({ theme }) => ({
//     width: 300,
//     color: theme.palette.success.main,
//     display: 'flex',
//     alignItems: 'center',
//     marginBottom: theme.spacing(4),
//     [theme.breakpoints.up("sm")]: {
//         marginBottom: theme.spacing(3),
//         cursor: "Pointer"
//     },
// }));



const Leftbar = () => {
    const profiles = ['1', '2', '3']
    return (
        <Container sx={{
            paddingTop: '14px', borderRight: 'solid 0px black', height: '100vh',
            boxShadow: "4px -1px 5px 0px rgba(0,0,0,0.24)",
        }}>

            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>

                <HomeIcon />
                <Typography>Profile</Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>

                <HomeIcon />
                <Typography>Profile</Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>

                <HomeIcon />
                <Typography>Profile</Typography>
            </div>
        </Container>
    )
}

export default Leftbar
