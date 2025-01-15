import React from "react";
import { Grid2, Stack, Typography } from "@mui/material";
import {
  DateIcon,
  ScheduleIcon,
  EventTypeIcon,
} from "../../../../../shared/icons";
import EventsFeature from "../components/EventsFeature";
import { Event } from "../../../../../shared/types/EventType";
import { GradientButton } from "../../../components";

interface Props {
  event: Event;
}

const AboutEventSection: React.FC<Props> = ({ event }) => {
  return (
    <Grid2
        container
        sx={{
            flexDirection: 'row',
            width: '100vw',
            alignItems: 'flex-start',
            justifyContent: 'center'
        }}
    >
      <Grid2
        container
        size={{xs: 12, md: 6}}
        sx={{
            flexDirection: 'column'
        }}
      >
        <Typography
          color="white"
          textTransform={"uppercase"}
          fontSize={"1.5rem"}
        >
          About event
        </Typography>
        <Typography sx={{
            color: 'white',
            fontWeight: 'normal'
        }}>
            {event.description}
        </Typography>
      </Grid2>
      <Grid2
        container
        size={{xs: 12, md: 4}}
        sx={{
          background: "#1C1C1C",
          padding: "1rem",
          gap: "1rem",
          flexDirection: 'column'
        }}
      >
        <Typography
          color="white"
          textTransform={"uppercase"}
          fontSize={"1.25rem"}
        >
          About event
        </Typography>
        <Stack
          sx={{
            gap: "1rem",
          }}
        >
          <EventsFeature
            featureIcon={<ScheduleIcon />}
            featureTitle="SCHEDULE"
            featureDescription={event.schedule}
          />
          <EventsFeature
            featureIcon={<EventTypeIcon />}
            featureTitle="event type"
            featureDescription={event.type}
          />
          <EventsFeature
            featureIcon={<DateIcon />}
            featureTitle="date"
            featureDescription={event.date}
          />
        </Stack>
        <GradientButton marginTop={"2rem"}>Buy Tickets</GradientButton>
      </Grid2>
    </Grid2>
  );
};

export default AboutEventSection;
