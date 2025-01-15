// theme.ts
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#FF1083',
			light: '#FFFFFF',
			// contrastText: '#FFFFFF',
            dark: '#0B0B0B'
			
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
			fontWeight: 'bold'
		} // Monospaced font
		
	},
	// components: {
	// 	MuiTypography: {
	// 		defaultProps: {
	// 			fontWeight: 600
	// 		}
	// 	}
	// }
})

export default theme
