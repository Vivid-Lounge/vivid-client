import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import AboutUsPhoto from "./../../../../../shared/images/about-us-photo.png";
import { SectionTitle } from "../../../components";

const MinimalistPhoto: React.FC = () => {
  return (
    <Stack
      // spacing={2}
      sx={{
        flexDirection: {
            // xs: 'column',
            xs: 'row'
        },
        position: "relative",
        width: "100%",
        height: "80%",
        gap: "16px",
        "&>div": {
          flexGrow: "1",
          // display: {
          //     xs: 'none',
          //     md: 'flex'
          // },
          // borderRadius: '16px',
          height: {
            xs: "60%",
            sm: "100%",
          },
          boxSizing: "border-box",
          WebkitMask: "linear-gradient(#fff, #fff)",
          mask: "linear-gradient(#fff, #fff)",
          "&::before": {
            content: "' '",
            zIndex: "-1",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            background: `url(${AboutUsPhoto})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            position: "absolute",
            transform: "scaleX(-1)",
          },
        },
      }}
    >
      <Stack
        sx={{
          height: "50% !important",
          display: {
            xs: "none",
            md: "flex",
          },
        }}
      />
      <Stack
        sx={{
          height: {
            xs: "50% !important",
            md: "100% !important",
          },
          display: {
            xs: "none",
            sm: "flex",
          },
        }}
      />
      <Stack />
      <Box
        component={"span"}
        sx={{
          position:{
            sm: "flex",
            xs: "absolute",
          },
          width: {
            xs: "100%",
            sm: "calc(50% - 16px)",
            md: "calc(33.3% - 16px)",
          },
          // height: '50%',
          bottom: "0",
          left: "0",
        }}
      >
        <SectionTitle subtitle="ABOUT US" />

        <Typography
          sx={{
            color: "#ccc",
            width: "100%",
            fontWeight: '500',
            textAlign: 'justify',
          }}
        >
          Deschis în 2024 în vibrantul campus studențesc Tudor Vladimirescu din
          Iași, <span style={{ color: "#E0356A" }}>Vivid Lounge</span> a devenit
          rapid un epicentru al vieții de noapte, muzicii și experiențelor
          sociale. Cu un sistem de sunet de ultimă generație, lumini
          spectaculoase și efecte vizuale captivante, clubul oferă o atmosferă
          unică, găzduind atât artiști internaționali, cât și talente locale.
        </Typography>
      </Box>
    </Stack>
  );
};

// content: "";
//   position: absolute;
//   z-index:-1;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background: url(https://picsum.photos/id/107/1000/800) center/cover;

export default MinimalistPhoto;
