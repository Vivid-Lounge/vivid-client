import React from "react";
import { Stack, Link } from "@mui/material";

const NavBar: React.FC = () => {

    return (
        <Stack
            sx={{
                width: '100%',
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center',
                top: '0',
                left: '0',
                flexDirection: 'row',
                gap: '16px',
                '>*': {
                    textDecoration: 'none !important',
                    color: 'white !important',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease-in-out',
                    '&::after': {
                        transition: 'all 0.2s ease-in-out',
                        content: '""',
                        height: '1px',
                        borderRadius: '2px',
                        width: '0%',
                        background: 'white',
                        display: 'flex',
                    },
                    '&:hover': {
                        '&::after': {
                            width: '100%',
                        }
                    }
                },
                zIndex: 200
            }}
        >
            <Link>Home</Link>
            <Link>About Us</Link>
            <Link>Event</Link>
            <Link>Contact</Link>
        </Stack>
    )
}

export default NavBar