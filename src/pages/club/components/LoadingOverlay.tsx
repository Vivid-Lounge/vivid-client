import { FC, useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { BarLoader } from 'react-spinners'
import { VividLogoIcon } from '../../../shared/icons'

type Props = {
	loading: boolean
}

const LoadingOverlay: FC<Props> = ({ loading }) => {
	const [animate, setAnimate] = useState(false)
	const [show, setShow] = useState(true)

	useEffect(() => {
		if (!loading) {
			setAnimate(true)
		}
	}, [loading])

	if (!show) return null

	return (
		<Box
			sx={{
				position: 'fixed',
				width: '100%',
				height: '100%',
				zIndex: 100,
				display: 'flex',
				// transition: '1s ease-in-out',
			}}
			onTransitionEnd={() => {
				const timer = setTimeout(() => {
					setShow(false)
				}, 700)
				return () => clearTimeout(timer)
			}} // Add transition end handler
		>
			<Box
				sx={{
					position: 'absolute',
					left: '50%',
					top: '50%',
					zIndex: '101',
					opacity: animate ? 0 : 1,
					transition: 'opacity 0.35s ease-in-out',
					transform: 'translate(-50%, -50%)',
				}}
			>
				<VividLogoIcon
					sx={{
						width: '200px',
						height: 'auto',
						mb: 5,
						fill: 'white',
					}}
				/>
				<BarLoader
					color='white'
					loading={true}
					width={'190px'}
					speedMultiplier={0.8}
				/>
			</Box>

			{/* Left Curtain */}
			<Box
				sx={{
					position: 'absolute',
					width: '50%', // Slightly wider for overlap
					height: '100%',
					left: 0,
					overflow: 'hidden',
					transform: animate ? 'translateX(-100%)' : 'translateX(0)',
					transition: 'transform 1s ease-in-out',

					backgroundColor: '#552138', // Add semi-transparent background
				}}
			>
				<Box
					sx={{
						position: 'absolute',
						right: 0,
						width: '100vw',
						height: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				></Box>
			</Box>

			{/* Right Curtain */}
			<Box
				sx={{
					position: 'absolute',
					width: '50%', // Slightly wider for overlap
					height: '100%',
					right: 0,
					overflow: 'hidden',
					transform: animate ? 'translateX(100%)' : 'translateX(0)',
					transition: 'transform 1s ease-in-out',

					backgroundColor: '#552138', // Add semi-transparent background
				}}
			>
				<Box
					sx={{
						position: 'absolute',
						left: 0,
						width: '100vw',
						height: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				></Box>
			</Box>
		</Box>
	)
}

export default LoadingOverlay
