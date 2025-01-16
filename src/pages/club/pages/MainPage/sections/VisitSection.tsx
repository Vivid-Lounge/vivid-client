import React from 'react'
import { Grid2, Typography, Stack, Divider } from '@mui/material'
import Background from './../../../../../shared/images/visit-background.png'
import Button from '../../../components/Button'
import { VisitOurClub, Mapa, Mail, Phone } from '../../../../../shared/icons'

const VisitSection: React.FC = () => {
	return (
		<Grid2
			container
			sx={{
				height: '100dvh',
				width: '100dvw',
				// background: '#0B0B0B',
				background: `linear-gradient(180deg, #0B0B0B 0%, rgba(66, 21, 37, 0.33) 43%, #552138 100% ), url(${Background})`,
				alignItems: 'center',
				justifyContent: 'center',
				padding: {
					xs: '1rem 0rem',
				},
				position: 'relative',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				overflowX: 'hidden',
			}}
		>
			<Grid2
				container
				size={{ xs: 10 }}
				sx={{
					// background: 'blue',
					width: '83%',
					height: '100%',
					padding: '4rem',
					position: 'relative',
					alignItems: 'flex-start',
					justifyContent: 'center',
					flexDirection: 'column',
					gap: '2rem',
				}}
			>
				<Typography
					color='#ffffff'
					fontSize={36}
					fontWeight={'bold'}
					width={'max-content'}
				>
					VISIT US
				</Typography>
				<VisitOurClub sx={{ width: '45%', height: 'auto' }} />
				<Stack
					sx={{
						width: '100%',
						height: 'auto',
						flexDirection: 'row-reverse',
						// background: 'red',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Typography
						sx={{
							width: '50%',
							height: 'auto',
							padding: '2rem',
							background: '#1D1D1D',
							color: 'white',
							fontWeight: 'regular',
						}}
					>
						<Stack
							sx={{
								display: 'flex',
								flexDirection: 'row',
								gap: '16px',
								alignItems: 'center',
							}}
						>
							<Mapa sx={{ height: '40px', width: '40px' }} />
							<Typography
								sx={{ fontSize: '20px', fontWeight: 'light' }}
							>
								Bld Profesor Dimitrie Mangeron Nr 71, Iași
							</Typography>
						</Stack>
						<Divider
							sx={{
								borderColor: '#1d1d1d',
								borderWidth: '4px',
								borderRadius: '20px',
							}}
						/>
						<Stack
							sx={{
								display: 'flex',
								flexDirection: 'row',
								gap: '16px',
								alignItems: 'center',
							}}
						>
							<Mail sx={{ height: '40px', width: '40px' }} />
							<Typography
								sx={{ fontSize: '20px', fontWeight: 'light' }}
							>
								vividlounge@gmail.com
							</Typography>
						</Stack>
						<Divider
							sx={{
								borderColor: '#1d1d1d',
								borderWidth: '4px',
								borderRadius: '20px',
							}}
						/>
						<Stack
							sx={{
								display: 'flex',
								flexDirection: 'row',
								gap: '16px',
								alignItems: 'center',
							}}
						>
							<Phone sx={{ height: '40px', width: '40px' }} />
							<Typography
								sx={{ fontSize: '20px', fontWeight: 'light' }}
							>
								0755.334.826
							</Typography>
						</Stack>
					</Typography>
					<Button>
						<Typography fontWeight={'light'} fontSize={'1.25rem'}>
							CONTACT US
						</Typography>
					</Button>
				</Stack>
			</Grid2>
		</Grid2>
	)
}

export default VisitSection
