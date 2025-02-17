import React from 'react'
import { Stack, Typography, Box } from '@mui/material'
import { LoungeBarIcon } from '../../../../../shared/icons'

type Props = {
	title: string
	isActive?: boolean
	photo?: string
}

const ServiceContainer: React.FC<Props> = ({ photo, title, isActive }) => {
	return (
		<Stack
			sx={{
				position: 'relative',
				width: {
					xs: '100%',
					sm: '70%',
					md: 'clamp(2rem, 25%, 40rem)',
				},
			}}
		>
			{/* Main Container */}
			<Stack
				sx={{
					background: `url(${photo})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					aspectRatio: '1.83 / 1',
					justifyContent: 'center',
					gap: '1rem',
					position: 'relative',
					'&::after': !isActive
						? {}
						: {
								content: '""',
								position: 'absolute',
								top: '50%',
								width: '50px',
								height: '2px',
								background:
									'linear-gradient(90deg, transparent, #FF1083)',
								opacity: 0,
						  },
					'&::before': !isActive
						? {}
						: {
								content: '""',
								position: 'absolute',
								inset: 0,
								zIndex: 5,
								borderRadius: '4px',
								padding: '2px',
								background:
									'linear-gradient(45deg, transparent 50%, #FF1083 100%)',
								WebkitMask:
									'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
								WebkitMaskComposite: 'xor',
								maskComposite: 'exclude',
						  },
				}}
			>
				<Box
					sx={{
						width: '100%',
						height: '100%',
						p: 2,
						zIndex: 4,
						background: 'rgba(0,0,0,0.6)',
						backdropFilter: 'blur(1px)',
					}}
				>
					<LoungeBarIcon sx={{ width: '2.5rem', height: 'auto' }} />
					<Typography
						color='white'
						fontSize={'1.25rem'}
						textTransform={'uppercase'}
					>
						{title}
					</Typography>
					<Typography color='white'  fontWeight={'regular'}>
						Excepteur sint occaecat cupidatat non proident sunt in
						culpa qui officia deserunt mollit.
					</Typography>
				</Box>
			</Stack>
			

			{/* Reflection Effect */}
			<Stack
				sx={{
					position: 'absolute',
					bottom: -1,
					left: 0,
					width: '100%',
					height: '40%',
					transform: 'scaleY(-1)',
					background: `url(${photo})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					opacity: 0.4,
					'&::after': {
						content: '""',
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						background:
							'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,1) 100%)',
					},
					maskImage:
						'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
					WebkitMaskImage:
						'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
				}}
			/>
		</Stack>
	)
}

export default ServiceContainer
