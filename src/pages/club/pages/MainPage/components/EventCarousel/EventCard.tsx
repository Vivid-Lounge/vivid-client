import type React from 'react'
import { Stack, Typography, Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import type { Event } from '../../../../../../shared/types'
import { SERVE_IMAGES_URI } from '../../../../../../shared/api_routes'

const StyledCard = styled(Box)(() => ({
	position: 'relative',
	borderRadius: '12px',
	overflow: 'hidden',
	cursor: 'pointer',
	boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
	minWidth: '300px',
	maxWidth: '400px',
	minHeight: '400px',
	maxHeight: '560px',
	width: '100%',
	height: '75dvh',
}))

const CardOverlay = styled(Box)({
	position: 'absolute',
	inset: 0,
	background: 'rgba(0,0,0,0.0)',
	zIndex: 1,
})

const GradientBorder = styled(Box)({
	position: 'absolute',
	inset: 0,
	padding: '3px',
	borderRadius: '12px',
	background:
		'linear-gradient(135deg, #FF1083 0%, transparent 15%, transparent 85%, #FF1083 100%)',
	WebkitMask:
		'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
	WebkitMaskComposite: 'xor',
	maskComposite: 'exclude',
	opacity: 0.7,
	zIndex: 2,
})

const ShadowInset = styled(Box)({
	position: 'absolute',
	inset: 0,
	zIndex: 2,
	pointerEvents: 'none',
	background: `
    linear-gradient(
      to bottom,
      rgba(0,0,0,0.5) 10%,
      rgba(0,0,0,0) 20%,
      rgba(0,0,0,0) 70%,
      rgba(0,0,0,0.8) 90%
    )
  `,
})

interface Props {
	event: Event
	onClick: () => void
}

const EventCard: React.FC<Props> = ({ event, onClick }) => {
	return (
		<StyledCard onClick={onClick}>
			<img
				src={`${SERVE_IMAGES_URI}${event.posterImage}`}
				alt={event.title}
				style={{
					width: '100%',
					height: '100%',
					objectFit: 'cover',
					position: 'absolute',
					top: 0,
					left: 0,
				}}
			/>
			<CardOverlay />
			<GradientBorder />
			<ShadowInset />

			<Stack
				sx={{
					position: 'relative',
					height: '100%',
					p: 3,
					zIndex: 3,
					justifyContent: 'space-between',
				}}
			>
				<Typography
					sx={{
						color: 'white',
						fontSize: '1rem',
						fontWeight: 500,
						textTransform: 'uppercase',
						letterSpacing: '0.1em',
					}}
				>
					{new Date(event.date ?? '').toDateString()}
				</Typography>

				<Typography
					variant='h3'
					sx={{
						color: 'white',
						fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
						fontWeight: 700,
						textShadow: '0 2px 4px rgba(0,0,0,0.3)',
						maxWidth: '100%',
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						display: '-webkit-box',
						WebkitLineClamp: '2',
						WebkitBoxOrient: 'vertical',
						lineHeight: 1.2,
						maxHeight: '30%',
					}}
				>
					{event.title}
				</Typography>
			</Stack>
		</StyledCard>
	)
}

export default EventCard
