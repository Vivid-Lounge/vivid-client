import React from 'react'
import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Typography,
	Stack,
	Chip,
} from '@mui/material'
import { Event } from '../../../../../shared/types'
import { Alarm } from '@mui/icons-material'
import { SERVE_IMAGES_URI } from '../../../../../shared/api_routes'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
interface VerticalEventCardProps {
	event: Event
}

const VerticalEventCard: React.FC<VerticalEventCardProps> = ({ event }) => {
	const eventDate = event.date ? new Date(event.date) : null

	const formatDate = (date: Date) => {
		return new Intl.DateTimeFormat('en-GB', {
			weekday: 'short',
			day: '2-digit',
			month: 'short',
			year: 'numeric',
		}).format(date)
	}

	const formatTime = (date: Date) => {
		return new Intl.DateTimeFormat('en-GB', {
			hour: '2-digit',
			minute: '2-digit',
			hour12: false,
		}).format(date)
	}

	return (
		<Card
			sx={{
				cursor: 'pointer',
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				bgcolor: 'grey.900',
				borderRadius: 2,
				overflow: 'hidden',
				transition: 'transform 0.2s ease-in-out',
				'&:hover': {
					transform: 'scale(1.01)',
					// '& .MuiCardMedia-root': {
					// 	transform: 'skew(1.05)',
					// },
				},
			}}
		>
			<Box
				sx={{
					position: 'relative',
					paddingTop: '177.78%' /* 16:9 aspect ratio */,
				}}
			>
				<CardMedia
					component='img'
					image={`${SERVE_IMAGES_URI}${event.coverImage}`}
					alt={event.title}
					sx={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						transition: 'transform 0.3s ease-in-out',
					}}
				/>
				{/* Gradient overlay */}
				<Box
					sx={{
						position: 'absolute',
						bottom: 0,
						left: 0,
						right: 0,
						height: '50%',
						background:
							'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)',
					}}
				/>
				{/* Status chip */}
				{eventDate && (
					<Chip
						label={
							new Date() < eventDate ? 'Upcoming' : 'Past Event'
						}
						color={new Date() < eventDate ? 'primary' : 'default'}
						sx={{
							position: 'absolute',
							top: 16,
							right: 16,
							bgcolor:
								new Date() < eventDate
									? 'primary.main'
									: 'grey.700',
						}}
					/>
				)}
			</Box>

			<CardContent sx={{ flexGrow: 1, p: 3 }}>
				<Stack spacing={2}>
					<Typography
						variant='h5'
						component='h3'
						sx={{
							color: 'common.white',
							fontWeight: 'bold',
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							display: '-webkit-box',
							WebkitLineClamp: 2,
							WebkitBoxOrient: 'vertical',
						}}
					>
						{event.title}
					</Typography>

					{eventDate && (
						<Stack spacing={1}>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									gap: 1,
								}}
							>
								<CalendarMonthIcon
									sx={{ color: 'primary.main', fontSize: 20 }}
								/>
								<Typography variant='body2' color='grey.400'>
									{formatDate(eventDate)}
								</Typography>
							</Box>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									gap: 1,
								}}
							>
								<Alarm
									sx={{ color: 'primary.main', fontSize: 20 }}
								/>
								<Typography variant='body2' color='grey.400'>
									{formatTime(eventDate)}
								</Typography>
							</Box>
						</Stack>
					)}

					<Typography
						variant='body2'
						color='grey.400'
						sx={{
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							display: '-webkit-box',
							WebkitLineClamp: 3,
							WebkitBoxOrient: 'vertical',
						}}
					>
						{event.description}
					</Typography>
				</Stack>
			</CardContent>
		</Card>
	)
}

export default VerticalEventCard
