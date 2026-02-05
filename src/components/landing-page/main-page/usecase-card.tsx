"use client"

import type React from "react"
import { Card, CardContent, Typography, Box } from "@mui/material"
import { styled } from "@mui/material/styles"

interface HoverCardProps {
  videoPath: string
  title: React.ReactNode
  description: string
  height?: string | number
}

const StyledCard = styled(Card)(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
  position: "relative",
  overflow: "hidden",
  "&:hover": {
    "& .description": {
      opacity: 1,
      visibility: "visible",
    },
  },
}))

const VideoContainer = styled(Box)({
  opacity: 1,
  transition: "opacity 0.3s ease-in-out",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
  "& video": {
    width: "100%",
    height: "100%",
    display: "block",
    objectFit: "cover",
    transform: "translateZ(0)",
    clipPath: "inset(0 2px)",
  }
})

export default function UseCaseCard({ videoPath, title, description, height = "100%" }: HoverCardProps) {
  return (
    <StyledCard
      sx={{
        height: height,
        boxShadow: "0px 2px 4px 0px #00000014, 0px 0px 6px 0px #00000005",
      }}
    >
      <CardContent sx={{ display: "flex", flexDirection: "column", height: "100%", p: 3, alignItems: "space-between" }}>
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontWeight: 400,
            lineHeight: 1.3,
            flex: 1,
            marginRight: 2,
            textAlign: "left",
          }}
        >
          {title}
        </Typography>

        <VideoContainer className="video-container" marginTop={2}>
          <video src={videoPath} autoPlay loop muted playsInline style={{ display: "block" }}>
            Your browser does not support the video tag.
          </video>
        </VideoContainer>

        <Typography
          className="description"
          component="h3"
          variant="h6"
          color="grey.700"
          sx={{
            mt: 2,
            opacity: 0,
            visibility: "hidden",
            textAlign: "left",
            transition: "all 0.3s ease-in-out",
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </StyledCard>
  )
}
