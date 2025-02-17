import React from 'react'
import EventContent from '../components/EventCarousel/EventContent'
import { Grid2 } from '@mui/material'

interface Props {
	mainPage?: boolean | undefined
}

const EventsSection: React.FC<Props> = ({ mainPage = true }) => {
	return (
		<Grid2
			container
			sx={{
				minHeight: {
					xs: '100vh',
					md: '100vh',
				},
				width: '100vw',
				background: 'linear-gradient(180deg, #522036 25%, #0B0B0B 83%)',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Grid2
				container
				size={{ xs: 12, md: 10 }}
				sx={{
					height: 'max-content',
					alignItems: 'center',
					justifyContent: 'center',
					gap: '2rem',
				}}
			>
				<EventContent mainPage={mainPage} />
			</Grid2>
		</Grid2>
	)
}

export default EventsSection
