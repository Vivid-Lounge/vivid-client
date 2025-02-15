import React, {useState} from "react";
import { Stack, Typography } from "@mui/material";
import {
  DateIcon,
  InfoIcon
} from "../../../../../shared/icons";
import EventsFeature from "../components/EventsFeature";
import { Event } from "../../../../../shared/types";
import { GradientButton } from "../../../components";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { SERVE_IMAGES_URI } from "../../../../../shared/api_routes";

interface Props {
  event: Event;
}

const AboutEventSection: React.FC<Props> = ({ event }) => {
	const [isOpen, setIsOpen] = useState(false)

	const handleOpen = () => {setIsOpen(!isOpen)}

  return (
    <>
      <Stack
        sx={{
          width: {
            xs: "100%",
            sm: "calc(40% - 16px)",
          },
          height: "100%",
          background: `url("${SERVE_IMAGES_URI}${event.posterImage}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
		  position: {
			xs: 'absolute',
			sm: 'relative'
		  }
        }}
      >
		<Stack
			sx={{
				position: 'absolute',
				background: 'rgba(0,0,0,0.6)',
				aspectRatio: '1 / 1',
				width: '56px',
				height: 'auto',
				bottom: '16px',
				right: '16px',
				borderRadius: '50%',
				display: {
					xs: 'flex',
					sm: 'none'
				},
				cursor: 'pointer',
				zIndex: '5',
				overflow: 'hidden',
				alignItems: 'center',
				justifyContent: 'center',
				border: '2px solid #ff1083',
			}}
			onClick={handleOpen}
		>
			<InfoIcon sx={{fill: 'white', width: '16px', height: 'auto'}}/>
		</Stack>
	  </Stack>

      <Stack
        sx={{
          width: {
            xs: "100%",
            sm: "calc(60% - 16px)",
          },
          textWrap: "wrap",
          flexWrap: "wrap",
          lineBreak: "anywhere",
          height: {
			xs: isOpen ? "100%" : '0',
			sm: '100%'
		},
        //   background: "red",
		  alignItems: 'flex-start',
		  justifyContent: 'space-between',
		  padding: {
			xs: '32px',
			sm: '0'
		  },
		  position: {
			xs: 'absolute',
			sm: 'relative'
		  },
		//   transition: 'all 0.2s ease-in-out',
		  '&::before': {
			content: '" "',
			background: 'rgba(0,0,0,0.6)',
			width: isOpen ? '100%' : '0',
			height: isOpen ? '100%' : '0',
			position: 'absolute',
			// zIndex: '100',
			top: '0',
			left: '0',
			overflow: 'hidden',
			transition: 'all 0.2s ease-in-out',
			transform: {
				// xs: isOpen ? 'translate(0, 0)' : 'translate(0, -500%)'
			}
		  }
        }}
      >
		
        <Stack
          sx={{
            width: "100%",
			gap: '2rem',
			// padding: '16px',
			// background: 'rgba(0,0,0,0.6)'
			zIndex: '4',
			transition: 'all 0.2s ease-in-out',
			display: {
				xs: 'flex',
				// xs: isOpen ? 'flex' : 'none',
				sm: 'flex'
			},
			transform: {
				xs: isOpen ? 'translate(0, 0)' : 'translate(0, -1000%)',
				sm: 'unset'
			},

          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: "clamp(1.25rem, 2vw, 2rem)",
              fontWeight: "1000",
              WebkitTextStroke: "1px white",
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "text",
              letterSpacing: "2px",
            }}
          >
            {event.title}
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: "clamp(16px, 2vw, 18px)",
            }}
          >
            {event.description}
          </Typography>
        </Stack>
        <Stack
			sx={{
				width: '100%',
				gap: '2rem',
				// background: 'rgba(0,0,0,0.6)',
				// padding: '16px',
				// border: '1px solid #ff1083'
				zIndex: '4',
				transform: {
					xs: isOpen ? 'translate(0, 0)' : 'translate(0, 500%)',
					sm: 'unset'
				},
				transition: 'all 0.2s ease-in-out',
				overflow: 'hidden'
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
              featureIcon={<DateIcon />}
              featureTitle="date"
              featureDescription={new Date(event.date ?? "").toDateString()}
            />
            <EventsFeature
              featureIcon={<LocalPhoneIcon />}
              featureTitle="RSVP"
              featureDescription={event.phone}
            />
          </Stack>
          <GradientButton sx={{width: 'max-content'}}>Buy Tickets</GradientButton>
        </Stack>
      </Stack>
    </>
    // <Grid2
    // 	container
    // 	sx={{
    // 		flexDirection: 'row',
    // 		width: '100%',
    // 		height: '100%',
    // 		justifyContent: 'center',
    // 		alignItems: 'center',
    // 	}}
    // >
    // 	<Grid2
    // 		container
    // 		size={{ xs: 12, sm: 6 }}
    // 		sx={{
    // 			width: '100%',
    // 			height: '100%',
    // 			flexDirection: 'column',
    // 		}}
    // 	>
    // 		<Box
    // 			id='poster-image'
    // 			sx={{
    // 				background: `url("${SERVE_IMAGES_URI}${event.posterImage}")`,
    // 				backgroundSize: 'cover',
    // 				backgroundPosition: 'center',
    // 				width: '100%',
    // 				height: '100%',
    // 				minWidth: '50%',
    // 				maxWidth: '60%',

    // 				position: 'relative',
    // 			}}
    // 		></Box>
    // 	</Grid2>
    // 	<Grid2
    // 		container
    // 		size={{ xs: 12, sm: 4 }}
    // 		sx={{
    // 			height: '100%',
    // 			alignItems: 'space-between',
    // 			flexDirection: 'row',
    // 		}}
    // 	>
    // 		<Grid2
    // 			size={{ xs: 6 }}
    // 			sx={{
    // 				width: '100%',
    // 			}}
    // 		>
    // 			<Stack
    // 				sx={{
    // 					width: '100%',
    // 					textWrap: 'wrap',
    // 					flexWrap: 'wrap',
    // 					lineBreak: 'anywhere',
    // 					height: '100%',
    // 				}}
    // 			>
    // 				<Typography
    // 					variant={'h2'}
    // 					sx={{
    // 						color: 'white',
    // 						mb: 2,
    // 					}}
    // 				>
    // 					{event.title}
    // 				</Typography>
    // 				<Typography
    // 					sx={{
    // 						color: 'white',
    // 						fontSize: 'clamp(16px, 2vw, 18px)',
    // 					}}
    // 				>
    // 					{event.description}
    // 				</Typography>
    // 			</Stack>
    // 		</Grid2>
    // 		<Grid2
    // 			size={{ xs: 6 }}
    // 			sx={{
    // 				// background: '#1C1C1C',
    // 				mt: 'auto',
    // 				padding: '1rem',
    // 				gap: '2rem',
    // 				width: '100%',
    // 			}}
    // 		>
    // 			<Typography
    // 				color='white'
    // 				textTransform={'uppercase'}
    // 				fontSize={'1.25rem'}
    // 				sx={{
    // 					mb: 3,
    // 				}}
    // 			>
    // 				About event
    // 			</Typography>
    // 			<Stack
    // 				sx={{
    // 					gap: '1rem',
    // 				}}
    // 			>
    // 				<EventsFeature
    // 					featureIcon={<DateIcon />}
    // 					featureTitle='date'
    // 					featureDescription={new Date(
    // 						event.date ?? ''
    // 					).toDateString()}
    // 				/>
    // 				<EventsFeature
    // 					featureIcon={<LocalPhoneIcon />}
    // 					featureTitle='RSVP'
    // 					featureDescription={event.phone}
    // 				/>
    // 			</Stack>
    // 			<GradientButton marginTop={'2rem'}>
    // 				Buy Tickets
    // 			</GradientButton>
    // 		</Grid2>
    // 	</Grid2>
    // </Grid2>
  );
};

export default AboutEventSection;
