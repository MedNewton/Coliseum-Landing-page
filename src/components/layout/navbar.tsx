"use client"

import { useEffect, useState } from "react"
import {
  AppBar, Toolbar, Box, Link, Button, IconButton, Stack, List,
  ListItem, ListItemText, Divider, Typography, ListItemSecondaryAction,
} from "@mui/material"
import { Menu, Close, ArrowForward } from "@mui/icons-material"
import { motion, AnimatePresence } from "framer-motion"
import GradientButton from "@/components/common/button"
import SocialBar from "./social-bar"

const links = [
  { name: "Product", href: "/product" },
  { name: "Build", href: "/build" },
  { name: "Statistics", href: "/stats" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(v => !v)

  useEffect(() => {
    const prev = document.body.style.overflow
    if (isMenuOpen) document.body.style.overflow = "hidden"
    else document.body.style.overflow = prev || ""
    return () => { document.body.style.overflow = prev || "" }
  }, [isMenuOpen])

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "1200px",
          background: "#F3F3F3",
          borderRadius: "0 0 20px 20px",
          borderBottom: "1px solid",
          borderColor: "grey.300",
          zIndex: 1300,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: "0.5rem 1.5rem",
          }}
        >
          <Link href="/" sx={{ display: "flex" }}>
            <Box
              component="img"
              src="/coliseum-logo-orange.svg"
              alt="Coliseum Logo"
              sx={{
                height: 51.38,
                width: 53,
                borderRadius: "50%",
                objectFit: "cover",
                cursor: "pointer",
              }}
            />
          </Link>

          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: "3rem" }}>
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                sx={{
                  color: "grey.800",
                  fontWeight: 400,
                  fontSize: "1rem",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                  "&:hover": { color: "#000" },
                }}
              >
                {link.name}
              </Link>
            ))}
          </Box>

          <Stack direction="row" justifyContent="center" alignItems="center" gap={2}>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <GradientButton href="http://coliseum-marketplace.vercel.app/">Try Now</GradientButton>
            </Box>

            <IconButton
              onClick={toggleMenu}
              sx={{
                display: { xs: "inline-flex", md: "none" },
                width: 40,
                height: 40,
                color: "#F8601F",
                borderRadius: 1,
                backgroundColor: "white",
                boxShadow: `
                  0px 2px 1px -1px #00000033,
                  0px 1px 1px 0px #00000024,
                  0px 1px 3px 0px #0000001F
                `,
                "&:hover": { backgroundColor: "rgba(248, 96, 31, 0.04)" },
              }}
            >
              <motion.div
                style={{ display: "inline-flex", justifyContent: "center", alignItems: "center", transformOrigin: "center" }}
                initial={false}
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <Close /> : <Menu />}
              </motion.div>
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            style={{
              position: "fixed",
              inset: 0,
              height: "100dvh",
              width: "100%",
              backgroundColor: "#FAFAFA",
              zIndex: 1200,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              paddingTop: 60,
              overscrollBehavior: "contain",
              touchAction: "none",
            }}
          >
            <Box
              sx={{
                flex: "1 0 auto",
                px: 3,
                py: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                overflow: "hidden",
                gap: 1,
              }}
            >
              <List sx={{ p: 0, m: 0 }}>
                {links.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 + 0.08 }}
                  >
                    <ListItem
                      component={Link}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      sx={{
                        px: 0,
                        py: 2.25, // tighter
                        cursor: "pointer",
                        textDecoration: "none",
                        "&:hover": { bgcolor: "rgba(0, 0, 0, 0.04)" },
                      }}
                    >
                      <ListItemText
                        primary={
                          <Typography
                            variant="h4"
                            sx={{
                              fontSize: "1.35rem",
                              fontWeight: 400,
                              color: "text.primary",
                              fontFamily: "Host Grotesk",
                            }}
                          >
                            {link.name}
                          </Typography>
                        }
                      />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" sx={{ color: "#F8601F" }}>
                          <ArrowForward />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                    {index < links.length - 1 && <Divider sx={{ bgcolor: "grey.300" }} />}
                  </motion.div>
                ))}
              </List>

              <Box sx={{ mt: "auto" }}>
                <Button
                  href="https://coliseum-marketplace-live.vercel.app/"
                  variant="contained"
                  fullWidth
                  sx={{
                    py: 1.6,
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    borderRadius: 1,
                    height: 48,
                    background: "linear-gradient(102.22deg, #FF530A 8.04%, #FFAB00 91.59%)",
                    boxShadow: "0 3px 5px 2px rgba(255, 107, 53, .3)",
                    "&:hover": {
                      background: "linear-gradient(45deg, #e55a2b 30%, #ff9800 90%)",
                    },
                  }}
                >
                  Try Now
                </Button>

                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => setIsMenuOpen(false)}
                  sx={{
                    mt: 1,
                    py: 1.6,
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    borderRadius: 1,
                    borderColor: "#F8601F",
                    color: "#F8601F",
                    height: 48,
                    bgcolor: "#FFFFFFCC",
                    "&:hover": { bgcolor: "rgba(248, 96, 31, 0.04)", borderColor: "#F8601F" },
                  }}
                >
                  Close
                </Button>
              </Box>
            </Box>
            <Box sx={{ width: "100%", borderTop: "1px solid", borderColor: "grey.200", bgcolor: "#FAFAFA" }}>
              <SocialBar />
              <Box sx={{ pb: "env(safe-area-inset-bottom)" }} />
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
