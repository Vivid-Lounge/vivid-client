import React, { useState } from 'react'
import {
	Modal,
	Box,
	Grid,
	Typography,
	Stack,
	TextField,
	IconButton,
	Grid2,
	Button,
} from '@mui/material'
import { Event } from '../../../../../shared/types'
import { Close as CloseIcon } from '@mui/icons-material'
import VerticalEventCard from '../../MainPage/components/VerticalEventCard'
import CustomCalendarModal from '../../../components/CustomCalendarModal'
import { useNavigate } from 'react-router-dom'

interface AllEventsModalProps {
	open: boolean
	onClose: () => void
	events: Event[]
}

const AllEventsModal: React.FC<AllEventsModalProps> = ({
	open,
	onClose,
	events,
}) => {
	const [dateFilter, setDateFilter] = useState<string>('')
	const [isCalendarOpen, setIsCalendarOpen] = useState(false)
	const filteredEvents = events.filter((event) => {
		if (!dateFilter) return true
		const eventDate = new Date(event.date ?? '')
		const filterDate = new Date(dateFilter)
		return eventDate >= filterDate
	})
	const navigate = useNavigate()
	// Sort events by date (upcoming first)
	const sortedEvents = [...filteredEvents].sort((a, b) => {
		return (
			new Date(a.date ?? '').getTime() - new Date(b.date ?? '').getTime()
		)
	})

	return (
		<Modal open={open} onClose={onClose} aria-labelledby='all-events-modal'>
			<Box
				sx={{
					position: 'absolute',
					top: '50%',
					color: 'white',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					width: '90%',
					maxWidth: '1200px',
					minHeight: '80vh',
					maxHeight: '90vh',
					backdropFilter: 'blur(5px)',
					backgroundColor: 'rgba(82, 66, 66, 0.5)',
					borderRadius: 2,

					boxShadow: '0px 0px 20px 1px rgba(255, 255, 255, 0.5)',
					p: 4,
					overflow: 'auto',
				}}
			>
				<Stack spacing={3}>
					<Box
						display='flex'
						justifyContent='space-between'
						alignItems='center'
					>
						<Typography variant='h4' component='h2'>
							All Events
						</Typography>
						<IconButton onClick={onClose} sx={{ color: 'white' }}>
							<CloseIcon />
						</IconButton>
					</Box>

					<Button
						variant='outlined'
						onClick={() => setIsCalendarOpen(true)}
						sx={{
							width: 200,
							color: 'white',
							borderColor: 'rgba(255, 255, 255, 0.23)',
							'&:hover': {
								borderColor: '#ff69b4',
								backgroundColor: 'rgba(255, 192, 203, 0.1)',
							},
						}}
					>
						Filter by date
					</Button>

					<Grid2 container spacing={3}>
						{sortedEvents &&
							sortedEvents.map((event) => (
								<Grid2
									size={{
										xs: 12,
										sm: 6,
										md: 4,
									}}
									key={event.slug}
									onClick={() =>
										navigate(`/events/${event.slug}`)
									}
								>
									<VerticalEventCard event={event} />
								</Grid2>
							))}
					</Grid2>

					<CustomCalendarModal
						open={isCalendarOpen}
						onClose={() => setIsCalendarOpen(false)}
						events={events}
						onDateSelect={(date) => {
							setDateFilter(date.toISOString().split('T')[0])
							setIsCalendarOpen(false)
						}}
					/>
				</Stack>
				{sortedEvents.length < 1 && (
					<Typography
						sx={{
							color: 'white',
							alignSelf: 'center',
							justifySelf: 'center',
							my: 'auto',
							textAlign: 'center',
							position: 'absolute',
							top: '50%',
							left: '50%',
							fontSize: '1.5rem',
							transform: 'translate(-50%, -50%)',
						}}
					>
						<Typography
							sx={{
								display: 'inline',
								color: 'primary.main',
								fontSize: 'inherit',
							}}
						>
							No events{' '}
						</Typography>
						Available For
						<br /> The Selected Date
					</Typography>
				)}
			</Box>
		</Modal>
	)
}

export default AllEventsModal
