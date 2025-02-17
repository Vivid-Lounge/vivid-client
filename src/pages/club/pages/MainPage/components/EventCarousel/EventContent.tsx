'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import {
	Stack,
	Box,
	Typography,
	useTheme,
	useMediaQuery,
	Button,
} from '@mui/material'
import { useSwipeable } from 'react-swipeable'

import EventCard from './EventCard'
import CarouselControls from './CarouselControls'
import { UpcomingEventsIcon } from '../../../../../../shared/icons'
import AllEventsModal from '../../../Events/components/AllEventsModal'
import { Event } from '../../../../../../shared/types'
import { API_URI, api } from '../../../../../../shared/api_routes'

interface Props {
	mainPage?: boolean
}

const EventContent: React.FC<Props> = ({ mainPage = true }) => {
	const [currentEventIndex, setCurrentEventIndex] = useState(0)
	const [events, setEvents] = useState<Event[]>([])
	const [isModalOpen, setIsModalOpen] = useState(false)

	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
	const isTablet = useMediaQuery(theme.breakpoints.down('md'))

	const carouselRef = useRef<HTMLDivElement>(null)

	const getVisibleCards = useCallback(() => {
		if (isMobile) return 1
		if (isTablet) return 2
		return 3
	}, [isMobile, isTablet])

	const sortByDateDesc = useCallback((eventsToSort: Event[]) => {
		return [...eventsToSort].sort(
			(a, b) =>
				new Date(a.date ?? '').getTime() -
				new Date(b.date ?? '').getTime()
		)
	}, [])

	const getEvents = useCallback(async () => {
		try {
			const response = await fetch(API_URI + api.getEvents.route, {
				method: api.getEvents.method,
				headers: { 'Content-Type': 'application/json' },
			})
			if (response.ok) {
				const data = await response.json()
				setEvents(sortByDateDesc(data))
			}
		} catch (error) {
			console.error('Failed to fetch events:', error)
		}
	}, [sortByDateDesc])

	useEffect(() => {
		getEvents()
	}, [getEvents])

	const scrollToIndex = useCallback(
		(index: number) => {
			if (carouselRef.current) {
				const cardWidth =
					carouselRef.current.offsetWidth / getVisibleCards()
				carouselRef.current.scrollTo({
					left: cardWidth * index,
					behavior: 'smooth',
				})
			}
		},
		[getVisibleCards]
	)

	const handlePrevSlide = useCallback(() => {
		setCurrentEventIndex((prev) => {
			const newIndex = Math.max(0, prev - 1)
			scrollToIndex(newIndex)
			return newIndex
		})
	}, [scrollToIndex])

	const handleNextSlide = useCallback(() => {
		setCurrentEventIndex((prev) => {
			const newIndex = Math.min(
				prev + 1,
				events.length - getVisibleCards()
			)
			scrollToIndex(newIndex)
			return newIndex
		})
	}, [events.length, getVisibleCards, scrollToIndex])

	const handlers = useSwipeable({
		onSwipedLeft: handleNextSlide,
		onSwipedRight: handlePrevSlide,
		preventScrollOnSwipe: true,
		trackMouse: true,
	})

	const handleScroll = useCallback(() => {
		if (carouselRef.current) {
			const scrollPosition = carouselRef.current.scrollLeft
			const itemWidth =
				carouselRef.current.offsetWidth / getVisibleCards()
			const newIndex = Math.round(scrollPosition / itemWidth)
			setCurrentEventIndex(newIndex)
		}
	}, [getVisibleCards])

	useEffect(() => {
		const currentCarousel = carouselRef.current
		if (currentCarousel) {
			currentCarousel.addEventListener('scroll', handleScroll)
			return () =>
				currentCarousel.removeEventListener('scroll', handleScroll)
		}
	}, [handleScroll])

	const cardWidth = isMobile ? '100%' : isTablet ? '48%' : '32%'

	return (
		<Stack
			spacing={4}
			alignItems='center'
			sx={{ width: '100%', px: { xs: 2, sm: 4 }, mb: 4 }}
		>
			<UpcomingEventsIcon
				sx={{ width: 'max(24px, 50%)', height: 'auto' }}
			/>

			<Stack sx={{ width: '100%', gap: 2 }}>
				<CarouselControls
					onPrev={handlePrevSlide}
					onNext={handleNextSlide}
					containerRef={carouselRef}
					isStart={currentEventIndex === 0}
					isEnd={
						currentEventIndex === events.length - getVisibleCards()
					}
				/>

				<Box
					sx={{
						width: '100%',
						position: 'relative',
						overflow: 'hidden',
					}}
				>
					<Box
						{...handlers}
						ref={carouselRef}
						sx={{
							display: 'flex',
							overflowX: 'auto',
							scrollSnapType: 'x mandatory',
							'&::-webkit-scrollbar': { display: 'none' },
							scrollbarWidth: 'none',
						}}
					>
						{events.map((event) => (
							<Box
								key={event.slug}
								sx={{
									flexShrink: 0,
									width: cardWidth,
									p: 1,
									aspectRatio: '3 / 4',
									scrollSnapAlign: 'start',
								}}
							>
								<EventCard
									event={event}
									onClick={() =>
										(window.location.href = `/events/${event.slug}`)
									}
								/>
							</Box>
						))}
					</Box>
				</Box>
			</Stack>

			{mainPage && (
				<>
					<Button
						onClick={() => setIsModalOpen(true)}
						sx={{
							mt: 4,
							color: 'white',
							background:
								'linear-gradient(45deg, #FF1083 30%, #FF4D4D 90%)',
						}}
					>
						<Typography>View All Events</Typography>
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
