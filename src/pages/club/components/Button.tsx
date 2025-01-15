import React, { ReactElement } from "react";
import { Stack, StackProps } from "@mui/material";

interface Props extends StackProps{
    children: ReactElement
}

const Button: React.FC<Props> = ({children, ...rest}) => {
  return (
    <Stack
      {...rest}
      sx={{
        padding: "1rem 2rem",
        border: "1px solid white",
        width: "max-content",
        cursor: "pointer",
        position: "relative",
        color: 'white',
        textTransform: 'uppercase',
        '>*': {
            zIndex: '2'
        },
        "&::before": {
          // content: '"VIEW EVENT"',
          content: '""',
          width: "0%",
          height: "100%",
          background: "#FF1083",
          position: "absolute",
          bottom: "0",
          left: "0",
          transition: "all 0.1s ease-in",
          // borderRadius: '50%',
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "400",
          zIndex: "0",
        },
        // '&::before': {
        //     content: '"VIEW EVENT"',
        //     fontFamily: 'Poppins',
        //     fontWeight: '400',
        //     color: 'red',
        //     position: 'absolute',
        //     top: '0',
        //     left: '0',
        //     transform: 'translate(-50%, -50%)',
        //     width: '5%',
        //     height: '100%',
        //     background: 'blue',
        //     display: 'flex',
        //     alignItems: 'center',
        //     justifyContent: 'center',
        //     overflow: 'hidden'
        // },
        "&:hover": {
          "&::before": {
            width: "100%",
            height: "100%",
            borderRadius: "0",
          },
        },
        ...rest.sx,
      }}
    >
        {children}
    </Stack>
  );
};

export default Button;
