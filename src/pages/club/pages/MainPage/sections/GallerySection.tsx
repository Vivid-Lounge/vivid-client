import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import DefaultLayout from '../../../defaultLayout/DefaultLayout'
import { Stack, Typography } from '@mui/material'
import { GalleryTitleIcon } from '../../../../../shared/icons'
import Background from './../../../../../shared/images/about-us-photo.png'
// import Background2 from './../../../../../shared/images/about-us-photo2.png'
import Gallery from '../components/Gallery'
import Photos from './PhotoTest'
import { Button } from '../../../components'

const GallerySection: React.FC = () => {
	const sectionRef = useRef(null)

	const [isVisible, setIsVisible] = React.useState(false)
	const [isGallery, setIsGallery] = React.useState(false)
	const visibleCount = 1

	const navigate = useNavigate()
	
	const handleNavigate = () => {
		navigate('/gallery')
	}

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting)
			},
			{ threshold: 0.1 }
		)

		if (sectionRef.current) {
			observer.observe(sectionRef.current)
		}

		return () => observer.disconnect()
	}, [])
	return (
		<DefaultLayout
			sx={{
				background: 'linear-gradient(180deg, #522036 25%, #0B0B0B 83%)',
				alignItems: 'center',
				justifyContent: 'center',
				padding: '4rem 0',
				flexWrap: 'wrap',
			}}
		>
			<Stack
				sx={{
					width: '100%',
					flexDirection: {
						xs: 'column',
						md: 'row',
					},
					justifyContent: 'space-between',
				}}
			>
				<Stack
					sx={{
						width: {
							xs: '100%',
							md: '40%',
						},
						// background: 'red'
					}}
				>
					<Typography color='white' fontSize={32}>
						OUR GALLERY
					</Typography>
					<GalleryTitleIcon sx={{ width: '100%', height: 'auto' }} />
				</Stack>
				<Stack
					sx={{
						background: `url(${Background})`,
						aspectRatio: '3.17 / 1',
						width: {
							xs: '100%',
							md: 'calc(60% - 16px)',
						},
						height: 'auto',
						backgroundPosition: 'center',
						backgroundSize: 'cover',
					}}
				/>
			</Stack>
			{/* <Stack
				ref={sectionRef}
				sx={{
					width: '100%',
					justifyContent: {
						xs: 'center',
						md: 'space-between',
					},
					flexWrap: 'wrap',
					gap: {
						xs: '0.5rem',
						md: 'unset',
					},
					flexDirection: {
						xs: 'row',
						md: 'row',
					},
					'>*': {
						backgroundSize: 'cover !important',
						backgroundPosition: 'center !important',
						aspectRatio: '1 / 1.29',
						width: {
							xs: 'calc(50% - 0.5rem)',
							md: 'calc(33.3% - 2rem)',
						},
						height: 'auto',
					},
				}}
			>
				<Stack
					sx={{
						background: `url(${Background2})`,
						opacity: isVisible ? 1 : 0,
						transform: isVisible
							? 'translateX(0)'
							: 'translateX(-100px)',
						transition: 'all .9s ease-out',
					}}
				></Stack>
				<Stack sx={{ background: `url(${Background2})` }}></Stack>
				<Stack
					sx={{
						background: `url(${Background2})`,
						opacity: isVisible ? 1 : 0,
						transform: isVisible
							? 'translateX(0)'
							: 'translateX(100px)',
						transition: 'all .9s ease-out',
					}}
				></Stack>
			</Stack> */}
			{Photos.slice(0, isGallery ? Photos.length : visibleCount).map((photo, index) => (
                <Gallery images={photo} key={index} />
            ))}
			{!isGallery && (
                <Button onClick={handleNavigate}>
                	<Typography>View More</Typography>
                </Button>
            )}
		</DefaultLayout>
	)
}

export default GallerySection
