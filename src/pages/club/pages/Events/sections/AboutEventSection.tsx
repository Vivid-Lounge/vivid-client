import React, { useState } from 'react'
import { Stack, Typography, useMediaQuery } from '@mui/material'
import { DateIcon, InfoIcon } from '../../../../../shared/icons'
import EventsFeature from '../components/EventsFeature'
import { Event } from '../../../../../shared/types'
import { GradientButton } from '../../../components'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import { SERVE_IMAGES_URI } from '../../../../../shared/api_routes'
import { Link, useNavigate } from 'react-router-dom'

interface Props {
	event: Event
}

const AboutEventSection: React.FC<Props> = ({ event }) => {
	const [isOpen, setIsOpen] = useState(false)

	const handleOpen = () => {
		setIsOpen(!isOpen)
	}
	const isMobile = useMediaQuery('(max-width: 600px)')
	console.log(event)
	const navigate = useNavigate()
	if (!event) {
		navigate('/')
		return null
	}
	return (
		<>
			<Stack
				sx={{
					mt: 5,
					transition: 'opacity 4s ease',
					opacity: isOpen ? '0' : '1',
					width: {
						xs: '95%',
						sm: 'calc(40% - 16px)',
					},
					height: {
						xs: '95%',
						md: '100%',
					},
					background: `url("${SERVE_IMAGES_URI}${event.posterImage}")`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					position: {
						xs: 'absolute',
						sm: 'relative',
					},
				}}
			>
				<Stack
					sx={{
						position: 'absolute',
						background: 'rgba(0,0,0,0.6)',
						aspectRatio: '1 / 1',
						width: '52px',
						height: 'auto',
						bottom: '16px',
						right: '16px',
						borderRadius: '50%',
						display: {
							xs: 'flex',
							sm: 'none',
						},
						cursor: 'pointer',
						zIndex: '5',
						overflow: 'hidden',
						alignItems: 'center',
						justifyContent: 'center',
						border: '2px solid #ff1083',
					}}
					onClick={handleOpen}
				>
					<InfoIcon
						sx={{ fill: 'white', width: '16px', height: 'auto' }}
					/>
				</Stack>
			</Stack>

			<Stack
				sx={{
					width: {
						xs: '100%',
						sm: 'calc(60% - 16px)',
					},
					textWrap: 'wrap',
					flexWrap: 'wrap',
					lineBreak: 'anywhere',
					height: {
						xs: isOpen ? '100%' : '0',
						sm: '100%',
					},
					//   background: "red",
					alignItems: 'flex-start',
					justifyContent: 'space-between',
					padding: {
						xs: '32px',
						sm: '0',
					},
					position: {
						xs: 'absolute',
						sm: 'relative',
					},
					//   transition: 'all 0.2s ease-in-out',
					'&::before': {
						content: '" "',
						background: 'rgba(0,0,0,0.6)',
						width: isOpen ? '100%' : '0',
						height: isOpen ? '100%' : '0',
						position: 'absolute',
						// zIndex: '100',
						top: '0',
						left: '0',
						overflow: 'hidden',
						transition: 'all 0.4s ease-in-out',
						transform: {
							// xs: isOpen ? 'translate(0, 0)' : 'translate(0, -500%)'
						},
					},
				}}
			>
				<Stack
					sx={{
						width: '100%',
						gap: '2rem',
						// padding: '16px',
						// background: 'rgba(0,0,0,0.6)'
						zIndex: '4',
						transition: 'all 0.2s ease-in-out',
						display: {
							xs: 'flex',
							// xs: isOpen ? 'flex' : 'none',
							sm: 'flex',
						},
						transform: {
							xs: isOpen
								? 'translate(0, 0)'
								: 'translate(0, -1000%)',
							sm: 'unset',
						},
					}}
				>
					<Typography
						sx={{
							color: 'white',
							fontSize: 'clamp(1.25rem, 2vw, 2rem)',
							fontWeight: '1000',
							WebkitTextStroke: '1px white',
							WebkitTextFillColor: 'transparent',
							WebkitBackgroundClip: 'text',
							letterSpacing: '2px',
							mt: 5,
						}}
					>
						{event.title}
					</Typography>
					<Typography
						sx={{
							color: 'white',
							fontSize: 'clamp(16px, 2vw, 18px)',
						}}
					>
						{event.description}
					</Typography>
				</Stack>
				<Stack
					sx={{
						width: '100%',
						gap: '2rem',
						// background: 'rgba(0,0,0,0.6)',
						// padding: '16px',
						// border: '1px solid #ff1083'
						zIndex: '4',
						transform: {
							xs: isOpen
								? 'translate(0, 0)'
								: 'translate(0, 500%)',
							sm: 'unset',
						},
						transition: 'all 0.2s ease-in-out',
						overflow: 'hidden',
					}}
				>
					<Typography
						color='white'
						textTransform={'uppercase'}
						fontSize={'1.25rem'}
					>
						About event
					</Typography>
					<Stack
						sx={{
							gap: '1rem',
						}}
					>
						<EventsFeature
							featureIcon={<DateIcon />}
							featureTitle='date'
							featureDescription={new Date(
								event.date ?? ''
							).toDateString()}
						/>
						<EventsFeature
							featureIcon={<LocalPhoneIcon />}
							featureTitle='RSVP'
							featureDescription={event.phone}
						/>
					</Stack>
					<Link to={event.ticketsLink && event.ticketsLink}>
						<GradientButton sx={{ width: 'max-content' }}>
							Buy Tickets
						</GradientButton>
					</Link>
					{isOpen && (
						<Stack
							sx={{
								position: 'absolute',
								background: 'rgba(0,0,0,0.6)',
								aspectRatio: '1 / 1',
								width: '52px',
								height: 'auto',
								bottom: '0',
								right: 0,

								borderRadius: '50%',
								display: {
									xs: 'flex',
									sm: 'none',
								},
								cursor: 'pointer',
								zIndex: '5',
								overflow: 'hidden',
								alignItems: 'center',
								justifyContent: 'center',
								border: '2px solid #ff1083',
							}}
							onClick={handleOpen}
						>
							<InfoIcon
								sx={{
									fill: 'white',
									width: '16px',
									height: 'auto',
								}}
							/>
						</Stack>
					)}
				</Stack>
			</Stack>
		</>
	)
}

export default AboutEventSection
