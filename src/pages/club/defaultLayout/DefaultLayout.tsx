import React from "react";
import { Grid2, Grid2Props } from "@mui/material";

interface Props extends Grid2Props {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<Props> = ({ children, ...sx }) => (
  <Grid2
    container
    sx={{
      minHeight: "100vh",
      width: "100vw",
    //   background: "linear-gradient(180deg, #522036 25%, #0B0B0B 83%)",
      alignItems: "center",
      justifyContent: "center",
      padding: {
        xs: '16px',
        md: '16px 0'
      }
    }}
    {...sx}
  >
    <Grid2
      container
      size={{ xs: 12, md: 10 }}
      sx={{
        height: "max-content",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
      }}
    >
      {children}
    </Grid2>
  </Grid2>
);

export default DefaultLayout;
