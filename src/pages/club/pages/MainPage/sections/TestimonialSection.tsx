import React, { useEffect, useRef, useState } from 'react'
import { Stack, Typography, Divider } from '@mui/material'
import Button from '../../../components/Button'
import TestimonialTitleIcon from '../../../../../shared/icons/TestimonialTitleIcon'
import DefaultLayout from '../../../defaultLayout/DefaultLayout'
import QuoteMark from '../../../../../shared/icons/QuoteMark'
import ArrowIcon from '../../../../../shared/icons/ArrowIcon'
import Background from './../../../../../shared/images/about-us-photo2.png'
import Andor from '../../../../../shared/images/Andor'

const TestimonialSection: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false)
	const textRef = useRef(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting)
			},
			{ threshold: 0.2 }
		)

		if (textRef.current) {
			observer.observe(textRef.current)
		}

		return () => observer.disconnect()
	}, [])

	return (
		<DefaultLayout
			sx={{
				background:
					'linear-gradient(180deg, #0B0B0B 7%,#522036 48%, #0B0B0B 83%)',
				alignItems: 'center',
				justifyContent: 'center',
				padding: '4rem 0',
				flexWrap: 'wrap',
				gap: '4rem',
			}}
		>
			<Stack
				sx={{
					width: 'max-content',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					gap: '0rem',
					flexDirection: 'column',
					// background: 'red'
				}}
			>
				<Typography
					color='primary'
					fontWeight={'regular'}
					width={'max-content'}
					fontSize={32}
					textAlign={'center'}
					justifyContent={'center'}
				>
					TESTIMONIALS
				</Typography>
				{/*<SectionTitle
            title="TESTIMONIALS"
          />*/}
				<TestimonialTitleIcon sx={{ width: '30rem', height: 'auto' }} />
			</Stack>
			<Stack
				sx={{
					width: '100%',
					// background: "red",
					justifyContent: 'center',
					flexDirection: 'row-reverse',
					alignItems: 'center',
					position: 'relative',
				}}
			>
				<Stack
					sx={{
						aspectRatio: '1 / 1',
						padding: '0px',
						width: 'clamp(200px, 40%, 1000px)',
						height: 'auto',
						background: `url(${Background})`,
						justifyContent: 'center',
						backgroundPosition: 'center',
						backgroundSize: 'cover',
					}}
				/>
				<Stack>
				<QuoteMark sx={{ width: '3rem', height: 'auto' }} />

				<Typography
					ref={textRef}
					sx={{
						width: '40%',
						height: 'max-content',
						padding: '2rem',
						background: '#1D1D1D',
						color: 'white',
						fontWeight: 'regular',
						//fontFamily:'Poppins',
						// transform: 'translate(20%, 10%)',
						//backdropFilter: 'blur(1px)',
						opacity: isVisible ? 1 : 0,
						transform: isVisible
							? 'translate(20%, 10%)'
							: 'translate(10%, 10%)',
						transition: ' 1s ease-out',
					}}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur.”
					
				</Typography>
				<Typography>Andor Gabriel</Typography>
					<Typography sx={{ fontSize: '20px' }}>
						DUBAI BASED DJ
					</Typography>
					<Stack
						sx={{
							width: '100%',
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'right',
							justifyContent: 'flex-end',
						}}
					>
						<Button>
							<ArrowIcon
								sx={{
									fill: 'white',
									height: '100%',
									width: 'auto',
									transform: 'rotate(90deg)',
								}}
							/>
						</Button>
						<Button>
							<ArrowIcon
								sx={{
									fill: 'white',
									height: '100%',
									width: 'auto',
									transform: 'rotate(270deg)',
								}}
							/>
						</Button>
					</Stack>
				</Stack>
			</Stack>
		</DefaultLayout>
	)
}

export default TestimonialSection
