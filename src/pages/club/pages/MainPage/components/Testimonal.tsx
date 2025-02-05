import React from "react";
import { Stack, Typography } from "@mui/material";

interface Props {
  textRef: React.MutableRefObject<null>;
  artist: String;
  testimonialText: String;
  aboutArtist?: String;
}

const Testimonal: React.FC<Props> = ({
  textRef,
  artist,
  testimonialText,
  aboutArtist = "DJ",
}) => {
  return (
    <Stack
        sx={{
            '>*':{
                textTransform: 'uppercase'
            }
        }}
    >
      <Typography
        ref={textRef}
        sx={{
          color: "#ccc",
          fontWeight: "regular",
          //fontFamily:'Poppins',
          // transform: 'translate(20%, 10%)',
          //backdropFilter: 'blur(1px)',
        }}
      >
        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. */}
        {testimonialText}
      </Typography>
      <Typography
        sx={{
            fontSize: '1.5rem',
            // color: 'transparent',
            // WebkitTextStroke: '1px white',
            fontWeight: '1000',
            WebkitTextStroke: '1px white',
            WebkitTextFillColor: 'transparent',
            WebkitBackgroundClip: 'text',
            letterSpacing: '2px'
        }}
      >
        {artist}
    </Typography>
      <Typography sx={{ fontSize: "1.25rem", color: "white" }}>
        {aboutArtist}
      </Typography>
    </Stack>
  );
};

export default Testimonal;
