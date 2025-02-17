import React from "react"
import { Link, LinkProps } from "@mui/material"

interface Props extends LinkProps {
  children: React.ReactNode
}

const GradientButton: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <Link
      {...rest}
      sx={{
        background: 'linear-gradient(90deg, #240c15 0%, #852845 50%, #5f223b 80%)',
        backgroundSize: '200% 200%',
        animation: 'gradientAnimation 4s ease infinite',
        padding: '12px 26px',
        color: 'white',
        borderRadius: '20px',
        textTransform: 'uppercase',
        textDecoration: 'none',
        cursor: 'pointer',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'scale(1.01)',
          boxShadow: '0 4px 15px rgba(133, 40, 69, 0.5)'
        },
        '&:after': {
          content: '""',
          width: '0%',
          height: '0%',
          position: 'absolute',
          background: '#852845',
          bottom: 0,
          left: 0,
          borderRadius: '20px',
          zIndex: -1,
          // transition: 'all 0.1s ease-in-out'
        },
        '&:hover:after': {
          width: '100%',
          height: '100%'
        },
        '@keyframes gradientAnimation': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        },
        ...rest.sx
      }}
    >
      {children}
    </Link>
  )
}

export default GradientButton