// theme.ts
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#FF1083',
			light: '#FFFFFF',
			// contrastText: '#FFFFFF',
			dark: '#0B0B0B',
		},
		// background: {
		// 	default: '#000000', // Black background
		// 	paper: '#121212', // Dark grey paper background
		// },
		// text: {
		// 	primary: '#00ff00', // Bright green text
		// },
	},
	typography: {
		fontFamily: 'Poppins, sans-serif',
		allVariants: {
			fontWeight: 'bold',
		}, // Monospaced font
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				'*::-webkit-scrollbar': {
					width: '8px',
					height: '8px',
				},
				'*::-webkit-scrollbar-track': {
					background: '#1a1a1a',
				},
				'*::-webkit-scrollbar-thumb': {
					background: '#ff69b4',
					borderRadius: '4px',
					'&:hover': {
						background: '#ff8cc6',
					},
				},
				// For Firefox
				'*': {
					scrollbarWidth: 'thin',
					scrollbarColor: '#ff69b4 #1a1a1a',
				},
			},
		},
	},
})

export default theme
