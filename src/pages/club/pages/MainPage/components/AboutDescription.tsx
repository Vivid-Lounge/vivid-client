import React, { useRef, useEffect, useState } from 'react'
import { Stack, Typography } from '@mui/material'
import Background from './../../../../../shared/images/about-us-photo2.png'

const AboutDescription: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false)
	const sectionRef = useRef(null)

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

	return (
		<Stack
			ref={sectionRef}
			sx={{
				width: '100%',
				// gap: '16px',
				flexDirection: 'column'
			}}
		>
			<Stack
				sx={{
					aspectRatio: '1.13 / 1',
					width: '100%',
					height: 'auto',
					background: `url(${Background})`,
					justifyContent: 'flex-end',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					opacity: isVisible ? 1 : 0,
					transform: isVisible
						? 'translateX(0)'
						: 'translateX(-100px)',
					transition: 'all .9s ease-out',
					
					
				}}
			>
				<Typography
					sx={{
						padding: '16px',
						backgroundColor: 'rgb(46, 46, 46)',
						color: 'white',
						opacity: isVisible ? 1 : 0,

						transform: isVisible
							? 'translate(50px,25px)'
							: 'translateX(50px)',
						transition: 'all 1s ease-out',
						transitionDelay: '0.2s',
						display: {
							xs: 'none',
							md: 'flex'
						}
						// marginTop: {
						// 	xs: '10rem',
						// 	md: '0'
						// }
					}}
				>
					Suntem locul unde muzica de calitate și designul inovativ se
					întâlnesc pentru a oferi o experiență de petrecere absolută.
					Fie că ești un iubitor al petrecerilor electrizante sau pur
					și simplu vrei să te bucuri de o seară memorabilă alături de
					prieteni, Vivid este locul unde distracția nu are limite.
				</Typography>
			</Stack>
			<Typography
					sx={{
						padding: '16px',
						backgroundColor: 'rgb(46, 46, 46)',
						color: 'white',
						opacity: isVisible ? 1 : 0,

						transform: isVisible
							? 'translate(0, 0)'
							: 'translateX(50px)',
						transition: 'all 1s ease-out',
						transitionDelay: '0.2s',
						// marginTop: {
						// 	xs: '10rem',
						// 	md: '0'
						// }
						width: '100%',
						display: {
							xs: 'flex',
							md: 'none'
						}
					}}
				>
					Suntem locul unde muzica de calitate și designul inovativ se
					întâlnesc pentru a oferi o experiență de petrecere absolută.
					Fie că ești un iubitor al petrecerilor electrizante sau pur
					și simplu vrei să te bucuri de o seară memorabilă alături de
					prieteni, Vivid este locul unde distracția nu are limite.
				</Typography>
		</Stack>
	)
}

export default AboutDescription
