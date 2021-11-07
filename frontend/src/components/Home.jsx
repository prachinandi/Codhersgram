import { Grid } from '@mui/material'
import React from 'react'
import Feeds from './Feeds'
import Leftbar from './Leftbar'
import Navbar from './Navbar'
import Rightbar from './Rightbar'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import FandS from './FandS'

const Home = () => {
    return (
        // <ThemeProvider >
        <div style={{}}>
            <Navbar />
            <Grid container>
                <Grid item sm={3}>
                    <Leftbar />
                </Grid>
                <Grid item sm={9}>
                    {/* <Feeds /> */}
                    <FandS />
                </Grid>
                {/* <Grid item sm={2}>
                    <Rightbar />
                </Grid> */}
            </Grid>

        </div>

        // </ThemeProvider>
    )
}

export default Home
