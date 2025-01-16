import React from 'react'
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

const MainPage: React.FC = () => {
	return (
		<>
			<Box id='home'>
				<HeroSection />
			</Box>
			<Box id='events'>
				<EventsSection />
			</Box>
			<Box>
				<ServiceSection />
			</Box>
			<Box id='about'>
				<AboutUsSection />
			</Box>
			<Box>
				<GallerySection />
			</Box>
			<Box>
				<TestimonialSection />
			</Box>
			<Box id='contact'>
				<VisitSection />
			</Box>
		</>
	)
}

export default MainPage
