import React from 'react'
import { SvgIconProps, Stack, Typography } from '@mui/material'
import { DateIcon } from '../../../../../shared/icons'

interface Props {
	featureTitle: string | null
	featureIcon: React.ReactElement<SvgIconProps>
	featureDescription: string | null
}

const EventsFeature: React.FC<Props> = ({
	featureDescription,
	featureTitle,
	featureIcon,
}) => {
	return (
		<Stack
			sx={{
				flexDirection: 'column',
				gap: '0.5rem',
				alignItems: 'flex-start',
			}}
		>
			<Stack
				sx={{
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center',
					gap: '1rem',
				}}
			>
				{React.cloneElement(featureIcon, {
					style: { fill: '#FF1083' },
				})}
				<Typography color='white' textTransform={'uppercase'}>
					{featureTitle}
				</Typography>
			</Stack>
			<Typography sx={{ fontWeight: 'normal', color: 'white', ml: 5 }}>
				{featureDescription}
			</Typography>
		</Stack>
	)
}

export default EventsFeature
