import React, { useState, useEffect } from 'react'
import EventCard from './EventCard'
import { UpcomingEventsIcon } from '../../../../../shared/icons'
import Button from '../../../components/Button'
import { Typography, Stack, Box } from '@mui/material'
import { events } from '../../Events/events/events'

interface Props {
	mainPage?: boolean | undefined
}

const EventContent: React.FC<Props> = ({ mainPage = true }) => {
	const [currentEventIndex, setCurrentEventIndex] = useState(0)
	const [isAnimating, setIsAnimating] = useState(false)

	const handlePrevSlide = () => {
		if (isAnimating) return
		setIsAnimating(true)
		setCurrentEventIndex((prev) =>
			prev === 0 ? events.length - 1 : prev - 1
		)
		setTimeout(() => setIsAnimating(false), 500)
	}

	const handleNextSlide = () => {
		if (isAnimating) return
		setIsAnimating(true)
		setCurrentEventIndex((prev) => (prev + 1) % events.length)
		setTimeout(() => setIsAnimating(false), 500)
	}

	return (
		<Stack spacing={2} alignItems='center' width='100%'>
			<UpcomingEventsIcon
				sx={{ width: 'max(24px, 50%)', height: 'auto' }}
			/>
			<Box
				sx={{
					width: '100%',
					overflow: 'hidden',
					position: 'relative',
				}}
			>
				<Stack
					direction='row'
					sx={{
						width: '100%',
						transform: `translateX(-${currentEventIndex * 100}%)`,
						transition: 'transform 0.5s ease-in-out',
					}}
				>
					{events.map((event, index) => (
						<Box
							key={event.slug}
							sx={{
								minWidth: '100%',
								flex: '0 0 100%',
							}}
						>
							<EventCard
								event={event}
								onPrevClick={handlePrevSlide}
								onNextClick={handleNextSlide}
							/>
						</Box>
					))}
				</Stack>
			</Box>
			{mainPage && (
				<Button>
					<Typography>view all events</Typography>
				</Button>
			)}
		</Stack>
	)
}

export default EventContent
