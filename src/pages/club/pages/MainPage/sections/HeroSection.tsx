import React from 'react'
import { Grid2, Typography, Box, Link } from '@mui/material'
import { VividLogoIcon } from '../../../../../shared/icons'
import Button from '../../../components/Button'
import videohero from '../../../../../shared/videohero.mp4'
import { Navigate, useNavigate } from 'react-router-dom'
const HeroSection: React.FC = () => {
	const navigate = useNavigate()
	return (
		<Grid2
			container
			sx={{
				height: '100dvh',
				width: '100dvw',
				position: 'relative',
				alignItems: 'center',
				justifyContent: 'center',
				padding: {
					xs: '1rem 0rem',
				},
				overflow: 'hidden', // Ensure video doesn't create scrollbars
				flexDirection: 'column',
			}}
		>
			{/* Video Background */}
			<Box
				sx={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					zIndex: 0,
					'&::after': {
						content: '""',
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						background:
							'linear-gradient(180deg, rgba(66, 21, 37, 0.33) 0%, #552138 100%)',
						zIndex: 1,
					},
				}}
			>
				<video
					autoPlay
					muted
					loop
					playsInline
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						position: 'absolute',
						top: 0,
						left: 0,
					}}
				>
					<source src={videohero} type='video/mp4' />
					{/* Fallback for browsers that don't support video */}
					Your browser does not support the video tag.
				</video>
			</Box>

			{/* Content */}
			<Grid2
				container
				size={{ xs: 12, md: 10 }}
				sx={{
					height: '100%',
					position: 'relative',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
					gap: '2rem',
					zIndex: 1, // Ensure content stays above video
				}}
			>
				<VividLogoIcon
					sx={{
						width: 'clamp(10rem, 60%, 46rem)',
						height: 'auto',
						fill: 'white',
					}}
				/>
				<Link
					sx={{
						textDecoration: 'none',
						color: 'white',
					}}
					href='https://restaurant.lsaciasi.ro/'
					target='_blank'
				>
					<Button>
						<Typography>restaurant</Typography>
					</Button>
				</Link>
			</Grid2>
		</Grid2>
	)
}

export default HeroSection
