import { Container } from '@mui/material'
import React from 'react'
import Shorts from './Shorts'
const Rightbar = () => {
    return (
        <Container
            disableGutters={true}
            sx={{
                paddingTop: '14px',
                width: '100%'
            }}>

            <Shorts />
        </Container>
    )
}

export default Rightbar
