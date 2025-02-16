import React from 'react'
import { Box, Stack, Typography, useMediaQuery } from '@mui/material'
import { VividLogoIcon } from '../../../../../shared/icons'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import { useTheme } from '@mui/material'

const FooterSection: React.FC = () => {
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('md'))

	return (
		<Box
			sx={{
				width: '100%',
				position: 'absolute',
				bottom: 0,
				left: 0,
				background:
					'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)',
				padding: {
					xs: '1rem',
					md: '2rem 1rem',
				},
				height: 'max-content',
			}}
		>
			<Stack
				sx={{
					// maxWidth: '1200px',
					margin: '0 auto',
					gap: '1rem',
				}}
			>
				<Stack
					sx={{
						borderTop: '1px solid rgba(255,255,255,0.2)',
						borderBottom: '1px solid rgba(255,255,255,0.2)',
						padding: {
							xs: '1rem 0',
							md: '2rem 0',
						},
						width: '100%',
					}}
				>
					<Stack
						direction={{ xs: 'column', md: 'row' }}
						justifyContent='space-between'
						alignItems='center'
						spacing={3}
					>
						<Box sx={{ width: { xs: 'max-content', md: '20%' } }}>
							<VividLogoIcon
								sx={{
									height: '100px',
									width: '200px',
									fill: 'white',
								}}
							/>
						</Box>

						<Stack
							alignItems='center'
							spacing={1}
							sx={{
								width: { xs: '100%', md: '60%' },
								py: { xs: 2, md: 0 },
							}}
						>
							<Typography
								sx={{
									color: 'grey',
									textTransform: 'uppercase',
									letterSpacing: '2px',
									textAlign: 'center',
								}}
							>
								Follow Us On
								<br />
								Social Media
							</Typography>
							<Stack direction='row' spacing={2}>
								<FacebookIcon
									sx={{
										fontSize: '50px',
										color: 'grey',
										cursor: 'pointer',
										'&:hover': { color: 'white' },
									}}
									onClick={() =>
										window.open(
											'https://www.facebook.com/vividclubiasi',
											'_blank'
										)
									}
								/>
								<InstagramIcon
									sx={{
										fontSize: '50px',
										color: 'grey',
										cursor: 'pointer',
										'&:hover': { color: 'white' },
									}}
									onClick={() =>
										window.open(
											'https://www.instagram.com/vividclubiasi/',
											'_blank'
										)
									}
								/>
							</Stack>
						</Stack>

						{!isMobile && (
							<Box
								sx={{
									width: { xs: '100%', md: '20%' },
									display: 'flex',
									justifyContent: 'flex-end',
								}}
							>
								<Box
									component='button'
									sx={{
										background: 'transparent',
										border: '2px solid rgb(220,220,220)',
										borderRadius: '30px',
										padding: {
											xs: '0.5rem 1.5rem',
											md: '0.75rem 2rem',
										},
										color: 'white',
										fontSize: '1.1rem',
										fontWeight: 'bold',
										cursor: 'pointer',
										whiteSpace: 'nowrap',
										transition: 'all 0.2s',
										'&:hover': {
											background: 'rgb(220,220,220)',
											color: 'black',
										},
									}}
								>
									GET IN
									<br />
									TOUCH
								</Box>
							</Box>
						)}
					</Stack>
				</Stack>

				<Typography
					sx={{
						color: 'rgba(255,255,255,0.5)',
						textAlign: 'center',
						fontSize: '0.9rem',
					}}
				>
					@VividLounge & Club 2025
				</Typography>
			</Stack>
		</Box>
	)
}

export default FooterSection
