import React, { FC } from 'react'
import { NavBar } from '../components'
import { Box } from '@mui/material'
// import { ArrowIcon } from '../../../shared/icons'
type Props = {
	children: React.ReactNode
}
const MainLayout: FC<Props> = ({ children }) => {
	return (
		<Box>
			<NavBar />
			{/* <ArrowIcon /> */}
			{children}
		</Box>
	)
}

export default MainLayout
