import React from 'react'
import { Grid2, Stack, Typography } from '@mui/material'
import Background from './../../../../shared/images/hero-section-background.png'
import Map from './components/MapModal'
import { SectionTitle } from '../../components'
import MinimalistPhoto from './components/MinimalistPhoto'

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
                backgroundRepeat: 'no-repeat',
                padding: {
                    xs: '16px',
                    md: '16px 0'
                }

            }}
        >
            <Grid2
                size={{ xs: 12, md: 10 }}
                container
                sx={{
                    height: '100%',
                    position: 'relative',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {/* <Stack
                    sx={{
                        flexDirection: 'column',
                        width: {
                            xs: '100%',
                            md: '40%'
                        }
                    }}
                >
                    <SectionTitle
                        subtitle='About US'
                    />
                    <Typography
                        sx={{
                            color: 'white'
                        }}
                    >
                        Deschis în 2024 în vibrantul campus studențesc Tudor Vladimirescu din Iași, <span style={{color: '#E0356A'}}>Vivid Lounge</span> a devenit rapid un epicentru al vieții de noapte, muzicii și experiențelor sociale. Cu un sistem de sunet de ultimă generație, lumini spectaculoase și efecte vizuale captivante, clubul oferă o atmosferă unică, găzduind atât artiști internaționali, cât și talente locale.
                        Spațiul include o scenă principală pentru show-uri intense și două sub-floare versatile, unde ritmurile de techno, house și seturi live creează experiențe memorabile. Dincolo de granițe, <span style={{color: '#E0356A'}}>Vivid Lounge</span> duce energia Iașului pe scene internaționale, conectând iubitorii de muzică din întreaga Europă.
                    </Typography>
                </Stack> */}
                <MinimalistPhoto />
            </Grid2>
            <Map />
        </Grid2>
    )
}

export default About