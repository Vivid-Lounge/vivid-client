import React from "react";
import { Stack, Tooltip } from "@mui/material";
import GoogleMaps from "./GoogleMap";
import { LocationIcon, CloseIcon } from "../../../../../shared/icons";

const Map: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false)

    const handleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    const tooltipText = isModalOpen ? "Read more about us" : "Where you can find us"

    return (
        <>
            <Tooltip title={tooltipText}>
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
                        background: 'rgba(0,0,0,0)',
                        alignItems: 'center',
                        border: '2px solid #E0356A',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        zIndex: '2222',
                        '>*': {
                            fill: '#E0356A',
                            width: '2rem',
                            Height: 'auto'
                        },
                        '&:hover': {
                            transform: 'scale(1.05)',
                            borderColor: 'white',
                            '>*': {
                                fill: 'white !important'
                            }
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
                        transition: 'all 0.2s ease-in-out',
                        overflow: 'hidden',
                    }}
                    onClick={handleModal}
                >
                    {isModalOpen ? <CloseIcon /> : <LocationIcon />}
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
            </Tooltip>
            <GoogleMaps mapDisplay={isModalOpen} placeId="ChIJm-lVHwD7ykARnlQ1M_eteGk" />
        </>
    )
}

export default Map