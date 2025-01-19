import React, { useEffect, useState } from 'react'
import { Stack, useScrollTrigger } from '@mui/material'
import { HashLink as Link } from 'react-router-hash-link'
import { useLocation } from 'react-router-dom'
import { ArrowIcon, VividLogoIcon } from '../../../shared/icons'

const NavBar: React.FC = () => {
	const [show, setShow] = useState(true)
	const url = useLocation()
	const [notHome, setNotHome] = useState(url.pathname !== '/')
	console.log(url.pathname)
	const trigger = useScrollTrigger({
		threshold: 60,
	})

	const hideOnScroll = useScrollTrigger({
		threshold: 0,
	})
	useEffect(() => {
		setNotHome(url.pathname !== '/')
	}, [url.pathname])
	return (
		<Stack
			sx={{
				width: '100%',
				position: 'fixed',
				alignItems: 'center',
				justifyContent: 'center',
				top: 0,
				left: 0,
				height: '60px',
				backdropFilter: !trigger && !notHome ? 'blur(10px)' : 'none',
				flexDirection: 'row',
				transform: !trigger ? 'translateY(0)' : 'translateY(-100%)',
				transition: 'transform 0.3s ease-in-out',
				gap: '16px',
				'> *': {
					textDecoration: 'none !important',
					color: 'white !important',
					textTransform: 'uppercase',
					cursor: 'pointer',
					transition: 'all 0.2s ease-in-out',
					'&::after': {
						transition: 'all 0.2s ease-in-out',
						content: '""',
						height: '1px',
						borderRadius: '2px',
						width: '0%',
						background: 'white',
						display: 'flex',
					},
					'&:hover': {
						'&::after': {
							width: '100%',
						},
					},
				},
				zIndex: 2,
			}}
		>
			{notHome && (
				<>
					<Link
						smooth
						to='/#home'
						style={{
							fill: 'white',
							left: '8%',
							position: 'absolute',
						}}
					>
						<ArrowIcon
							sx={{
								fill: 'white',
								height: '50%',

								width: '25px',
								transform: 'rotate(90deg)',
								cursor: 'pointer',
								'&:hover': {
									opacity: 0.8,
								},
							}}
						/>
					</Link>
				</>
			)}
			{!notHome && (
				<>
					<Link smooth to='/#home'>
						Home
					</Link>
					<Link smooth to='/#about'>
						About Us
					</Link>
				</>
			)}
			<Link smooth to='/#home'>
				<VividLogoIcon
					sx={{
						mx: 3,
						left: 0,
						fill: 'white',
						width: '80px',
						height: 'auto',
					}}
				/>
			</Link>
			{!notHome && (
				<>
					<Link smooth to='/#events'>
						Events
					</Link>
					<Link smooth to='/#contact'>
						Contact
					</Link>
				</>
			)}
		</Stack>
	)
}

export default NavBar
