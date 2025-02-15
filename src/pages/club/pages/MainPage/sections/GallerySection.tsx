import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import DefaultLayout from '../../../defaultLayout/DefaultLayout'
import { Stack, Typography } from '@mui/material'
import { FeelTheGalleryTitleIcon } from '../../../../../shared/icons'
import Background from './../../../../../shared/images/about-us-photo.png'
// import Background2 from './../../../../../shared/images/about-us-photo2.png'
import Gallery from '../components/Gallery'
// import Photos from './PhotoTest'
import { Button } from '../../../components'

import {
	API_URI,
	// SERVE_IMAGES_URI,
	api,
} from '../../../../../shared/api_routes'
import { GalleryType } from '../../../../../shared/types'

const GallerySection: React.FC = () => {
	const sectionRef = useRef(null)
<<<<<<< HEAD
    const [gallery, setGallery] = React.useState<GalleryType>({} as GalleryType)
	const [, setIsVisible] = React.useState(false)
	const [isGallery] = React.useState(false)
=======
	const [gallery, setGallery] = React.useState<GalleryType>({} as GalleryType)
	const [isVisible, setIsVisible] = React.useState(false)
	const [isGallery, setIsGallery] = React.useState(false)
	const visibleCount = 1
>>>>>>> d07c088ff212e6367ba8b079ca9d215802d96483

	const navigate = useNavigate()
	console.log(gallery)
	const handleNavigate = () => {
		navigate('/gallery')
	}

	const retrieveGallery = async () => {
		const response = await fetch(API_URI + api.getGallery.route, {
			method: api.getGallery.method,
			headers: {
				'Content-Type': 'application/json',
			},
		})
		if (response.status === 200) {
			const data = await response.json()
			setGallery(data[0])
		} else {
			setGallery({} as GalleryType)
		}
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

	useEffect(() => {
		retrieveGallery()
		console.log('caca')
		console.log(gallery)
	}, [])
	return (
		<DefaultLayout
			sx={{
				background: 'linear-gradient(180deg, #522036 25%, #0B0B0B 83%)',
				alignItems: 'center',
				justifyContent: 'center',
				padding: {
					xs: '32px 16px',
					md: '4rem 0',
				},
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
					gap: {
						xs: '16px',
						md: 'none',
					},
				}}
			>
				<Stack
					sx={{
						width: {
							xs: '100%',
							md: '40%',
						},
						// background: 'red',
						alignItems: 'center',
					}}
				>
					<Typography color='white' fontSize={32}>
						OUR GALLERY
					</Typography>
					<FeelTheGalleryTitleIcon
						sx={{ width: '100%', height: 'auto' }}
					/>
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
			{/* {Photos.slice(0, isGallery ? Photos.length : visibleCount).map((photo, index) => (
                <Gallery images={photo} key={index} />
            ))} */}
			{/* {gallery.imageArray && gallery.imageArray.slice(0, isGallery ? gallery.imageArray.length : visibleCount).map((photo, index) => (
				<Gallery images={[`http://localhost:4000/gallery/${photo.imageUrl}`]} key={index} />
			))} */}
			{gallery.imageArray && (
				<Gallery images={gallery.imageArray.slice(0, 3)} />
			)}
			{!isGallery && (
				<Button onClick={handleNavigate}>
					<Typography>View More</Typography>
				</Button>
			)}
		</DefaultLayout>
	)
}

export default GallerySection
