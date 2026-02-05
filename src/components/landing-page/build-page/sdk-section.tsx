"use client"

import { Box, Typography, Container, Stack, Grid } from "@mui/material"

export default function SdkSection() {
  const features = [
    { icon: "/icons/bolt.png",   text: "Built for performance" },
    { icon: "/icons/puzzle.png", text: "Modular architecture" },
    { icon: "/icons/laptop.png", text: "CLI & API-ready" },
  ]

  const stats = [
    { value: "80%", description: "Faster contract deployment" },
    { value: "70%", description: "Reduction in dev onboarding time" },
  ]

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          py: { xs: 3, sm: 3, md: 0 },
          px: { xs: 2, sm: 3, md: 0 },
          bgcolor: { xs: "common.white", sm: "common.white", md: "transparent" },
          borderRadius: { xs: 2, sm: 2, md: 0 },
          border: {
            xs: "1px solid",
            sm: "1px solid",
            md: "none",
          },
          borderColor: { xs: "grey.200", sm: "grey.200", md: "transparent" },
          boxShadow: {
            xs: "0px 2px 4px rgba(0,0,0,0.08), 0px 0px 6px rgba(0,0,0,0.03)",
            sm: "0px 2px 4px rgba(0,0,0,0.08), 0px 0px 6px rgba(0,0,0,0.03)",
            md: "none",
          },
        }}
      >
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="stretch">
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography
              component="h2"
              color="black"
              sx={{
                fontWeight: 600,
                fontSize: { xs: 24, md: 28 },
                lineHeight: 1.2,
                mb: { xs: 2, md: 3 },
              }}
            >
              Multiple language SDKs
            </Typography>

            <Typography
              variant="body1"
              color="grey.800"
              sx={{ mb: 1.5, maxWidth: { xs: "100%", md: 600 } }}
            >
              Build in the language you love — TypeScript, Python, Rust, Go, and more.
            </Typography>

            <Typography
              variant="body1"
              color="grey.800"
              sx={{ mb: 4, maxWidth: { xs: "100%", md: 600 } }}
            >
              Each SDK includes core network functions, smart contract deployment helpers, and
              utilities for interacting with the blockchain.
            </Typography>

            <Stack
              direction={{ xs: "column", lg: "row" }}
              gap={{ xs: 2, sm: 3 }}
              flexWrap="wrap"
              sx={{ mb: { xs: 4, md: 6 } }}
            >
              {features.map((f, i) => (
                <Stack key={i} direction="row" alignItems="center" gap={1.2} sx={{ minWidth: "fit-content" }}>
                  <Box component="img" src={f.icon} alt="" sx={{ width: 20, height: 20, flexShrink: 0 }} />
                  <Typography variant="body2" color="grey.800" sx={{ whiteSpace: "nowrap" }}>
                    {f.text}
                  </Typography>
                </Stack>
              ))}
            </Stack>

            {/* stats */}
            <Grid container spacing={{ xs: 3, md: 6 }}>
              {stats.map((s, i) => (
                <Grid key={i} size={6}>
                  <Box>
                    <Typography
                      component="div"
                      color="primary"
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: 44, sm: 56, md: 64 },
                        lineHeight: 1,
                        mb: 1,
                      }}
                    >
                      {s.value}
                    </Typography>
                    <Typography variant="body1" color="grey.800" sx={{ maxWidth: 240 }}>
                      {s.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Box
              sx={{
                width: "100%",
                height: { xs: 240, sm: 320, md: 460 },
                borderRadius: 3,
                bgcolor: {
                  xs: "#0000001C",
                  sm: "#0000001C",
                  md: "common.white",
                },
                border: "1px solid",
                borderColor: "grey.200",
                boxShadow: "0px 2px 4px rgba(0,0,0,0.08), 0px 0px 6px rgba(0,0,0,0.03)",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
