import React, { useEffect, useRef, useState } from "react";
import { Stack, Typography, Divider } from "@mui/material";
import Button from "../../../components/Button";
import TestimonialTitleIcon from "../../../../../shared/icons/TestimonialTitleIcon";
import DefaultLayout from "../../../defaultLayout/DefaultLayout";
import QuoteMark from "../../../../../shared/icons/QuoteMark";
import ArrowIcon from "../../../../../shared/icons/ArrowIcon";
import Background from "./../../../../../shared/images/about-us-photo2.png";
import Andor from "../../../../../shared/images/Andor";
import Testimonial from "../components/Testimonial";
import Testimonials from "../components/Testimonials";

const TestimonialSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const textRef = useRef(null);

  const handleRead = () => setOpen(!open);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Testimonials.length);
      }, 10000);

      return () => clearInterval(interval);
    }
  }, [open]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + Testimonials.length) % Testimonials.length
    );
  };

  return (
    <DefaultLayout
      sx={{
        background:
          "linear-gradient(180deg, #0B0B0B 7%,#522036 48%, #0B0B0B 83%)",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 0",
        flexWrap: "wrap",
        gap: "4rem",
      }}
    >
      <Stack
        sx={{
          width: "max-content",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0rem",
          flexDirection: "column",
          // background: 'red'
        }}
      >
        <Typography
          color="primary"
          fontWeight={"regular"}
          width={"max-content"}
          fontSize={32}
          textAlign={"center"}
          justifyContent={"center"}
        >
          TESTIMONIALS
        </Typography>
        {/*<SectionTitle
            title="TESTIMONIALS"
          />*/}
        <TestimonialTitleIcon sx={{ width: "30rem", height: "auto" }} />
      </Stack>
      <Stack
        sx={{
          width: "100%",
          // background: "red",
          justifyContent: "center",
          flexDirection: {
            xs: "column",
            md: "row-reverse",
          },
          alignItems: "center",
          position: "relative",
        }}
      >
        <Stack
          sx={{
            aspectRatio: "1 / 1",
            padding: "0px",
            height: "auto",
            background: `url(${Testimonials[currentIndex].artistImage})`,
            justifyContent: "center",
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: {
              xs: "80%",
              sm: '60%',
              md: "35%",
            },
            // opacity: isVisible ? 1 : 0,
            // transform: isVisible
            //   ? "translate(0%, 0%)"
            // : "translate(-10%, -10%)",
            // transition: "all 1s ease-out",
          }}
        />
        <Stack
          sx={{
            flexDirection: "column",
            width: {
              xs: "80%",
              md: "clamp(5rem, 40%, 20rem)",
            },
            height: "max-content",
            padding: "1rem",
            background: "#1D1D1D",
            opacity: isVisible ? 1 : 0,
            transform: {
              xs: isVisible
                ? "translate(0, -8px)"
                : "translate(0, -5%)",
              md: isVisible
                ? "translate(20%, 10%)"
                : "translate(10%, 10%)",
            },
            transition: " 1s ease-out",
          }}
        >
          <QuoteMark sx={{ width: "5rem", height: "auto" }} />
          <Testimonial
            testimonial={Testimonials[currentIndex]}
            textRef={textRef}
            handleRead={handleRead}
            open={open}
          />
          <Stack
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "right",
              justifyContent: "flex-end",
            }}
          >
            <Button
              onClick={prevTestimonial}
              sx={{
                width: "1rem",
                height: "auto",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ArrowIcon
                sx={{
                  fill: "white",
                  height: "auto",
                  width: "1.5rem",
                  transform: "rotate(90deg)",
                }}
              />
            </Button>
            <Button
              onClick={nextTestimonial}
              sx={{
                width: "1rem",
                height: "auto",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ArrowIcon
                sx={{
                  fill: "white",
                  height: "auto",
                  width: "1.5rem",
                  transform: "rotate(270deg)",
                }}
              />
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </DefaultLayout>
  );
};

export default TestimonialSection;
