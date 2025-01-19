import React from 'react'
import { Grid2, Typography, Stack } from '@mui/material'
import { GradientButton, WhiteButton } from '../../../components'
import { Event } from '../../../../../shared/types'
interface Props {
	event: Event
}

const EventHeroSection: React.FC<Props> = ({ event }) => {
	console.log(event)
	return (
		<Grid2
			container
			sx={{
				width: '100vw',
				height: '50dvh',

				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				alignItems: 'center',
				justifyContent: 'center',
				padding: '1rem',
			}}
		>
			<Grid2
				container
				size={{ xs: 12, md: 10 }}
				sx={{
					alignItems: 'center',
					justifyContent: 'flex-end',
					height: '100%',
					flexDirection: 'column',
					// background: 'red',
					gap: '1rem',
				}}
			>
				<Stack
					sx={{
						'>*': {
							color: 'white',
						},
						alignItems: 'center',
						justifyContent: 'center',
						// background: 'red'
					}}
				>
					<Typography
						sx={{
							fontSize: 'clamp(16px, 2vw, 24px)',
							fontWeight: '400',
						}}
					>
						{new Date(event.date ?? '').toDateString()}
					</Typography>
				</Stack>
				<Stack
					sx={{
						flexDirection: 'row',
						gap: '1rem',
						'>*': {
							minWidth: '10rem',
						},
					}}
				>
					<GradientButton>Buy Tickets</GradientButton>
					<WhiteButton>RSVP</WhiteButton>
				</Stack>
			</Grid2>
		</Grid2>
	)
}

export default EventHeroSection
