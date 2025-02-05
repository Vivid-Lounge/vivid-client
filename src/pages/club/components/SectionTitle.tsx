import React from "react";
import { Stack, Typography, StackProps } from "@mui/material";

interface Props extends StackProps{
    title?: string
    subtitle?: string
    description?: string
}

const SectionTitle: React.FC<Props> = ({title, subtitle, description, ...sx}) => {
  return (
    <Stack
      sx={{
        width: "100%",
      }}
      {...sx}
    >
      <Typography color="primary" fontSize ={32} fontWeight={"regular"} width={"max-content"}>
        {title}
      </Typography>
      <Typography color="white" fontWeight={"800"} width={"max-content"} textTransform={'uppercase'} fontSize={'clamp(1.25rem,5vw,5rem)'}>
        {subtitle}
      </Typography>
      <Typography color="white" fontWeight={"regular"} width={"100%"} textTransform={'uppercase'} fontSize={'1rem'}>
        {description}
      </Typography>
      
    </Stack>
  );
};

export default SectionTitle