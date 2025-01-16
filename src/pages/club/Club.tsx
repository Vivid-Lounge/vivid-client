import React, { Suspense, useEffect } from 'react'
import MainPage from './pages/MainPage'
import theme from '../../shared/themes/theme'
import { ThemeProvider } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import LoadingOverlay from './components/LoadingOverlay'
const Club: React.FC = () => {
	const [loading, setLoading] = React.useState(true)
	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false)
		}, 1000)
		return () => clearTimeout(timer)
	}, [])
	return (
		<ThemeProvider theme={theme}>
			<LoadingOverlay loading={loading} />

			<RouterProvider router={router} />
		</ThemeProvider>
	)
}

export default Club
