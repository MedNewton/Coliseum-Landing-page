'use client'

import { useState } from "react"
import GradientButton from "@/components/common/button"
import { Box, Container, Divider, Stack, TextField, Typography } from "@mui/material"

interface FooterProps {
  hasCTA?: boolean
}

export default function Footer({ hasCTA = false }: FooterProps) {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitting(true)

    const formData = new FormData(event.currentTarget)
    formData.append("access_key", "8542d964-386c-4192-baf4-9705cfa1499e")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })

      const data = await response.json()
      if (data.success) {
        setSubmitted(true)
        event.currentTarget.reset()
      }
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        isolation: "isolate",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "140px",
          background: `linear-gradient(
            to bottom,
            #FAFAFA 0%,
            rgba(250,250,250,0.92) 12%,
            rgba(250,250,250,0.0) 45%
          )`,
          pointerEvents: "none",
          zIndex: 1,
        },

        "&::after": {
          content: '""',
          position: "absolute",
          left: "30%",
          bottom: hasCTA ? {xs: "-20%", md: "-140%" } : {xs: "-20%", md: "-280%" },
          transform: "translateX(-50%) rotate(164deg) scale(3.5)",
          width: "clamp(1200px, 160vw, 2200px)",
          aspectRatio: "16 / 11",
          backgroundImage: 'url("/gradient.png")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
          backgroundSize: "contain",
          opacity: 1,
          pointerEvents: "none",
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        {
          hasCTA &&
          <Stack alignItems="center" justifyContent="center" textAlign="center" width="100%" marginTop="8rem">
            <Typography variant="h1" component="h2" color="black" mb={4}>
              Ready to build<br />the future of finance?
            </Typography>
            <GradientButton href="https://sepolia.coliscan.com/" sx={{ mt: "0.5rem", height: "3.5625rem", maxWidth: "21rem", width: "100%" }}>
            Add colichain to your wallet 
            </GradientButton>
          </Stack>
        }
        <Box
          component="footer"
          maxWidth="lg"
          sx={{
            background: "#FFFFFF4D",
            border: "1px solid #FAFAFACF",
            borderRadius: 2, mb: "3rem", mt: "8rem",
            backdropFilter: "blur(93px)",
            py: 6, position: "relative", zIndex: 1, px: 3
          }}
        >
          <Container maxWidth="lg">
            <Stack spacing={4}>
              <Box sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                flexDirection: { xs: "column", md: "row" },
                gap: 4
              }}>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                  <Box
                    component="img"
                    src="/logo-footer.svg"
                    alt="Colosseum Logo"
                    sx={{ width: 60, height: 60 }}
                  />
                  <Typography variant="body2" color="#212121CC" sx={{ maxWidth: 280, lineHeight: 1.5 }}>
                    High-performance blockchain powering scalable, secure, and developer-first financial products.
                  </Typography>
                </Box>

                <Box
                  component="form"
                  onSubmit={onSubmit}
                  sx={{
                    display: "flex",
                    gap: 2,
                    flexDirection: { xs: "column", sm: "row" },
                    width: { xs: "100%", md: "auto" },
                  }}
                >
                  <TextField
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    size="small"
                    disabled={submitted}
                    sx={{
                      minWidth: { xs: "100%", sm: 250 },
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "white",
                        height: "3rem",
                        "& fieldset": {
                          borderColor: "#0000001A",
                        },
                        "&:hover fieldset": {
                          borderColor: "#00000033",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "primary.main",
                        },
                      },
                    }}
                  />
                  <GradientButton
                    type="submit"
                    disabled={submitting || submitted}
                    sx={{
                      height: "3rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {submitted ? "Thank you!" : submitting ? "Sending..." : "Subscribe"}
                  </GradientButton>
                </Box>
              </Box>

              <Divider sx={{ width: "100%", borderColor: "#0000001A", borderBottomWidth: "1px" }}/>

              <Typography variant="body2" color="#212121CC" sx={{ textAlign: "center" }}>
                © 2026 Coliseum Foundation. All rights reserved.
              </Typography>
            </Stack>
          </Container>
        </Box>
      </Container>
    </Box>
  )
}
