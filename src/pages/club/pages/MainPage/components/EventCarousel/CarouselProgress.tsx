import { Box } from '@mui/material'

interface Props {
	currentIndex: number
	totalSlides: number
}

const CarouselProgress: React.FC<Props> = ({ currentIndex, totalSlides }) => {
	return (
		<Box
			sx={{
				width: '100%',
				height: '4px',
				backgroundColor: 'rgba(255,255,255,0.1)',
				borderRadius: '2px',
				position: 'relative',
				overflow: 'hidden',
			}}
		>
			<Box
				sx={{
					position: 'absolute',
					left: 0,
					top: 0,
					height: '100%',
					width: `${(currentIndex + 1) * (100 / totalSlides)}%`,
					background: 'linear-gradient(90deg, #FF1083, #FF4D4D)',
					borderRadius: '2px',
					transition: 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
				}}
			/>
		</Box>
	)
}

export default CarouselProgress
