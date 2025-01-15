import React from "react";
import { Grid2, Stack, Typography } from "@mui/material";
import ServicesTitleIcon from "../../../../../shared/icons/ServicesTitleIcon";
import ServiceContainer from "../components/ServiceContainer";

const ServiceSection: React.FC = () => {
    
    return (
        <Grid2
            container
            sx={{
                // minHeight: '100vh',
                height: 'max-content',
                width: '100vw',
                // background: 'linear-gradient(180deg, #522036 25%, #0B0B0B 83%)',
                alignItems: 'center',
                justifyContent: 'center',
                padding: {
                    xs: '4rem 1rem',
                    md: '4rem 0rem',
                }
            }}
        >
            <Grid2
                container
                size={{xs: 12, md: 10}}
                sx={{
                    height: 'max-content',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '2rem',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}
            >
                <Stack
                    sx={{
                        width: {
                            xs: '100%',
                            md: 'max-content',
                            alignItems: 'center'
                        }
                    }}
                >
                    <Typography color="primary" fontWeight={'regular'} width={'max-content'}>OUR SERVICES</Typography>
                    <ServicesTitleIcon sx={{width: 'clamp(6rem, 100%, 30rem)', height:'auto'}} />
                </Stack>
                <ServiceContainer title="LOUNGE BAR"/>
                <ServiceContainer title="SPECIAL EVENTS"/>
                <ServiceContainer title="DANCE FLOOR"/>
                <ServiceContainer title="VIP ZONE"/>

            </Grid2>
        </Grid2>
    )
}

export default ServiceSection