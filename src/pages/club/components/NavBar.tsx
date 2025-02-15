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
import { useLocation } from 'react-router-dom'
import { ArrowIcon, VividLogoIcon } from '../../../shared/icons'
import { motion, AnimatePresence } from 'framer-motion'

const NavBar: React.FC = () => {
	const [mobileOpen, setMobileOpen] = useState(false)
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
	const location = useLocation()
	const [notHome, setNotHome] = useState(location.pathname !== '/')
	const isDesktop = useMediaQuery(theme.breakpoints.down('sm'))
	const currentHash = location.hash
	const [activeHash, setActiveHash] = useState('')
	useEffect(() => {
		setNotHome(location.pathname !== '/')
	}, [location.pathname])
	useEffect(() => {
		setActiveHash(location.hash)
	}, [location.hash])
	console.log(activeHash)
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen)
	}
	const [menuItems, setMenuItems] = useState<
		{
			text: string
			link: string
		}[]
	>([
		{ text: 'Home', link: '/#home' },
		{ text: 'About Us', link: '/#about' },
		{ text: 'Events', link: '/#events' },
		{ text: 'Contact', link: '/#contact' },
	])

	const menuItemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.1,
				duration: 0.5,
				ease: 'easeOut',
			},
		}),
	}

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 100,
	})

	const hideOnScroll = useScrollTrigger({
		threshold: 0,
	})

	const drawer = (
		<motion.div
			initial={{ x: '100%' }}
			animate={{ x: '0%' }}
			exit={{ x: '100%' }}
			transition={{ duration: 0.5, ease: 'easeInOut' }}
			style={{
				width: '50%',
				height: '100%',
				position: 'fixed',
				right: 0,
				top: 0,
				backdropFilter: 'blur(10px)',
			}}
		>
			<IconButton
				sx={{
					color: 'white',
					display: 'block',
					position: 'absolute',
					right: 8,
					top: 8,
					fontSize: '1.1rem',
				}}
				onClick={handleDrawerToggle}
			>
				<CloseIcon />
			</IconButton>
			<List sx={{ mt: 5 }}>
				{menuItems.map((item, index) => (
					<motion.div
						key={item.text}
						variants={menuItemVariants}
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
									transition: 'background-color 0.3s ease',
								},
							}}
						>
							<ListItemText
								sx={{
									color:
										currentHash === item.link.split('/')[1]
											? 'pink'
											: 'white',
									textTransform: 'uppercase',
									'& .MuiTypography-root': {
										fontWeight: 'bold',
										fontSize: '1.25rem',
									},
								}}
							>
								{item.text}
							</ListItemText>
						</ListItem>
					</motion.div>
				))}
			</List>
		</motion.div>
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
					background: trigger
						? 'rgba(255,255,255,0.01)'
						: 'transparent',
					backdropFilter: trigger ? 'blur(20px)' : 'none',
					boxShadow: trigger
						? '0 4px 30px rgba(0, 0, 0, 0.1)'
						: 'none',
					transition: 'all 0.3s ease',
					zIndex: 1,
					py: '0.5rem',
					fontSize: '1.2rem',
					transform: hideOnScroll
						? 'translateY(-100%)'
						: 'translateY(0)',
				}}
			>
				<Toolbar sx={{ justifyContent: 'space-between' }}>
					{notHome && (
						<Link smooth to='/#home' style={{ color: 'white' }}>
							<ArrowIcon
								sx={{
									fill: 'white',
									height: '25px',
									width: '25px',
									transform: 'rotate(90deg)',
									cursor: 'pointer',
									'&:hover': {
										opacity: 0.8,
									},
								}}
							/>
						</Link>
					)}
					<Link smooth to='/#home'>
						<VividLogoIcon
							sx={{
								fill: 'white',
								width: '100px',
								height: 'auto',
							}}
						/>
					</Link>
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
							{!notHome &&
								menuItems.map((item, index) => (
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
													activeHash ===
													item.link.split('/')[1]
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
			<AnimatePresence>
				{mobileOpen && (
					<Drawer
						variant='temporary'
						anchor='right'
						open={mobileOpen}
						onClose={handleDrawerToggle}
						ModalProps={{
							keepMounted: true,
						}}
					>
						{drawer}
					</Drawer>
				)}
			</AnimatePresence>
		</motion.div>
	)
}

export default NavBar
