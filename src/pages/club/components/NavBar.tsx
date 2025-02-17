'use client'

import type React from 'react'
import { useState, useEffect } from 'react'
import {
	AppBar,
	Toolbar,
	IconButton,
	Drawer,
	List,
	ListItem,
	ListItemText,
	useMediaQuery,
	useTheme,
	Box,
	useScrollTrigger,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { HashLink as Link } from 'react-router-hash-link'
import { useLocation, useNavigate } from 'react-router-dom'
import { VividLogoIcon, ArrowIcon } from '../../../shared/icons'
import { motion, AnimatePresence } from 'framer-motion'

const menuItems = [
	{ text: 'Home', link: '/#home' },
	{ text: 'About Us', link: '/#about' },
	{ text: 'Events', link: '/#events' },
	{ text: 'Contact', link: '/#contact' },
]

const NavBar: React.FC = () => {
	const [mobileOpen, setMobileOpen] = useState(false)
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
	const location = useLocation()
	const navigate = useNavigate()
	const [activeHash, setActiveHash] = useState('')

	useEffect(() => {
		const hash = location.hash
		console.log(hash, 'hash')
		console.log(activeHash, 'activeHash') // Remove the '#' from the hash
		setActiveHash(hash || '#home') // Default to 'home' if no hash is present
	}, [location])

	const handleDrawerToggle = () => setMobileOpen(!mobileOpen)

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 100,
	})

	const hideOnScroll = useScrollTrigger({
		threshold: 0,
	})

	const menuItemVariants = {
		hidden: { opacity: 0, y: -10 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: { delay: i * 0.11, duration: 0.5, ease: 'easeOut' },
		}),
	}

	const menuHiddenItemVariants = {
		hidden: { opacity: 0, x: 35 },
		visible: (i: number) => ({
			opacity: 1,
			x: 0,
			transition: { delay: i * 0.11, duration: 0.5, ease: 'easeOut' },
		}),
	}

	const handleBackClick = (e: React.MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()
		// Store the current scroll position in sessionStorage
		sessionStorage.setItem('scrollPosition', window.scrollY.toString())
		navigate('/')
	}

	const drawer = (
		<Box
			sx={{
				width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				position: 'relative',
				'&::before': {
					content: '" "',
					width: '100%',
					height: '100%',
					position: 'absolute',
					right: '0',
					top: '0',
					backdropFilter: 'blur(20px)',
					background: 'rgba(0,0,0,0.5)',
				},
			}}
		>
			<IconButton
				sx={{
					color: 'white',
					position: 'absolute',
					right: 16,
					top: 16,
				}}
				onClick={handleDrawerToggle}
			>
				<CloseIcon />
			</IconButton>
			<List>
				{menuItems.map((item, index) => (
					<motion.div
						key={item.text}
						variants={menuHiddenItemVariants}
						initial='hidden'
						animate='visible'
						custom={index}
					>
						<ListItem
							component={Link}
							to={item.link}
							smooth
							onClick={handleDrawerToggle}
							sx={{
								'&:hover': {
									backgroundColor: 'rgba(255, 255, 255, 0.1)',
								},
							}}
						>
							<ListItemText
								primary={item.text}
								sx={{
									color:
										activeHash === item.link
											? 'pink'
											: 'white',
									textTransform: 'uppercase',
									textAlign: 'center',
									'& .MuiTypography-root': {
										fontWeight: 'bold',
									},
								}}
							/>
						</ListItem>
					</motion.div>
				))}
			</List>
		</Box>
	)

	return (
		<motion.div
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{
				type: 'spring',
				stiffness: 100,
				damping: 20,
				delay: 0.2,
			}}
		>
			<AppBar
				position='fixed'
				sx={{
					'&::before': {
						content: '" "',
						width: '100%',
						height: '100%',
						position: 'absolute',
						right: '0',
						top: '0',
						backdropFilter: trigger ? 'blur(20px)' : 'none',
					},
					zIndex: 20,
					background: trigger
						? 'rgba(255,255,255,0.01)'
						: 'transparent',
					boxShadow: trigger
						? '0 4px 30px rgba(0, 0, 0, 0.1)'
						: 'none',
					transition: 'all 0.3s ease',
					py: '0.5rem',
					transform: hideOnScroll
						? 'translateY(-100%)'
						: 'translateY(0)',
				}}
			>
				<Toolbar sx={{ justifyContent: 'space-between' }}>
					<AnimatePresence>
						{location.pathname === '/' ? (
							<Link smooth to='/#home'>
								<VividLogoIcon
									sx={{
										fill: 'white',
										width: '100px',
										height: 'auto',
									}}
								/>
							</Link>
						) : (
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -20 }}
								transition={{ duration: 0.3 }}
							>
								<IconButton
									onClick={handleBackClick}
									sx={{
										color: 'white',
										'&:hover': {
											backgroundColor:
												'rgba(255, 255, 255, 0.1)',
										},
									}}
								>
									<ArrowIcon />
								</IconButton>
							</motion.div>
						)}
					</AnimatePresence>
					{isMobile ? (
						<IconButton
							color='inherit'
							aria-label='open drawer'
							edge='start'
							onClick={handleDrawerToggle}
						>
							<MenuIcon />
						</IconButton>
					) : (
						<Box sx={{ display: 'flex', gap: '16px' }}>
							{menuItems.map((item, index) => (
								<motion.div
									key={item.text}
									variants={menuItemVariants}
									initial='hidden'
									animate='visible'
									custom={index}
								>
									<Link
										smooth
										to={item.link}
										style={{
											letterSpacing: '.5px',
											color:
												activeHash === item.link
													? 'pink'
													: 'white',
											textDecoration: 'none',
											textTransform: 'uppercase',
										}}
									>
										<motion.span
											whileHover={{
												scale: 1.1,
												textShadow:
													'0 0 8px rgba(255, 255, 255, 0.5)',
											}}
											transition={{ duration: 0.3 }}
										>
											{item.text}
										</motion.span>
									</Link>
								</motion.div>
							))}
						</Box>
					)}
				</Toolbar>
			</AppBar>
			<Drawer
				variant='temporary'
				anchor='right'
				open={mobileOpen}
				onClose={handleDrawerToggle}
				ModalProps={{
					keepMounted: false,
				}}
				sx={{
					'& .MuiDrawer-paper': {
						width: '50%',
						height: '100%',
						backgroundColor: 'transparent',
						boxSizing: 'border-box',
					},
				}}
			>
				{drawer}
			</Drawer>
		</motion.div>
	)
}

export default NavBar
