import React from "react";
import { Stack } from "@mui/material";
import { CloseIcon } from "../../../../../shared/icons";
import GoogleMaps from "./GoogleMap";

const Map: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false)

    const handleModal = () => {
        setIsModalOpen(!isModalOpen)
    }


    return (
        <>
        <Stack
            sx={{
                position: 'fixed',
                bottom: '16px',
                right: '16px',
                color: 'black',
                // width: isModalOpen ? '100vw' : '4rem',
                // height: isModalOpen ? '100vh' : 'auto',
                // aspectRatio: isModalOpen ? 'unset' : '1/1',
                width: '4rem',
                height: 'auto',
                aspectRatio: '1/1',
                borderRadius: '50%',
                background: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: '2222',
                '&:hover': {
                    transform: 'scale(1.05)'
                },
                // '&::before':{
                //     content: "' '",
                //     background: 'red',
                //     width: isModalOpen ? '100vw' : 'unset',
                //     height: isModalOpen ? '100dvh' : 'unset',
                //     position: 'fixed',
                //     top: '0',
                //     right: '0',
                // },
                transition: 'border-radius 0s, background 0.1s ease-in-out, transform 0.2s ease-in-out',
                overflow: 'hidden',
            }}
            onClick={handleModal}
        >
            {/* <CloseIcon
                sx={{
                    fill: 'white',
                    width: '2rem',
                    height: 'auto',
                    display: isModalOpen ? 'flex' : 'none',
                    position: 'fixed',
                    top: '16px',
                    right: '16px'
                }}
                onClick={handleModal}
            /> */}
        </Stack>
        <GoogleMaps mapDisplay={isModalOpen} placeId="ChIJm-lVHwD7ykARnlQ1M_eteGk"/>
        </>
    )
}

export default Map