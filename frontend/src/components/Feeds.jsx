import { Container } from '@mui/material'
import React from 'react'
import Posts from './Posts'

const Feeds = () => {
    return (
        <Container
            disableGutters={true}
            sx={{
                paddingTop: '14px', display: 'flex', flexDirection: "column",
                alignItems: "center",
            }}>
            <Posts />
            <Posts />
            <Posts />
        </Container>
    )
}

export default Feeds
