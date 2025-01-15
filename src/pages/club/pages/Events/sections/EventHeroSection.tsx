import React from "react";
import { Grid2, Typography, Stack } from "@mui/material";
import { GradientButton, WhiteButton } from "../../../components";
import { Event } from "../../../../../shared/types/EventType";
  
  interface Props {
    event: Event;
}

const EventHeroSection: React.FC<Props> = ({event}) => {

  return (
    // <div style={{ padding: "2rem" }}>
    //   <h1>{event.artist}</h1>
    //   <p>{event.date}</p>
    //   <p>{event.dj}</p>
    //   <p>{event.description}</p>
    //   <img src={event.image} alt={event.artist} style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }} />
    // </div>
    <Grid2
      container
      sx={{
        width: "100vw",
        height: "50dvh",
        background: `url(${event.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
    >
      <Grid2
        container
        size={{ xs: 12, md: 10 }}
        sx={{
          alignItems: 'center',
          justifyContent: 'flex-end',
          height: '100%',
          flexDirection: 'column',
          // background: 'red',
          gap: '1rem'
        }}  
      >
        <Stack
          sx={{
            '>*': {
              color: 'white',
            },
            alignItems: 'center',
            justifyContent: 'center',
            // background: 'red'
          }}
        >
          <Typography
            sx={{ fontSize: "clamp(16px, 2vw, 24px)", fontWeight: "400" }}
          >
            {event.date}
          </Typography>
          <Typography
            sx={{ fontSize: "clamp(24px, 4vw, 48px)", textTransform: 'uppercase', fontWeight: "800" }}
          >
            {event.artist}
          </Typography>
          <Typography
            sx={{ fontSize: "clamp(16px, 2vw, 24px)", fontWeight: "400" }}
          >
            {event.dj}
          </Typography>
        </Stack>
        <Stack
          sx={{
            flexDirection: 'row',
            gap: '1rem',
            '>*': {
              minWidth: '10rem'
            }
          }}
        >
          <GradientButton>Buy Tickets</GradientButton>
          <WhiteButton>RSVP</WhiteButton>
        </Stack>
      </Grid2>
    </Grid2>
  );
};

export default EventHeroSection;
