import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import { events } from './events'
import { Grid2 } from '@mui/material'
// import { EventHeroSection } from '../sections'
import AboutEventSection from '../sections/AboutEventSection'
import { Event } from '../../../../../shared/types'
import {
	API_URI,
	SERVE_IMAGES_URI,
	api,
} from '../../../../../shared/api_routes'
const EventPage: React.FC = () => {
	const { slug } = useParams<{ slug: string }>()
	console.log(slug)
	const navigate = useNavigate()
	const [event, setEvent] = React.useState<Event>({} as Event)
	const retrieveEvent = async () => {
		const response = await fetch(API_URI + api.getEvent.route + `${slug}`, {
			method: api.getEvent.method,
			headers: {
				'Content-Type': 'application/json',
			},
		})
		if (response.status === 200) {
			const data = (await response.json()) as Event
			setEvent(data)
		} else {
			{
				navigate('/', { replace: true })
				setEvent({} as Event)
			}
		}
	}
	useEffect(() => {
		retrieveEvent()
		console.log(event)
	}, [])
	console.log(event)
	if (!event) {
		return <h3>Event not found</h3>
	}

	return (
		<Grid2
			container
			sx={{
				width: '100vw',
				height: '100vh',
				justifyContent: 'center',
				alignItems: 'center',
				// background: 'red',
				background: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("${SERVE_IMAGES_URI}${event.coverImage}")`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				padding: {
					xs: '16px',
					md: '32px 0px',
				},
			}}
		>
			{/* <Box
				sx={{
					width: '100%',
					height: '100%',
					zIndex: -1,
					opacity: 0.5,
					position: 'absolute',
					top: 0,
					left: 0,
					background: `url("${SERVE_IMAGES_URI}${event.coverImage}")`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
				}}
			></Box> */}
			<Grid2
				container
				size={{ xs: 12, md: 10 }}
				sx={{
					// width: '100%',
					height: 'calc(100% - 60px)',
					// border: '1px solid black',
					position: 'relative',
					justifyContent: 'center',
					flexDirection: {
						xs: 'column',
						md: 'row',
					},
					alignItems: 'center',
					// background: 'red',
					gap: '32px',
				}}
			>
				<AboutEventSection event={event} />
			</Grid2>
		</Grid2>
	)
}

export default EventPage
