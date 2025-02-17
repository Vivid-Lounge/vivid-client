'use client'

import type React from 'react'
import { useEffect, useState, useRef } from 'react'
import { Grid2, Modal, IconButton, Box } from '@mui/material'
import { Close } from '@mui/icons-material'
import Gallery from '../MainPage/components/Gallery'
import CarouselControls from './components/CarouselControls'
import { API_URI, SERVE_IMAGES_URI, api } from '../../../../shared/api_routes'
import type { GalleryType } from '../../../../shared/types'

const GalleryPage: React.FC = () => {
	const [gallery, setGallery] = useState<GalleryType>({} as GalleryType)
	const [modalOpen, setModalOpen] = useState(false)
	const [currentImageIndex, setCurrentImageIndex] = useState(0)
	const containerRef = useRef<HTMLDivElement>(null)

	const retrieveGallery = async () => {
		const response = await fetch(API_URI + api.getGallery.route, {
			method: api.getGallery.method,
			headers: {
				'Content-Type': 'application/json',
			},
		})
		if (response.status === 200) {
			const data = await response.json()
			console.log(data)
			setGallery(data[0])
		} else {
			setGallery({} as GalleryType)
		}
	}

	useEffect(() => {
		retrieveGallery()
	}, []) // Removed gallery from dependencies

	const handleImageClick = (index: number) => {
		console.log('Image clicked:', index)
		setCurrentImageIndex(index)
		setModalOpen(true)
	}

	const handleCloseModal = () => {
		setModalOpen(false)
	}

	const handlePrev = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex > 0
				? prevIndex - 1
				: (gallery.imageArray?.length ?? 1) - 1
		)
	}

	const handleNext = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex < (gallery.imageArray?.length ?? 1) - 1
				? prevIndex + 1
				: 0
		)
	}

	const handleSwipe = (direction: 'left' | 'right') => {
		if (direction === 'left') {
			handleNext()
		} else {
			handlePrev()
		}
	}

	return (
		<Grid2
			container
			sx={{
				width: '100vw',
				height: '100vh',
				alignItems: 'center',
				justifyContent: 'center',
				padding: {
					xs: '16px',
					md: '32px 0',
				},
			}}
		>
			<Grid2
				container
				size={{ xs: 12, md: 10 }}
				sx={{
					mt: '4rem',
					minHeight: '100%',
				}}
			>
				{gallery.imageArray && (
					<Box
						sx={{
							width: '100%',
							'& .MuiStack-root': {
								// Target the Stack component
								'& .MuiStack-root': {
									// Target each row Stack
									'& > *': {
										// Target the Box components (images)
										cursor: 'pointer',
										transition: 'transform 0.3s ease',
									},
								},
							},
						}}
					>
						<Gallery
							images={gallery.imageArray}
							onImageClick={(index) => {
								console.log('Gallery onImageClick:', index)
								handleImageClick(index)
							}}
						/>
					</Box>
				)}
			</Grid2>
			<Modal
				open={modalOpen}
				onClose={handleCloseModal}
				aria-labelledby='image-modal'
				aria-describedby='fullscreen-image-view'
			>
				<Box
					sx={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						width: '90%',
						height: '90%',
						bgcolor: 'background.paper',
						boxShadow: 24,
						p: 4,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<IconButton
						onClick={handleCloseModal}
						sx={{
							position: 'absolute',
							right: 8,
							top: 8,
							color: 'white',
						}}
					>
						<Close />
					</IconButton>
					<Box
						ref={containerRef}
						sx={{
							width: '100%',
							height: '80%',
							position: 'relative',
							overflow: 'hidden',
						}}
					>
						{gallery.imageArray && (
							<Box
								sx={{
									width: '100%',
									height: '100%',
									backgroundImage: `url("${SERVE_IMAGES_URI}/gallery/${gallery.imageArray[currentImageIndex]?.imageUrl}")`,
									backgroundSize: 'contain',
									backgroundPosition: 'center',
									backgroundRepeat: 'no-repeat',
								}}
								onTouchStart={(e) => {
									const touch = e.touches[0]
									const startX = touch.clientX
									const handleTouchEnd = (e: TouchEvent) => {
										const touch = e.changedTouches[0]
										const endX = touch.clientX
										if (endX - startX > 50) {
											handleSwipe('right')
										} else if (startX - endX > 50) {
											handleSwipe('left')
										}
										document.removeEventListener(
											'touchend',
											handleTouchEnd
										)
									}
									document.addEventListener(
										'touchend',
										handleTouchEnd
									)
								}}
							/>
						)}
					</Box>
					<CarouselControls
						onPrev={handlePrev}
						onNext={handleNext}
						containerRef={containerRef}
						isStart={currentImageIndex === 0}
						isEnd={
							currentImageIndex ===
							(gallery.imageArray?.length ?? 0) - 1
						}
						currentIndex={0}
						totalImages={0}
					/>
				</Box>
			</Modal>
		</Grid2>
	)
}

export default GalleryPage
