import React from "react";
import { Link, LinkProps } from "@mui/material";

interface Props extends LinkProps {
    children: React.ReactNode
}

const GradientButton: React.FC<Props> = ({children, ...rest}) => {
    return (
        <Link
          {...rest}
            sx={{
              background: 'linear-gradient(90deg, #240c15 0%, #852845 50%, #5f223b 80%)',
              padding: '12px 24px',
              color: 'white',
              borderRadius: '20px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              cursor: 'pointer',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: '1',
              // transition: 'all 0.2s ease-in-out',
              '&:after': {
                content: '" "',
                width: '0%',
                height: '0%',
                display: 'flex',
                position: 'absolute',
                background: '#852845',
                bottom: '0',
                left: '0',
                borderRadius: '20px',
                zIndex: '-1',
                transition: 'all 0.1s ease-in-out'
              },
              '&:hover': {
                '&:after': {
                  width: '100%',
                  height: '100%',
                }
              },
              ...rest.sx
            }}
          >
            {children}
          </Link>
    )
}

export default GradientButton