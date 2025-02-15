import React, { useEffect } from 'react'
import Gallery from "../MainPage/components/Gallery";
import { Grid2 } from "@mui/material";
import {
	API_URI,
	// SERVE_IMAGES_URI,
	api,
} from '../../../../shared/api_routes'
import { GalleryType } from '../../../../shared/types'
const GalleryPage: React.FC = () => {
	const [gallery, setGallery] = React.useState<GalleryType>({} as GalleryType)
    const retrieveGallery = async () => {
        const response = await fetch(API_URI + api.getGallery.route, {
            method: api.getGallery.method,
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if (response.status === 200) {
                    const data = await response.json()
                    console.log(data)
                    setGallery(data[0])
                } else {
                    setGallery({} as GalleryType)
                }
    }

    useEffect(() => {
        retrieveGallery();
        console.log(gallery)
    }, [])

    return (
        <Grid2
            container
            sx={{
                width: '100vw',
                height: '100vh',
                alignItems: 'center',
                justifyContent: 'center',
                padding: {
                    xs: '16px',
                    md: '32px 0'
                }
                // background: 'red'
            }}
        >
                <Grid2
                    container
                    size={{xs: 12, md: 10}}
                    sx={{
                        minHeight: '100%',
                    }}
                >
                    {gallery.imageArray && (
                        <Gallery images={gallery.imageArray} />
                    )}
            </Grid2>
        </Grid2>
    )
}

export default GalleryPage