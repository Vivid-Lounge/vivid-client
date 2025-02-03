import React from 'react'
import { Grid2, Stack, Typography } from '@mui/material'
import Background from './../../../../shared/images/hero-section-background.png'
import Map from './components/MapModal'

const About: React.FC = () => {
    return (
        <Grid2
            container
            sx={{
                width: '100vw',
                height: '100dvh',
                alignItems: 'center',
                justifyContent: 'center',
                // background: 'red',
                position: 'relative',
                background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${Background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'

            }}
        >
            <Grid2
                size={{xs: 12, md: 10}}
                container
                sx={{
                    height: '100%',
                    position: 'relative',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Typography color={'white'}>Test</Typography>
            </Grid2>
            <Map />
        </Grid2>
    )
}

export default About