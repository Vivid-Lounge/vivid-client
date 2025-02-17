import React, { useEffect } from 'react'
import {
	ServiceSection,
	HeroSection,
	EventsSection,
	AboutUsSection,
	GallerySection,
	TestimonialSection,
	VisitSection,
} from './sections'
import { Box } from '@mui/material'
import { useLocation } from 'react-router-dom'

const MainPage: React.FC = () => {
	const location = useLocation()

	useEffect(() => {
		const sections = document.querySelectorAll('section')
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.5,
		}

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const id = entry.target.getAttribute('id')
					if (id) {
						window.history.replaceState(null, '', `#${id}`)
					}
				}
			})
		}, options)

		sections.forEach((section) => {
			observer.observe(section)
		})

		return () => {
			sections.forEach((section) => {
				observer.unobserve(section)
			})
		}
	}, [location.pathname])

	return (
		<>
			<Box id='home' component='section'>
				<HeroSection />
			</Box>
			<Box id='events' component='section'>
				<EventsSection />
			</Box>
			<Box component='section'>
				<ServiceSection />
			</Box>
			<Box id='about' component='section'>
				<AboutUsSection />
			</Box>
			<Box component='section'>
				<GallerySection />
			</Box>
			<Box component='section'>
				<TestimonialSection />
			</Box>
			<Box id='contact' component='section'>
				<VisitSection />
			</Box>
		</>
	)
}

export default MainPage
