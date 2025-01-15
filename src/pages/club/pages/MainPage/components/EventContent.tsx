import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import { UpcomingEventsIcon } from "../../../../../shared/icons";
import Button from "../../../components/Button";
import { Typography } from "@mui/material";
import { events } from "../../Events/events/events";

interface Props {
  mainPage?: boolean | undefined;
}

const EventContent: React.FC<Props> = ({ mainPage = true }) => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEventIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <UpcomingEventsIcon sx={{ width: "max(24px, 50%)", height: "auto" }} />
      <EventCard event={events[currentEventIndex]} />
      {mainPage && (
        <Button>
          <Typography>view all events</Typography>
        </Button>
      )}
    </>
  );
};

export default EventContent;
