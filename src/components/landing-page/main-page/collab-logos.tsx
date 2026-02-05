"use client"

import type React from "react"
import { Box, Grid } from "@mui/material"
import { styled } from "@mui/material/styles"

interface Logo {
  name: string
  path: string
}

interface LogoGridProps {
  logos: Logo[]
}

const LogoContainer = styled(Box)(() => ({
  padding: "1rem 2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.3s ease",
  cursor: "pointer",
  "& img": {
    maxWidth: "100%",
    maxHeight: "100px",
    filter: "grayscale(100%) opacity(0.6)",
    transition: "filter 0.3s ease",
  },
  "&:hover img": {
    filter: "grayscale(0%) opacity(1)",
  },
}))

export default function CollabLogos({ logos }: LogoGridProps) {
  const firstRowLogos = logos.slice(0, 3)
  const secondRowLogos = logos.slice(3, 5)

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Grid container spacing={1.25} sx={{ justifyContent: "center", maxWidth: "fit-content" }}>
        {firstRowLogos.map((logo, index) => (
          <Grid key={index}>
            <LogoContainer>
              <img src={logo.path || "/placeholder.svg"} alt={logo.name} title={logo.name}/>
            </LogoContainer>
          </Grid>
        ))}
      </Grid>

      {secondRowLogos.length > 0 && (
        <Grid container spacing={1.25} sx={{ justifyContent: "center", maxWidth: "fit-content", mt: 1.25 }}>
          {secondRowLogos.map((logo, index) => (
            <Grid key={index + 3}>
              <LogoContainer>
                <img src={logo.path || "/placeholder.svg"} alt={logo.name} title={logo.name}/>
              </LogoContainer>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  )
}
