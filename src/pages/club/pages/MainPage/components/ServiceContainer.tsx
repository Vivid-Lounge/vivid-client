import React from "react";
import { Stack, Typography, StackProps } from "@mui/material";
import { LoungeBarIcon } from "../../../../../shared/icons";

const ServiceContainer: React.FC<StackProps> = ({title}) => {
    return (
        <Stack
            sx={{
                background: '#1D1D1D',
                // background: 'red',
                padding: '0.75rem',
                aspectRatio: '1.83 / 1',
                width: {
                    xs: '100%',
                    sm: '70%',
                    md: 'clamp(2rem, 25%, 40rem)',
                },
                justifyContent: 'center',
                gap: '1rem'
            }}
        >
            <LoungeBarIcon sx={{width: '2.5rem', height: 'auto'}} />
            <Typography color="white" fontSize={'1.25rem'} textTransform={'uppercase'}>{title}</Typography>
            <Typography color="white" fontWeight={'regular'}>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.</Typography>
        </Stack>
    )
}

export default ServiceContainer