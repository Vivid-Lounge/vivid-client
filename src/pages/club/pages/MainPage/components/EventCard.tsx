import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Stack, Typography } from '@mui/material'
import { ArrowIcon } from '../../../../../shared/icons'
import Button from '../../../components/Button'
import { Event } from '../../../../../shared/types'
import { SERVE_IMAGES_URI } from '../../../../../shared/api_routes'

interface Props {
	event: Event
	onPrevClick: () => void
	onNextClick: () => void
}

const EventCard: React.FC<Props> = ({ event, onPrevClick, onNextClick }) => {
	const navigate = useNavigate()

	const handleViewEvent = () => {
		navigate(`/events/${event.slug}`)
	}

	return (
		<Stack
			sx={{
				width: '100%',
				flexDirection: 'row',
				height: 'max-content',
				alignItems: 'center',
				gap: 2,
				my: 3,
			}}
		>
			<ArrowIcon
				onClick={onPrevClick}
				sx={{
					fill: 'white',
					height: '20%',
					width: 'auto',
					transform: 'rotate(90deg)',
					cursor: 'pointer',
					'&:hover': {
						opacity: 0.8,
					},
				}}
			/>

			<Stack
				sx={{
					width: '100%',
					height: '70vh',
					aspectRatio: {
						xs: '1 / 1.3',
						sm: '1 / 0.8',
						md: '1 / 0.3',
					},
					position: 'relative',
					borderRadius: '8px',
					overflow: 'hidden',
					cursor: 'pointer',
					transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)', // More subtle easing
					// transform: 'perspective(1500px) rotateX(0) scale(1)',
					boxShadow: '0 8px 20px -12px rgba(0,0,0,0.3)',
					'&:hover': {
						transform: ' scale(1.00)', // More subtle rotation and scale
						boxShadow: '0 12px 28px -12px rgba(0,0,0,0.35)', // Softer shadow
						'& > .background-container': {
							transform: 'scale(1.03)', // More subtle scale
						},
						'& > .gradient-overlay': {
							opacity: 0.9,
						},
					},
				}}
				onClick={handleViewEvent}
			>
				{/* Background Image Container */}
				<Stack
					className='background-container'
					sx={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						background: `url("${SERVE_IMAGES_URI}${event.coverImage}")`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						transition:
							'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
						'&::before': {
							content: '""',
							position: 'absolute',
							top: 0,
							left: 0,
							width: '100%',
							height: '100%',
							background:
								'linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 100%)',
							transition: 'opacity 0.5s ease',
						},
					}}
				/>

				{/* Content Container */}
				<Stack
					sx={{
						position: 'relative',
						height: '100%',
						padding: '1rem',
						justifyContent: 'space-between',
						zIndex: 1,
						color: 'white',
					}}
				>
					<Stack
						sx={{
							'>*': {
								color: 'white',
								padding: '4px',
							},
						}}
					>
						<Typography
							sx={{
								fontSize: 'clamp(16px, 2vw, 24px)',
								fontWeight: '400',
								transform: 'translateZ(20px)', // Adds depth to the text
							}}
						>
							{new Date(event.date ?? '').toDateString()}
						</Typography>
					</Stack>
					<Typography
						sx={{
							fontSize: {
								xs: 'clamp(24px, 5vw, 48px)',
								sm: 'clamp(32px, 5vw, 64px)',
							},
						}}
					>
						{event.title}
					</Typography>
				</Stack>

				{/* Border Gradient Effect */}
				<Stack
					className='gradient-overlay'
					sx={{
						position: 'absolute',
						inset: 0,
						borderRadius: '8px',
						padding: '2px',
						background:
							'linear-gradient(135deg, #FF1083 0%, transparent 15%, transparent 85%, #FF1083 100%)',
						WebkitMask:
							'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
						WebkitMaskComposite: 'xor',
						maskComposite: 'exclude',
						pointerEvents: 'none',
						transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
					}}
				/>
			</Stack>

			<ArrowIcon
				onClick={onNextClick}
				sx={{
					fill: 'white',
					height: '20%',
					width: 'auto',
					transform: 'rotate(-90deg)',
					cursor: 'pointer',
					'&:hover': {
						opacity: 0.8,
					},
				}}
			/>
		</Stack>
	)
}

export default EventCard
