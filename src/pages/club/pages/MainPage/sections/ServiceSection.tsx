import React from 'react'
import { Typography, Grid2 } from '@mui/material'
import Stack from '@mui/material/Stack'
import ServicesTitleIcon from '../../../../../shared/icons/ServicesTitleIcon'
import ServiceContainer from '../components/ServiceContainer'
import bar from '../../../../../shared/images/bar.jpg'
import vip from '../../../../../shared/images/vip.jpg'
import vividaloca from '../../../../../shared/images/vividaloca.png'
import dancefloor from '../../../../../shared/images/dancefloor.jpg'

type Service = {
  title: string
  photo: string
}

const services: Service[] = [
  { title: 'LOUNGE BAR', photo: bar },
  { title: 'SPECIAL EVENTS', photo: vividaloca },
  { title: 'DANCE FLOOR', photo: dancefloor },
  { title: 'VIP ZONE', photo: vip },
]

const ServiceSection: React.FC = () => {
  return (
    <Grid2
      container
      sx={{
        height: 'max-content',
        width: '100vw',
		display: 'flex',
		flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: {
          xs: '4rem 1rem',
          md: '4rem 0rem'
        }
      }}
    >
      <Grid2 size={{xs: 12}}>
        <Stack
          alignItems="center"
          sx={{
            width: '100%',
            mb: 4
          }}
        >
          <Typography
            color="primary"
            fontWeight="regular"
            width="max-content"
            sx={{ mb: 2 }}
          >
            OUR SERVICES
          </Typography>
          <ServicesTitleIcon
            sx={{
              width: 'clamp(6rem, 100%, 30rem)',
              height: 'auto'
            }}
          />
        </Stack>
      </Grid2>

      <Stack width={{xs: '100%', md: '50%'}} flexDirection={{ xs: 'column', md: 'column' }} alignItems={{md: 'center'}} justifyContent={{md: 'center'}}>
        {services.map((service, index) => (
            <ServiceContainer
              align={index % 2 === 0 ? 'left' : 'right'}
              title={service.title}
              photo={service.photo}
            />
        ))}
      </Stack>
    </Grid2>
  )
}

export default ServiceSection