import React, { useState, useCallback } from 'react'
import {
	Modal,
	Box,
	IconButton,
	Typography,
	styled,
	keyframes,
	useMediaQuery,
	useTheme,
} from '@mui/material'
import {
	ChevronLeft,
	ChevronRight,
	DoorClosedIcon as CloseIcon,
} from 'lucide-react'
import { Event } from '../../../shared/types'

interface CustomCalendarModalProps {
	open: boolean
	onClose: () => void
	events: Event[]
	onDateSelect: (date: Date) => void
}

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100%);
    opacity: 0;
  }
`

const CalendarGrid = styled(Box)(({ theme }) => ({
	display: 'grid',
	gridTemplateColumns: 'repeat(7, 1fr)',
	gap: '8px',
	padding: '16px',
	width: '100%',
	alignItems: 'center',

	'& > div': {
		aspectRatio: '1',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: '50%',
		cursor: 'pointer',
		position: 'relative',
		transition: 'all 0.2s ease',
		fontSize: '1.1rem',
		'&:hover': {
			backgroundColor: 'rgba(255, 192, 203, 0.2)',
		},
		'&.today': {
			border: '2px solid #ff69b4',
		},
		'&.selected': {
			backgroundColor: '#ff69b4',
			color: 'white',
		},
		'&.has-events': {
			'&::after': {
				content: '""',
				position: 'absolute',
				bottom: '4px',
				width: '20px',
				height: '3px',
				backgroundColor: '#ff69b4',
				borderRadius: '2px',
			},
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: '0.9rem',
		},
	},
}))

const MonthContainer = styled(Box)({
	display: 'flex',
	flexDirection: 'column',
	minWidth: '50%',
	padding: '20px',
})

const CustomCalendarModal: React.FC<CustomCalendarModalProps> = ({
	open,
	onClose,
	events,
	onDateSelect,
}) => {
	const [currentDate, setCurrentDate] = useState(new Date())
	const [selectedDate, setSelectedDate] = useState<Date | null>(null)
	const [slideDirection, setSlideDirection] = useState<'left' | 'right'>(
		'right'
	)
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

	const daysInMonth = new Date(
		currentDate.getFullYear(),
		currentDate.getMonth() + 1,
		0
	).getDate()

	const firstDayOfMonth = new Date(
		currentDate.getFullYear(),
		currentDate.getMonth(),
		1
	).getDay()

	const handlePrevMonth = () => {
		setSlideDirection('right')
		setCurrentDate(
			(prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
		)
	}

	const handleNextMonth = () => {
		setSlideDirection('left')
		setCurrentDate(
			(prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
		)
	}

	const hasEventsOnDate = useCallback(
		(date: Date) => {
			return events.some((event) => {
				const eventDate = new Date(event.date ?? '')
				return (
					eventDate.getDate() === date.getDate() &&
					eventDate.getMonth() === date.getMonth() &&
					eventDate.getFullYear() === date.getFullYear()
				)
			})
		},
		[events]
	)

	const handleDateClick = (day: number) => {
		const selectedDate = new Date(
			currentDate.getFullYear(),
			currentDate.getMonth(),
			day
		)
		setSelectedDate(selectedDate)
		onDateSelect(selectedDate)
		onClose()
	}

	const weekDays = ['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su']

	return (
		<Modal open={open} onClose={onClose}>
			<Box
				sx={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',

					bgcolor: '#1a1a1a',
					borderRadius: isMobile ? '16px' : '24px',
					boxShadow: 24,
					color: 'white',
					overflow: 'hidden',
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
				}}
			>
				{/* Close button with label */}
				<Box
					sx={{
						display: 'flex',
						flexDirection: isMobile ? 'row' : 'column',
						alignItems: 'center',
						justifyContent: 'center',
						position: 'absolute',
						top: isMobile ? 8 : 16,
						left: isMobile ? 8 : 16,
						zIndex: 10,
					}}
				>
					{/* {!isMobile && (
						<Typography
							variant='caption'
							sx={{
								color: '#ff69b4',
								mt: 1,
								fontSize: '0.75rem',
								textTransform: 'uppercase',
								letterSpacing: '0.1em',
							}}
						>
							Close
						</Typography>
					)} */}
				</Box>

				{/* Calendar Header */}
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						py: isMobile ? 2 : 4,
						borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
						mb: 2,
					}}
				>
					<IconButton
						onClick={handlePrevMonth}
						sx={{
							color: 'white',
							mx: isMobile ? 1 : 2,
							'&:hover': {
								backgroundColor: 'rgba(255, 192, 203, 0.2)',
							},
						}}
					>
						<ChevronLeft size={isMobile ? 20 : 24} />
					</IconButton>
					<Typography
						variant={isMobile ? 'h5' : 'h4'}
						sx={{
							fontWeight: 'bold',
							color: '#ff69b4',
							textTransform: 'uppercase',
							letterSpacing: '0.1em',
						}}
					>
						{currentDate.toLocaleDateString('en-US', {
							month: 'long',
							year: 'numeric',
						})}
					</Typography>
					<IconButton
						onClick={handleNextMonth}
						sx={{
							color: 'white',
							mx: isMobile ? 1 : 2,
							'&:hover': {
								backgroundColor: 'rgba(255, 192, 203, 0.2)',
							},
						}}
					>
						<ChevronRight size={isMobile ? 20 : 24} />
					</IconButton>
				</Box>

				{/* Calendar Grid */}
				<Box
					sx={{
						overflowX: 'hidden',
						overflowY: isMobile ? 'auto' : 'hidden',
						px: isMobile ? 2 : 4,
						pb: isMobile ? 2 : 4,
						flexGrow: 1,
					}}
				>
					<Box
						sx={{
							animation: `${
								slideDirection === 'left' ? slideIn : slideOut
							} 0.3s ease-in-out`,
						}}
					>
						<MonthContainer>
							<CalendarGrid>
								{weekDays.map((day) => (
									<Box
										key={day}
										sx={{
											color: '#ff69b4',
											fontWeight: 'bold',
											textTransform: 'uppercase',
											fontSize: isMobile
												? '0.7rem'
												: '0.9rem',
											letterSpacing: '0.1em',
											mb: isMobile ? 1 : 2,
										}}
									>
										{day}
									</Box>
								))}

								{Array.from({
									length: firstDayOfMonth - 1,
								}).map((_, index) => (
									<Box key={`empty-${index}`} />
								))}

								{Array.from({ length: daysInMonth }).map(
									(_, index) => {
										const day = index + 1
										const date = new Date(
											currentDate.getFullYear(),
											currentDate.getMonth(),
											day
										)
										const isToday =
											date.toDateString() ===
											new Date().toDateString()
										const isSelected =
											selectedDate?.toDateString() ===
											date.toDateString()
										const hasEvents = hasEventsOnDate(date)

										return (
											<Box
												key={day}
												onClick={() =>
													handleDateClick(day)
												}
												className={`
                        ${isToday ? 'today' : ''}
                        ${isSelected ? 'selected' : ''}
                        ${hasEvents ? 'has-events' : ''}
                      `}
												sx={{
													'&:hover': {
														transform: 'scale(1.1)',
														backgroundColor:
															'rgba(255, 192, 203, 0.2)',
													},
													transition: 'all 0.2s ease',
												}}
											>
												{day}
											</Box>
										)
									}
								)}
							</CalendarGrid>
							<IconButton
								onClick={onClose}
								sx={{
									mt: {
										xs: 0.5,
										md: 1,
									},
									borderBottom: '4px solid secondary.main',
									color: 'white',

									'&:hover': {
										color: 'primary.main',
										background: 'none',
									},
									transition: 'all 0.2s',
									fontSize: '1.05rem',
								}}
							>
								Close
							</IconButton>
						</MonthContainer>
					</Box>
				</Box>
			</Box>
		</Modal>
	)
}

export default CustomCalendarModal
