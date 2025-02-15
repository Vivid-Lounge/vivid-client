import React, { useEffect, useRef, useState } from 'react'
import { Stack, Typography, Divider } from '@mui/material'
import Button from '../../../components/Button'
import TestimonialTitleIcon from '../../../../../shared/icons/TestimonialTitleIcon'
import DefaultLayout from '../../../defaultLayout/DefaultLayout'
import QuoteMark from '../../../../../shared/icons/QuoteMark'
import ArrowIcon from '../../../../../shared/icons/ArrowIcon'
import Background from './../../../../../shared/images/about-us-photo2.png'
import Andor from '../../../../../shared/images/Andor'
import Testimonial from '../components/Testimonial'
import Testimonials from '../components/Testimonials'

const TestimonialSection: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false)
	const [currentIndex, setCurrentIndex] = useState(0)
	const [open, setOpen] = useState(false)
	const [slideDirection, setSlideDirection] = useState<'left' | 'right'>(
		'right'
	)
	const imageBoxRef = useRef(null)
	const contentBoxRef = useRef(null)
	const [isAnimating, setIsAnimating] = useState(false)
	const textRef = useRef(null)
	const sectionRef = useRef(null)
	const handleRead = () => setOpen(!open)

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

	useEffect(() => {
		if (!open) {
			const interval = setInterval(() => {
				setCurrentIndex(
					(prevIndex) => (prevIndex + 1) % Testimonials.length
				)
			}, 10000)

			return () => clearInterval(interval)
		}
	}, [open])

	const handleSlideTransition = () => {
		if (imageBoxRef.current && contentBoxRef.current) {
			// Connect boxes with a gradient line during transition
			const imageBox = imageBoxRef.current as HTMLElement
			const contentBox = contentBoxRef.current as HTMLElement
			const connector = document.createElement('div')

			connector.style.position = 'absolute'
			connector.style.background =
				'linear-gradient(90deg, #FF1083 0%, transparent 100%)'
			connector.style.height = '2px'
			connector.style.width = '100px'
			connector.style.opacity = '0'
			connector.style.transition =
				'all 0.6s cubic-bezier(0.33, 1, 0.68, 1)'

			document.body.appendChild(connector)

			// Animate connector
			requestAnimationFrame(() => {
				connector.style.opacity = '1'
				setTimeout(() => {
					connector.style.opacity = '0'
					setTimeout(() => connector.remove(), 600)
				}, 300)
			})
		}
	}

	const nextTestimonial = () => {
		if (isAnimating) return
		setIsAnimating(true)
		setSlideDirection('right')
		handleSlideTransition()
		setCurrentIndex((prevIndex) => (prevIndex + 1) % Testimonials.length)
		setTimeout(() => setIsAnimating(false), 600) // Match animation duration
	}

	const prevTestimonial = () => {
		if (isAnimating) return
		setIsAnimating(true)
		setSlideDirection('left')
		setCurrentIndex(
			(prevIndex) =>
				(prevIndex - 1 + Testimonials.length) % Testimonials.length
		)
		setTimeout(() => setIsAnimating(false), 600) // Match animation duration
	}

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
				ref={sectionRef}
				sx={{
					width: '100%',
					justifyContent: 'center',
					flexDirection: { xs: 'column', md: 'row-reverse' },
					alignItems: 'center',
					position: 'relative',
					overflow: 'hidden',
					gap: { xs: '2rem', md: '4rem' },
				}}
			>
				<Stack
					sx={{
						aspectRatio: '1 / 1',
						width: { xs: '80%', sm: '60%', md: '35%' },
						position: 'relative',
						overflow: 'hidden',
						borderRadius: '4px',
						opacity: isVisible ? 1 : 0,
						transform: isVisible
							? 'translateX(0)'
							: 'translateX(50px)',
						transition: 'transform 0.5s ease',
						boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)',
						'&:hover': {
							transform: 'scale(1.02)',
						},
					}}
				>
					<Stack
						sx={{
							opacity: isVisible ? 1 : 0,
							transform: isVisible
								? 'translateX(0)'
								: 'translateX(100px)',
							position: 'relative',
							width: '100%',
							height: '100%',
							background: `url(${Testimonials[currentIndex].artistImage})`,
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							animation:
								'slideImage 0.6s forwards cubic-bezier(0.33, 1, 0.68, 1)',
							'@keyframes slideImage': {
								'0%': {
									transform:
										slideDirection === 'right'
											? 'translateX(100%) scale(0.8) rotate(5deg)'
											: 'translateX(-100%) scale(0.8) rotate(-5deg)',
									opacity: 0,
								},
								'100%': {
									transform:
										'translateX(0) scale(1) rotate(0)',
									opacity: 1,
								},
							},
						}}
					/>
				</Stack>

				<Stack
					sx={{
						position: 'relative',
						flexDirection: 'column',
						width: { xs: '80%', md: 'clamp(5rem, 40%, 20rem)' },
						height: 'max-content',
						padding: '2rem',
						background: 'rgba(29, 29, 29, 0.9)',
						backdropFilter: 'blur(10px)',
						borderRadius: '4px',
						boxShadow: '0 10px 30px -10px rgba(0,0,0,0.3)',
						opacity: isVisible ? 1 : 0,
						transform: isVisible
							? 'translateX(0)'
							: 'translateX(50px)',
						transition: 'transform 0.5s ease, opacity 0.5s ease',
						animation: isVisible
							? 'slideContent 0.6s forwards cubic-bezier(0.33, 1, 0.68, 1)'
							: 'none',
						'@keyframes slideContent': {
							'0%': {
								transform:
									slideDirection === 'right'
										? 'translateX(-50px) rotate(-3deg) scale(0.95)'
										: 'translateX(50px) rotate(3deg) scale(0.95)',
								opacity: 0,
							},
							'50%': {
								transform:
									slideDirection === 'right'
										? 'translateX(10px) rotate(1deg) scale(1.02)'
										: 'translateX(-10px) rotate(-1deg) scale(1.02)',
								opacity: 0.7,
							},
							'100%': {
								transform: 'translateX(0) rotate(0) scale(1)',
								opacity: 1,
							},
						},
						'&::after': {
							content: '""',
							position: 'absolute',
							top: '50%',
							[slideDirection === 'right' ? 'right' : 'left']:
								'-50px',
							width: '50px',
							height: '2px',
							background:
								'linear-gradient(90deg, transparent, #FF1083)',
							opacity: 0,
							animation: isVisible
								? 'connectLine 0.3s 0.3s forwards ease-out'
								: 'none',
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
					}}
				>
					<QuoteMark
						sx={{
							width: '5rem',
							height: 'auto',
							transform: 'translateY(-20px) rotate(180deg)',
							opacity: 0,
							animation: isVisible
								? 'dropQuote 0.4s 0.3s forwards cubic-bezier(0.34, 1.56, 0.64, 1)'
								: 'none',
							'@keyframes dropQuote': {
								'0%': {
									transform:
										'translateY(-20px) rotate(180deg)',
									opacity: 0,
								},
								'100%': {
									transform: 'translateY(0) rotate(0)',
									opacity: 1,
								},
							},
						}}
					/>
					<Testimonial
						testimonial={Testimonials[currentIndex]}
						textRef={textRef}
						handleRead={handleRead}
						open={open}
					/>

					{/* Navigation Buttons */}
					<Stack
						sx={{
							flexDirection: 'row',
							justifyContent: 'flex-end',
							gap: '1rem',
							mt: 2,
							position: 'relative',
							'&::before': {
								content: '""',
								position: 'absolute',
								left: 0,
								right: 0,
								top: -10,
								height: '1px',
								background:
									'linear-gradient(90deg, transparent, rgba(255,255,255,0.1))',
							},
						}}
					>
						<Button
							onClick={prevTestimonial}
							sx={{
								transition: 'all 0.2s ease',
								opacity: isAnimating ? 0.5 : 1,
								'&:hover': isAnimating
									? {}
									: {
											transform: 'translateX(-5px)',
									  },
							}}
						>
							<ArrowIcon
								sx={{
									fill: 'white',
									width: '1.5rem',
									transform: 'rotate(90deg)',
								}}
							/>
						</Button>
						<Button
							onClick={nextTestimonial}
							sx={{
								transition: 'all 0.2s ease',
								opacity: isAnimating ? 0.5 : 1,
								'&:hover': isAnimating
									? {}
									: {
											transform: 'translateX(5px)',
									  },
							}}
						>
							<ArrowIcon
								sx={{
									fill: 'white',
									width: '1.5rem',
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
