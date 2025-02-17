'use client'

import type React from 'react'
import { useEffect, useState, useRef } from 'react'
import { Stack, IconButton, Box } from '@mui/material'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'

interface Props {
	onPrev: () => void
	onNext: () => void
	containerRef: React.RefObject<HTMLDivElement>
	isStart: boolean
	isEnd: boolean
	currentIndex: number
	totalImages: number
}

const CarouselControls: React.FC<Props> = ({
	onPrev,
	onNext,
	containerRef,
	isStart,
	isEnd,
	currentIndex,
	totalImages,
}) => {
	const [progress, setProgress] = useState(0)
	const rafRef = useRef<number | null>(null)

	useEffect(() => {
		const updateProgress = () => {
			if (containerRef.current) {
				const { scrollLeft, scrollWidth, clientWidth } =
					containerRef.current
				const newProgress =
					(scrollLeft / (scrollWidth - clientWidth)) * 100
				setProgress(Math.min(newProgress, 100))
			}
		}

		const handleScroll = () => {
			if (rafRef.current !== null) {
				cancelAnimationFrame(rafRef.current)
			}
			rafRef.current = requestAnimationFrame(updateProgress)
		}

		const container = containerRef.current
		if (container) {
			container.addEventListener('scroll', handleScroll, {
				passive: true,
			})
			updateProgress() // Initial call to set progress
		}

		return () => {
			if (container) {
				container.removeEventListener('scroll', handleScroll)
			}
			if (rafRef.current !== null) {
				cancelAnimationFrame(rafRef.current)
			}
		}
	}, [containerRef])

	useEffect(() => {
		const progressPercentage =
			totalImages > 1 ? (currentIndex / (totalImages - 1)) * 100 : 0
		setProgress(progressPercentage)
	}, [currentIndex, totalImages])

	return (
		<Stack
			direction='column'
			spacing={2}
			alignItems='center'
			sx={{
				width: '100%',
				position: 'absolute',
				bottom: { xs: 16, sm: 16 },
				left: 0,
				px: { xs: 2, sm: 4 },
			}}
		>
			<Stack
				direction='row'
				spacing={4}
				sx={{ width: '100%', justifyContent: 'center' }}
			>
				<IconButton
					onClick={onPrev}
					disabled={isStart}
					sx={{
						backgroundColor: 'rgba(255, 255, 255, 0.13)',
						color: '#FF1083',
						fill: '#FF1083',
						stroke: '#FF1083',
						opacity: isStart ? 0.5 : 1,
						'&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' },
					}}
				>
					<ChevronLeft />
				</IconButton>
				<IconButton
					onClick={onNext}
					disabled={isEnd}
					sx={{
						backgroundColor: 'rgba(255, 255, 255, 0.13)',
						color: '#FF1083',
						fill: '#FF1083',
						stroke: '#FF1083',

						opacity: isEnd ? 0.5 : 1,
						'&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' },
					}}
				>
					<ChevronRight />
				</IconButton>
			</Stack>
			{/* <Box
				sx={{
					width: '100%',
					height: '4px',
					backgroundColor: 'rgba(255,255,255,0.2)',
					borderRadius: '2px',
					overflow: 'hidden',
				}}
			>
				<Box
					sx={{
						height: '100%',
						width: `${progress}%`,
						backgroundColor: '#FF1083',
						transition: 'width 0.3s ease',
					}}
				/>
			</Box> */}
		</Stack>
	)
}

export default CarouselControls
