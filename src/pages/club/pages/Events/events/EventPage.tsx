import React from "react";
import { useParams } from "react-router-dom";
import { events } from "./events";
import { Grid2, Typography, Stack } from "@mui/material";
import { EventHeroSection } from "../sections";
import AboutEventSection from "../sections/AboutEventSection";

const EventPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    return <h3>Event not found</h3>;
  }

  return (
    <Grid2
      container
      sx={{
        width: '100vw',
        minHeight: '100vh',
        alignItems: 'flex-start',
        justifyContent: 'center'
      }}
    >
      <EventHeroSection event={event}/>
      <AboutEventSection event={event}/>
    </Grid2>
  );
};

export default EventPage;
