import React from 'react'
import { Box, Grid2, Stack, Typography } from '@mui/material'
import {
	DateIcon,
	ScheduleIcon,
	EventTypeIcon,
} from '../../../../../shared/icons'
import EventsFeature from '../components/EventsFeature'
import { Event } from '../../../../../shared/types'
import { GradientButton } from '../../../components'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import { SERVE_IMAGES_URI } from '../../../../../shared/api_routes'
interface Props {
	event: Event
}

const AboutEventSection: React.FC<Props> = ({ event }) => {
	return (
		<Grid2
			container
			sx={{
				flexDirection: 'row',
				width: '100%',
				height: '70%',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Grid2
				container
				size={{ xs: 12, md: 6 }}
				sx={{
					width: '100%',
					height: '100%',
					flexDirection: 'column',
				}}
			>
				<Box
					id='poster-image'
					sx={{
						background: `url("${SERVE_IMAGES_URI}${event.posterImage}")`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						width: '100%',
						height: '100%',
						minWidth: '50%',
						maxWidth: '60%',

						position: 'relative',
					}}
				></Box>
			</Grid2>
			<Grid2
				container
				size={{ xs: 12, md: 4 }}
				sx={{
					height: '100%',
					alignItems: 'space-between',
					flexDirection: 'row',
				}}
			>
				<Grid2
					size={{ xs: 6 }}
					sx={{
						width: '100%',
					}}
				>
					<Stack
						sx={{
							width: '100%',
							textWrap: 'wrap',
							flexWrap: 'wrap',
							lineBreak: 'anywhere',
							height: '100%',
						}}
					>
						<Typography
							variant={'h2'}
							sx={{
								color: 'white',
								mb: 2,
							}}
						>
							{event.title}
						</Typography>
						<Typography
							sx={{
								color: 'white',
								fontSize: 'clamp(16px, 2vw, 18px)',
							}}
						>
							{event.description}
						</Typography>
					</Stack>
				</Grid2>
				<Grid2
					size={{ xs: 6 }}
					sx={{
						// background: '#1C1C1C',
						mt: 'auto',
						padding: '1rem',
						gap: '2rem',
						width: '100%',
						backdropFilter: 'blur(10px)',
						background: 'rgba(0,0,0,0.3)',
						borderRadius: '12px',
					}}
				>
					<Typography
						color='white'
						textTransform={'uppercase'}
						fontSize={'1.25rem'}
						sx={{
							mb: 3,
						}}
					>
						About event
					</Typography>
					<Stack
						sx={{
							gap: '1rem',
						}}
					>
						<EventsFeature
							featureIcon={<DateIcon />}
							featureTitle='date'
							featureDescription={new Date(
								event.date ?? ''
							).toDateString()}
						/>
						<EventsFeature
							featureIcon={<LocalPhoneIcon />}
							featureTitle='RSVP'
							featureDescription={event.phone}
						/>
					</Stack>
					<GradientButton marginTop={'2rem'}>
						Buy Tickets
					</GradientButton>
				</Grid2>
			</Grid2>
		</Grid2>
	)
}

export default AboutEventSection
