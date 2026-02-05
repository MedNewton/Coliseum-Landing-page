"use client"

import type React from "react"
import { Card, CardContent, Typography, IconButton, Box, Link } from "@mui/material"
import { ArrowForward } from "@mui/icons-material"
import { styled } from "@mui/material/styles"

interface FeatureCardProps {
  title: React.ReactNode
  svgPath: string
}

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
  boxShadow: "0px 2px 4px 0px #00000014, 0px 0px 6px 0px #00000005",
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
  display: "flex",
  flexDirection: "column",

  "& .svg-container": {
    opacity: 0.5,
    transition: "opacity 0.3s ease-in-out",
  },

  "& .arrow-button": {
    color: theme.palette.grey[600],
    borderColor: theme.palette.grey[600],
    transition: "color 0.3s ease-in-out, border-color 0.3s ease-in-out",
  },

  "&:hover": {
    "& .svg-container": {
      opacity: 1,
    },
    "& .arrow-button": {
      color: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
    },
  },
}))

const SVGContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "1rem",
  height: "253px",
})

export default function FeatureCard({ title, svgPath }: FeatureCardProps) {
  return (
    <StyledCard>
      <SVGContainer className="svg-container">
        <img
          src={svgPath || "/placeholder.svg"}
          alt=""
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
          }}
        />
      </SVGContainer>

      <CardContent sx={{ padding: 0, "&:last-child": { paddingBottom: 0 } }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography
            variant="h5"
            component="h3"
            sx={{
              fontWeight: 400,
              lineHeight: 1.3,
              flex: 1,
              marginRight: 2,
            }}
          >
            {title}
          </Typography>

          <Link href="/product" sx={{ display: "flex" }}>
            <IconButton
              className="arrow-button"
              sx={{
                border: "1px solid",
                height: "2.5rem",
                width: "5rem",
                borderRadius: 1,
                flexShrink: 0,
              }}
            >
              <ArrowForward />
            </IconButton>
          </Link>
        </Box>
      </CardContent>
    </StyledCard>
  )
}
