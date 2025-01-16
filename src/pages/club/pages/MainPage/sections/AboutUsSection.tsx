import React, { useRef, useEffect, useState } from 'react'
import { Grid2, Stack, Typography } from '@mui/material'
import SectionTitle from '../../../components/SectionTitle'
import AboutDescription from '../components/AboutDescription'
import Background from './../../../../../shared/images/about-us-photo2.png'
import Button from '../../../components/Button'

const AboutUsSection: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false)
	const sectionRef = useRef(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting)
			},
			{ threshold: 0.2 }
		)

		if (sectionRef.current) {
			observer.observe(sectionRef.current)
		}

		return () => observer.disconnect()
	}, [])

	return (
		<Grid2
			container
			ref={sectionRef}
			sx={{
				// minHeight: "100vh",
				width: '100vw',
				background: 'linear-gradient(0deg, #522036 25%, #0B0B0B 83%)',
				alignItems: 'flex-start',
				justifyContent: 'center',
				padding: {
					xs: '2rem 1rem',
					md: '2rem 0',
				},
				height: 'max-content',
			}}
		>
			<Grid2
				container
				size={{ xs: 10, sm: 8, md: 10 }}
				sx={{
					height: 'max-content',
					alignItems: {
						xs: 'center',
						md: 'flex-start',
					},
					justifyContent: 'space-between',
					gap: '1rem',
					flexDirection: {
						xs: 'column',
						md: 'row',
					},
				}}
			>
				<Stack
					sx={{
						width: {
							xs: '100%',
							md: 'calc(50%)',
						},
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '16px',
					}}
				>
					<SectionTitle
						title='WHO WE ARE'
						subtitle='About US'
						description='La Vivid Club, creăm un spațiu unic dedicat celor care vor să trăiască momente de neuitat într-o atmosferă vibrantă și plină de energie.'
					/>
					<Stack
						sx={{
							width: '100%',
							flexDirection: 'row',
							gap: '16px',
						}}
					>
						<Stack
							sx={{
								aspectRatio: '1 / 1.29',
								width: 'calc(50% - 16px)',
								height: 'auto',
								background: `url(${Background})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								opacity: isVisible ? 1 : 0,
								transform: isVisible
									? 'translateY(0)'
									: 'translateY(100px)',
								transition: 'all 1s ease-out',
							}}
						/>
						<Stack
							sx={{
								aspectRatio: '1 / 1.29',
								width: 'calc(50%)',
								height: 'auto',
								background: `url(${Background})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								opacity: isVisible ? 1 : 0,
								transform: isVisible
									? 'translateY(0)'
									: 'translateY(-100px)',
								transition: 'all 1s ease-out',
							}}
						/>
					</Stack>
				</Stack>
				<Stack
					sx={{
						width: { xs: '100%', md: 'calc(40% - 16px)' },
						gap: '4rem',
						alignItems: 'center',
						flexDirection: { xs: 'column-reverse', md: 'column' },
					}}
				>
					<AboutDescription />
					<Button sx={{ width: '100%', alignItems: 'center' }}>
						<Typography fontWeight={'regular'} fontSize={'1.5rem'}>
							MORE INFO ABOUT US
						</Typography>
					</Button>
				</Stack>
			</Grid2>
		</Grid2>
	)
}

export default AboutUsSection
