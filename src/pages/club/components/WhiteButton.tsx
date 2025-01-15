import React from "react";
import { Link, LinkProps } from "@mui/material";

interface Props extends LinkProps {
    children: React.ReactNode
}

const WhiteButton: React.FC<Props> = ({children, ...rest}) => {
    return (
        <Link
          {...rest}
            sx={{
              background: 'rgba(0,0,0,0)',
              border: '2px solid white',
              padding: '12px 24px',
              color: 'white',
              borderRadius: '20px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              cursor: 'pointer',
              position: 'relative',
              zIndex: '1',
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                background: 'white',
                color: 'black'
            },
              ...rest.sx
            }}
          >
            {children}
          </Link>
    )
}

export default WhiteButton