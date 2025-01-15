import React from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import { ArrowIcon } from "../../../../../shared/icons";
import Button from "../../../components/Button";

interface Event {
  image: string;
  date: string;
  artist: string;
  dj: string;
  slug: string;
}

interface Props {
  event: Event;
}

const EventCard: React.FC<Props> = ({ event }) => {
  const navigate = useNavigate();

  const handleViewEvent = () => {
    navigate(`/events/${event.slug}`);
  };

  return (
    <Stack
      sx={{
        width: "100%",
        flexDirection: "row",
        height: "max-content",
        alignItems: "center",
      }}
    >
      <ArrowIcon sx={{ fill: "white", height: "20%", width: "auto", transform: "rotate(90deg)" }} />
      <Stack
        sx={{
          width: "100%",
          height: "auto",
          aspectRatio: "1 / 0.3",
          background: `linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%), url(${event.image})`,
          padding: "1rem",
          justifyContent: "space-between",
          position: "relative",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Stack
          sx={{
            ">*": {
              color: "white",
              padding: "4px",
            },
          }}
        >
          <Typography sx={{ fontSize: "clamp(16px, 2vw, 24px)", fontWeight: "400" }}>
            {event.date}
          </Typography>
          <Typography sx={{ fontSize: "clamp(24px, 4vw, 48px)", fontWeight: "800" }}>
            {event.artist}
          </Typography>
          <Typography sx={{ fontSize: "clamp(16px, 2vw, 24px)", fontWeight: "400" }}>
            {event.dj}
          </Typography>
        </Stack>
        <Button
          sx={{ padding: { xs: "12px 24px !important", md: "16px 32px" } }}
          onClick={handleViewEvent}
        >
          <Typography>view event</Typography>
        </Button>
      </Stack>
      <ArrowIcon sx={{ fill: "white", height: "20%", width: "auto", transform: "rotate(-90deg)" }} />
    </Stack>
  );
};

export default EventCard;
