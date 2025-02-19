import React, { useRef, useEffect, useState } from 'react'
import { Stack, Typography, Box } from '@mui/material'
import { LoungeBarIcon } from '../../../../../shared/icons'

type Props = {
  title: string
  isActive?: boolean
  photo?: string
  align?: 'left' | 'right'
}

const ServiceContainer: React.FC<Props> = ({ photo, title, isActive, align }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isFullyVisible, setIsFullyVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setIsFullyVisible(true)
          } else if (entry.intersectionRatio <= 0.5) {
            setIsFullyVisible(false)
          }
        })
      },
      {
        threshold: [0.5, 0.5],
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  return (
    <Stack
      ref={containerRef}
      sx={{
        position: 'relative',
        width: { xs: '100%', sm: '100%', md: 'clamp(20rem, 50%, 50rem)' },
        overflow: 'visible',
        height: 'auto',
		mt: '2.5rem',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          width: { xs: '100%', md: '150%' }, 
          background: `url(${photo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: { xs: 'none', md: 'transform 0.5s ease-in-out' },
          zIndex: 0,
          ...(align === 'left'
            ? {
                transform: { xs: 'none', md: isFullyVisible ? 'translateX(-40%)' : 'translateX(32.5%)' },
              }
            : {
                transform: { xs: 'none', md: isFullyVisible ? 'translateX(40%)' : 'translateX(-32.5%)' },
                right: 0
              }),
        }}
      />
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'justify',
          color: 'white',
          p: 3,
          backgroundColor: 'rgba(0,0,0,0.4)',
          backdropFilter: 'blur(2px)',
          borderRadius: '4px',
		  ...(align === 'left'
			? {
				transform: {xs: 'none', md: 'translateX(100%)'},

			  } : {
				transform: {xs: 'none', md: 'translateX(-100%)'},
			  }),
			}
        }
      >
        <LoungeBarIcon sx={{ width: '2.5rem', height: 'auto', mb: 1 }} />
        <Typography fontSize={'1.5rem'} textTransform={'uppercase'} mb={1}>
          {title}
        </Typography>
        <Typography fontWeight={'regular'}>
          Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.
        </Typography>
      </Box>
    </Stack>
  )
}

export default ServiceContainer