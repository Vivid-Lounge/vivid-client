import React from "react";
import { Stack } from "@mui/material";

interface Props {
    images: String[]
}

const Gallery: React.FC<Props> = ({images}) => {
    return (
        <Stack
            sx={{
                height: 'max-content',
                width: '100%',
                gap: '32px',
                flexDirection: 'row',
                '>*': {
                    width: 'calc(50% - 16px)',
                    aspectRatio: '1/1',
                    height: 'auto',
                }
            }}
        >
            <Stack 
                sx={{
                    // width: 'calc(50% - 16px)',
                    // aspectRatio: '1/1',
                    // height: 'auto',
                    background: `url(${images[0]})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            />
            <Stack 
                sx={{
                    // width: 'calc(50% - 16px)',
                    // aspectRatio: '1/1',
                    // height: 'auto',
                    // background: 'red',
                    flexDirection: 'column',
                    gap: '32px',
                    '>*': {
                        width: '100%',
                        height: 'calc(50% - 16px)',
                        // background: 'blue',
                    }
                }}
            >
                <Stack
                    sx={{
                        background: `url(${images[1]})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                />
                <Stack
                    sx={{
                        background: `url(${images[2]})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                />
            </Stack>
        </Stack>
    )
}

export default Gallery