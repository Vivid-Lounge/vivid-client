"use client"

import type React from "react"
import { useState, useEffect } from "react"
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Box,
  useScrollTrigger,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import { HashLink as Link } from "react-router-hash-link"
import { useLocation } from "react-router-dom"
import { ArrowIcon, VividLogoIcon } from "../../../shared/icons"
import { motion } from "framer-motion"

const NavBar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const location = useLocation()
  const [notHome, setNotHome] = useState(location.pathname !== "/")
  const currentHash = location.hash
  const [activeHash, setActiveHash] = useState("")

  useEffect(() => {
    setNotHome(location.pathname !== "/")
  }, [location.pathname])

  useEffect(() => {
    setActiveHash(location.hash)
  }, [location.hash])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const [menuItems] = useState<{ text: string; link: string }[]>([
    { text: "Home", link: "/#home" },
    { text: "About Us", link: "/#about" },
    { text: "Events", link: "/#events" },
    { text: "Contact", link: "/#contact" },
  ])

  const menuItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.11,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })

  const hideOnScroll = useScrollTrigger({
    threshold: 0,
  })

  const drawer = (
	
    <Box
      sx={{
        width: "100%",
        height: "100%",
        // backgroundColor: "rgba(0, 0, 0, 0.9)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
		'&::before': {
			content: '" "',
			width: '100%',
			height: '100%',
			position: 'absolute',
			right: '0',
			top: '0',
			backdropFilter: 'blur(20px)',
			background: 'rgba(0,0,0,0.5)',
		}
      }}
    >
      <IconButton
        sx={{
          color: "white",
          position: "absolute",
          right: 16,
          top: 16,
        }}
        onClick={handleDrawerToggle}
      >
        <CloseIcon />
      </IconButton>
      <List>
        {menuItems.map((item, index) => (
          <motion.div key={item.text} variants={menuItemVariants} initial="hidden" animate="visible" custom={index}>
            <ListItem
              component={Link}
              to={item.link}
              smooth
              onClick={handleDrawerToggle}
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <ListItemText
                primary={item.text}
                sx={{
                  color: currentHash === item.link.split("/")[1] ? "pink" : "white",
                  textTransform: "uppercase",
                  textAlign: "center",
                  "& .MuiTypography-root": {
                    fontWeight: "bold",
                  },
                }}
              />
            </ListItem>
          </motion.div>
        ))}
      </List>
    </Box>
  )

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.2,
      }}
    >
      <AppBar
        position="fixed"
        sx={{
          zIndex: 1200,
          background: trigger ? "rgba(255,255,255,0.01)" : "transparent",
        //   backdropFilter: trigger ? "blur(20px)" : "none",
          boxShadow: trigger ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "none",
          transition: "all 0.3s ease",
          py: "0.5rem",
          transform: hideOnScroll ? "translateY(-100%)" : "translateY(0)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {notHome && (
            <Link smooth to="/#home" style={{ color: "white" }}>
              <ArrowIcon
                sx={{
                  fill: "white",
                  height: "25px",
                  width: "25px",
                  transform: "rotate(90deg)",
                  cursor: "pointer",
                  "&:hover": {
                    opacity: 0.8,
                  },
                }}
              />
            </Link>
          )}
          <Link smooth to="/#home">
            <VividLogoIcon
              sx={{
                fill: "white",
                width: "100px",
                height: "auto",
              }}
            />
          </Link>
          {isMobile ? (
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", gap: "16px" }}>
              {!notHome &&
                menuItems.map((item, index) => (
                  <motion.div
                    key={item.text}
                    variants={menuItemVariants}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                  >
                    <Link
                      smooth
                      to={item.link}
                      style={{
                        letterSpacing: ".5px",
                        color: activeHash === item.link.split("/")[1] ? "pink" : "white",
                        textDecoration: "none",
                        textTransform: "uppercase",
                      }}
                    >
                      <motion.span
                        whileHover={{
                          scale: 1.1,
                          textShadow: "0 0 8px rgba(255, 255, 255, 0.5)",
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.text}
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: false,
        }}
        sx={{
          "& .MuiDrawer-paper": {
            width: "50%",
            height: "100%",
            backgroundColor: "transparent",
            boxSizing: "border-box",
          },
        }}
      >
        {drawer}
      </Drawer>
    </motion.div>
  )
}

export default NavBar

