import React from "react";
import { Grid2, Typography, Stack, Divider } from "@mui/material";
import Background from "./../../../../../shared/images/visit-background.png";
import Button from "../../../components/Button";
import { VisitOurClub, Mapa, Mail, Phone } from "../../../../../shared/icons";

const VisitSection: React.FC = () => {
  return (
    <Grid2
      container
      sx={{
        width: "100dvw",
        // background: '#0B0B0B',
        background: `linear-gradient(180deg, #0B0B0B 0%, rgba(66, 21, 37, 0.33) 43%, #552138 100% ), url(${Background})`,
        alignItems: "center",
        justifyContent: "center",
        padding: {
          xs: "1rem",
          md: "1rem 0rem",
        },
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflowX: "hidden",
      }}
    >
      <Grid2
        container
        size={{ xs: 12, md: 10 }}
        sx={{
          // background: 'blue',
          height: "100%",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: {
			 xs: "column",
			 md: 'row'
		  },
		  rowGap: '16px'
        }}
      >
        <Stack
          sx={{
            width: {
              xs: "max-content  ",
              md: "50%",
            },
			gap: '16px',
          }}
        >
          <Typography
            color="#FF1083"
            fontSize={"2rem"}
            fontWeight={"bold"}
            width={"max-content"}
          >
            VISIT US
          </Typography>
          <Stack
		  	sx={{
				'>*': {
					color: '#fff',
					fontSize: 'clamp(1.5rem, 5vw, 4rem)',
					fontWeight: '800'
				},
				marginTop: '-16px'
			}}
			spacing={-2}
		  >
			<Typography>COME AND VISIT</Typography>
			<Typography
				// sx={{
				// 	marginTop: '-32px'
				// }}
			>
				OUR CLUB
			</Typography>
		  </Stack>
          <Button
		  	sx={{
				padding: '12px 24px'
			}}
		  >
            <Typography fontWeight={"light"} fontSize={"1.25rem"}>
              CONTACT US
            </Typography>
          </Button>
        </Stack>
        <Stack
          sx={{
            width: {
				xs: "max-content",
				md: '50%'
			},
            height: "auto",
            flexDirection: "center",
            // background: 'red',
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack
            sx={{
              width: {
				xs: "100%",
			  },
              height: "auto",
              padding: "1rem",
              background: "#1D1D1D",
              color: "white",
              fontWeight: "regular",
			  gap: '8px'
            }}
          >
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "16px",
                alignItems: "center",
              }}
            >
              <Mapa sx={{ width: "2rem", height: 'auto' }} />
              <Typography sx={{ fontSize: "1rem", fontWeight: "light" }}>
                Bld Profesor Dimitrie Mangeron Nr 71, Iași
              </Typography>
            </Stack>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "16px",
                alignItems: "center",
              }}
            >
              <Mail sx={{ width: "2rem", height: 'auto' }} />
              <Typography sx={{ fontSize: "1rem", fontWeight: "light" }}>
                vividlounge@gmail.com
              </Typography>
            </Stack>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "16px",
                alignItems: "center",
              }}
            >
              <Phone sx={{ width: "2rem", height: 'auto' }} />
              <Typography sx={{ fontSize: "1rem", fontWeight: "light" }}>
                0755.334.826
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Grid2>
    </Grid2>
  );
};

export default VisitSection;
