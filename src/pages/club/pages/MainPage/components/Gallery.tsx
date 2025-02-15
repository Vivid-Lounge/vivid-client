import React from 'react'
import { Stack, Box } from '@mui/material'
import { Image } from '../../../../../shared/types/ImageType'
import { SERVE_IMAGES_URI } from '../../../../../shared/api_routes'

interface Props {
	images: Image[]
}

const Gallery: React.FC<Props> = ({ images }) => {
	// Chunk the images in groups of 3
	function chunkArray<T>(arr: T[], size: number): T[][] {
		return arr.reduce((acc, _, i) => {
			if (i % size === 0) acc.push(arr.slice(i, i + size))
			return acc
		}, [] as T[][])
	}

	const rows = chunkArray(images, 3)
	// Common background styling for each image
	const bgStyle = (img?: Image) => ({
		backgroundImage: `url("${SERVE_IMAGES_URI}/gallery/${img?.imageUrl}")`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		// We use position relative + top-padding hack to maintain aspect ratio
		position: 'relative',
	})

	// Big image = square in half-width container => total row height is 50% of row width
	const bigImageSx = (img?: Image) => ({
		...bgStyle(img),
		pt: '50%', // paddingTop: "100%" => 1:1 aspect ratio
	})

	// Small image = half-square in half-width container => each is 25% of row width
	const smallImageSx = (img?: Image) => ({
		...bgStyle(img),
		pt: '50%', // 1:2 aspect ratio within its half-width container
	})

	return (
		<Stack direction='column' spacing={4} width='100%'>
			{rows.map((row, rowIndex) => {
				const isEvenRow = rowIndex % 2 === 0
				// It's good practice to handle the case where row.length < 3, but let's assume 3 for now
				const [img1, img2, img3] = row
				console.log(
					`url("${SERVE_IMAGES_URI}/gallery/${img1?.imageUrl}")`
				)

				return (
					<Stack
						key={rowIndex}
						direction='row'
						spacing={4}
						width='100%'
					>
						{isEvenRow ? (
							/* Even row: big image on left, two small images stacked on right */
							<>
								<Box flex={1} sx={bigImageSx(img1)} />
								<Stack flex={1} direction='column' spacing={4}>
									<Box sx={smallImageSx(img2)} />
									<Box sx={smallImageSx(img3)} />
								</Stack>
							</>
						) : (
							/* Odd row: two small images on left, big image on right */
							<>
								<Stack flex={1} direction='column' spacing={4}>
									<Box sx={smallImageSx(img1)} />
									<Box sx={smallImageSx(img2)} />
								</Stack>
								<Box flex={1} sx={bigImageSx(img3)} />
							</>
						)}
					</Stack>
				)
			})}
		</Stack>
	)
}

export default Gallery
