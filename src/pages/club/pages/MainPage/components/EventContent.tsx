import React, { useState, useEffect, useCallback } from 'react'
import EventCard from './EventCard'
import { UpcomingEventsIcon } from '../../../../../shared/icons'
import Button from '../../../components/Button'
import { Typography, Stack, Box } from '@mui/material'
import { Event } from '../../../../../shared/types'
import { api, API_URI } from '../../../../../shared/api_routes'
import AllEventsModal from '../../Events/components/AllEventsModal'
interface Props {
	mainPage?: boolean | undefined
}

const EventContent: React.FC<Props> = ({ mainPage = true }) => {
	const [currentEventIndex, setCurrentEventIndex] = useState(0)
	const [isAnimating, setIsAnimating] = useState(false)
	const [events, setEvents] = useState<Event[]>([] as Event[])
	const [isModalOpen, setIsModalOpen] = useState(false)
	const sortByDateDesc = (eventsToSort: Event[]) => {
		return [...eventsToSort].sort((a, b) => {
			return (
				new Date(a.date ?? '').getTime() -
				new Date(b.date ?? '').getTime()
			)
		})
	}

	const getEvents = async () => {
		const response = await fetch(API_URI + api.getEvents.route, {
			method: api.getEvents.method,
			headers: {
				'Content-Type': 'application/json',
			},
		})
		if (response.status === 200) {
			const data = await response.json()
			// Sort events before setting them to state
			setEvents(sortByDateDesc(data))
		} else {
			setEvents([])
		}
	}
	console.log(events)
	useEffect(() => {
		if (!events.length) {
			getEvents()
		}
	}, [])
	const handlePrevSlide = () => {
		if (isAnimating) return
		setIsAnimating(true)
		setCurrentEventIndex((prev) =>
			prev === 0 ? events.length - 1 : prev - 1
		)
		setTimeout(() => setIsAnimating(false), 600) // Match transition duration
	}
	const handleNextSlide = useCallback(() => {
		if (isAnimating) return
		setIsAnimating(true)
		setCurrentEventIndex((prev) => (prev + 1) % events.length)
		setTimeout(() => setIsAnimating(false), 1200) // Match transition duration
	}, [events.length, isAnimating])

	// Add auto-slide functionality
	useEffect(() => {
		if (events.length <= 1) return // Don't auto-slide if there's only one event

		const slideInterval = setInterval(() => {
			handleNextSlide()
		}, 4000) // 4 seconds interval

		return () => clearInterval(slideInterval) // Cleanup on unmount
	}, [events.length, handleNextSlide])

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
						transition:
							'transform 1.2s cubic-bezier(0.1, 1.1, 0.64, 1)', // Bouncy easing
						willChange: 'transform', // Optimization for animation performance
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
				<>
					<Button onClick={() => setIsModalOpen(true)}>
						<Typography>view all events</Typography>
					</Button>
					<AllEventsModal
						open={isModalOpen}
						onClose={() => setIsModalOpen(false)}
						events={events}
					/>
				</>
			)}
		</Stack>
	)
}

export default EventContent
