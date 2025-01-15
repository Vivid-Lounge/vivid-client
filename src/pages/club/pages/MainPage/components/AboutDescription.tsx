import React from 'react'
import { Stack, Typography } from '@mui/material'
import Background from './../../../../../shared/images/about-us-photo.png'

const AboutDescription: React.FC = () => {
  return (
    <Stack
        sx={{
            aspectRatio: '1.13 / 1',
            width: '100%',
            height: 'auto',
            background: `url(${Background})`,
            justifyContent: 'flex-end',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}
    >
        <Typography
            sx={{
                width: '100%',
                padding: '1rem',
                background: '#1D1D1D',
                color: 'white',
                fontWeight: 'regular',
                transform: 'translate(20%, 20%)',
                // backdropFilter: 'blur(1px)'
                display: {
                    xs: 'none',
                    md: 'flex'
                }
            }}
        >
            Suntem locul unde muzica de calitate și designul inovativ se întâlnesc pentru a oferi o experiență de petrecere absolută. Fie că ești un iubitor al petrecerilor electrizante sau pur și simplu vrei să te bucuri de o seară memorabilă alături de prieteni, Vivid este locul unde distracția nu are limite.
        </Typography>
    </Stack>
  )
}

export default AboutDescription