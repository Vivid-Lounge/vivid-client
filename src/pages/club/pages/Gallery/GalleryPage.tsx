import React from "react";
import Photos from "../MainPage/sections/PhotoTest";
import Gallery from "../MainPage/components/Gallery";
import { Grid2 } from "@mui/material";

const GalleryPage: React.FC = () => {
    return (
        <Grid2
            container
            sx={{
                width: '100vw',
                height: '100vh',
                alignItems: 'center',
                justifyContent: 'center'
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
                    {Photos.map((photo, index) => (
                        <Gallery images={photo} key={index} />
                    ))}
            </Grid2>
        </Grid2>
    )
}

export default GalleryPage