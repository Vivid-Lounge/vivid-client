import type React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Mapa, Mail, Phone } from '../../../../../shared/icons'
import BackgroundDesktop from './../../../../../shared/images/bg-visit-desktop.png'
import BackgroundMobile from './../../../../../shared/images/bg-visit-mobile.png'
import FooterSection from './FooterSection'

const VisitSection: React.FC = () => {
	return (
		<Box
			sx={{
				width: '100%',
				minHeight: '100vh',
				background: {
					xs: `linear-gradient(180deg, #0B0B0B 0%, rgba(66, 21, 37, 0.33) 43%, #552138 100%), url('${BackgroundMobile}')`,
					md: `linear-gradient(180deg, #0B0B0B 0%, rgba(66, 21, 37, 0.33) 43%, #552138 100%), url(${BackgroundDesktop})`,
				},
				backgroundRepeat: {
					xs: 'no-repeat',
					md: 'no-repeat'
				},
				backgroundSize: {
					xs: 'cover',
					md: 'cover'
				},
				backgroundPosition: {
					xs: 'center',
					md: 'center'
				},
				position: 'relative',
				overflow: 'hidden',
			}}
		>
			<Stack
				sx={{
					height: '100%',
					width: '100%',
					maxWidth: '1200px',
					margin: '0 auto',
					padding: {
						xs: '4rem 1rem 12rem 1rem',
						md: '6rem 2rem',
					},
					gap: {
						xs: '2rem',
						md: '2rem',
					},
				}}
			>
				{/* Hero Section */}
				<Stack
					sx={{
						gap: { xs: '1.5rem', md: '2rem' },
						alignItems: { xs: 'center', md: 'flex-start' },
						textAlign: { xs: 'center', md: 'left' },
						width: { xs: '100%', md: '50%' },
					}}
				>
					<Typography
						sx={{
							color: '#FF1083',
							fontSize: { xs: '1.5rem', md: '2rem' },
							fontWeight: '700',
							letterSpacing: '0.1em',
							textShadow: `
								0px 0px 24.299999237060547px #FF1083`
						}}
					>
						VISIT US
					</Typography>

					<Stack sx={{ gap: '0.5rem' }}>
						<Typography
							sx={{
								color: 'white',
								fontSize: { xs: '2.5rem', md: '4rem' },
								fontWeight: '800',
								lineHeight: 1.1,
							}}
						>
							COME AND VISIT
						</Typography>
						<Typography
							sx={{
								color: 'transparent',
								fontSize: { xs: '2.5rem', md: '4rem' },
								fontWeight: '800',
								lineHeight: 1.1,
								WebkitTextStroke: '1px white',
							}}
						>
							OUR CLUB
						</Typography>
					</Stack>
					<Stack
						sx={{
							aspectRatio: '4 / 2.7',
							// background: 'rgba(255, 0, 0, 0.6)',
							width: 'clamp(259px, 85vw, 700px)',
							height: 'auto',
							display: {
								xs: 'flex',
								md: 'none'
							}
						}}
					/>
					<Box
						component='button'
						sx={{
							background: 'transparent',
							border: '1px solid rgba(255, 255, 255, 0.5)',
							borderRadius: '4px',
							padding: '0.75rem 2rem',
							color: 'white',
							fontSize: '1.25rem',
							cursor: 'pointer',
							transition: 'all 0.2s',
							backdropFilter: 'blur(5px)',
							'&:hover': {
								background: 'rgba(255, 255, 255, 0.1)',
							},
						}}
					>
						CONTACT US
					</Box>
				</Stack>

				{/* Contact Info Box */}
				<Stack
					sx={{
						boxShadow: '0 10px 30px -10px rgba(0,0,0,0.3)',

						transition: 'transform 0.5s ease, opacity 0.5s ease',

						'&::after': {
							content: '""',
							position: 'absolute',
							top: '50%',

							width: '50px',
							height: '2px',
							background:
								'linear-gradient(90deg, transparent, #FF1083)',
							opacity: 0,
						},

						'&::before': {
							content: '""',
							position: 'absolute',
							inset: 0,
							borderRadius: '4px',
							padding: '2px',
							background:
								'linear-gradient(45deg, transparent 50%, #FF1083 100%)',
							WebkitMask:
								'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
							WebkitMaskComposite: 'xor',
							maskComposite: 'exclude',
						},
						background: 'rgba(29, 29, 29, 0.9)',
						padding: '2rem',
						gap: '1rem',
						width: { xs: '100%', md: '400px' },
						alignSelf: { xs: 'center', md: 'flex-end' },
						marginTop: { xs: '1rem', md: '-15rem' },
						backdropFilter: 'blur(10px)',
						border: '1px solid rgba(255, 255, 255, 0.1)',
					}}
				>
					<Stack direction='row' spacing={2} alignItems='center'>
						<Mapa
							sx={{
								width: '2rem',
								height: '2rem',
								color: '#FF1083',
							}}
						/>
						<Typography
							sx={{
								color: 'white',
								fontSize: '1rem',
								fontWeight: 'light',
							}}
						>
							Bld Profesor Dimitrie Mangeron Nr 71, Iași
						</Typography>
					</Stack>
					<Stack direction='row' spacing={2} alignItems='center'>
						<Mail
							sx={{
								width: '2rem',
								height: '2rem',
								color: '#FF1083',
							}}
						/>
						<Typography
							sx={{
								color: 'white',
								fontSize: '1rem',
								fontWeight: 'light',
							}}
						>
							vividlounge@gmail.com
						</Typography>
					</Stack>
					<Stack direction='row' spacing={2} alignItems='center'>
						<Phone
							sx={{
								width: '2rem',
								height: '2rem',
								color: '#FF1083',
							}}
						/>
						<Typography
							sx={{
								color: 'white',
								fontSize: '1rem',
								fontWeight: 'light',
							}}
						>
							0755.334.826
						</Typography>
					</Stack>
				</Stack>

				{/* Footer */}
				<FooterSection />
			</Stack>
		</Box>
	)
}

export default VisitSection
