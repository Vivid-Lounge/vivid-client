import React from "react";
import {
  Stack,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { TestimonialType } from "../../../../../shared/types";
import { Button } from "../../../components";

interface Props {
  textRef: React.MutableRefObject<null>;
  testimonial: TestimonialType;
  handleRead: () => void;
  open: boolean;
}

const Testimonial: React.FC<Props> = ({
  textRef,
  testimonial,
  handleRead,
  open,
}) => {
  const isLongText = testimonial.testimonialText.length > 150;

  return (
    <>
      <Stack
        sx={{
          ">*": {
            textTransform: "uppercase",
          },
        }}
      >
        <Typography
          ref={textRef}
          sx={{
            color: "#ccc",
            fontWeight: "regular",
          }}
        >
          {isLongText
            ? `${testimonial.testimonialText.substring(0, 150)}...`
            : testimonial.testimonialText}
        </Typography>
        {isLongText && (
          <Button
            onClick={handleRead}
            sx={{
              marginTop: "16px",
              marginBottom: "16px",
              padding: "10px 20px",
            }}
          >
            <Typography sx={{ fontSize: "0.85rem" }}>View More</Typography>
          </Button>
        )}
        <Typography
          sx={{
            fontSize: "1.5rem",
            fontWeight: "1000",
            WebkitTextStroke: "1px white",
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
            letterSpacing: "2px",
          }}
        >
          {testimonial.artist}
        </Typography>
        <Typography sx={{ fontSize: "1.25rem", color: "white" }}>
          {testimonial.aboutArtist}
        </Typography>
      </Stack>

      {/* Modal */}
      <Dialog open={open} onClick={handleRead} fullWidth maxWidth="sm">
        <DialogTitle
          sx={{
            fontSize: "1.75rem",
            fontWeight: "1000",
            WebkitTextStroke: "1px white",
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
            letterSpacing: "2px",
            textTransform: 'uppercase'
          }}
        >
          {testimonial.artist}
        </DialogTitle>
        <DialogContent>
          <Typography sx={{ color: "#ccc" }}>
            {testimonial.testimonialText}
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              color: "black",
              mt: 2,
              textTransform: "uppercase",
              padding: "4px",
              background: "#FF1083",
              width: "max-content",
            }}
          >
            {testimonial.aboutArtist}
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Testimonial;
