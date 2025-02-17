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
}

const CarouselControls: React.FC<Props> = ({
	onPrev,
	onNext,
	containerRef,
	isStart,
	isEnd,
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

	return (
		<Stack direction='row' spacing={2} alignItems='center' sx={{ mb: 2 }}>
			<IconButton
				onClick={onPrev}
				disabled={isStart}
				sx={{
					color: 'white',
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
					color: 'white',
					opacity: isEnd ? 0.5 : 1,
					'&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' },
				}}
			>
				<ChevronRight />
			</IconButton>
			<Box
				sx={{
					flex: 1,
					height: '4px',
					backgroundColor: 'rgba(255,255,255,0.2)',
					position: 'relative',
					borderRadius: '2px',
					overflow: 'hidden',
				}}
			>
				<Box
					sx={{
						position: 'absolute',
						left: 0,
						top: 0,
						height: '100%',
						width: `${progress}%`,
						backgroundColor: '#FF1083',
						transition: 'width 0.1s linear',
					}}
				/>
			</Box>
		</Stack>
	)
}

export default CarouselControls
