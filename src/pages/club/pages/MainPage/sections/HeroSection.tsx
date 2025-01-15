import React from "react";
import { Grid2, Typography } from "@mui/material";
import NavBar from "../../../components/NavBar";
import Background from './../../../../../shared/images/hero-section-background.png'
import { VividLogoIcon } from "../../../../../shared/icons";
import Button from "../../../components/Button";

const HeroSection: React.FC = () => {

    return (
        <Grid2
            container
            sx={{
                height: '100dvh',
                width: '100dvw',
                // background: '#0B0B0B',
                background: `linear-gradient(180deg, rgba(66, 21, 37, 0.33) 0%, #552138 100% ), url(${Background})`,
                alignItems: 'center',
                justifyContent: 'center',
                padding: {
                    xs: '1rem 0rem'
                },
                position: 'relative',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflowX: 'hidden',
                flexDirection: 'column'
            }}
        >
            <Grid2
                container
                size={{xs: 12, md: 10}}
                sx={{
                    // background: 'blue',
                    height: '100%',
                    position: 'relative',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: '2rem'
                }}
            >
                <NavBar />
                <VividLogoIcon
                    sx={{
                        // width: {
                        //     xs: '80%',

                        //     xl: '40%',
                        // },
                        width: 'clamp(10rem, 60%, 46rem)',
                        height: 'auto',
                        fill: 'white'
                    }}
                />
                <Button><Typography>restaurant</Typography></Button>
            </Grid2>
        </Grid2>
    )
}

export default HeroSection