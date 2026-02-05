"use client"

import type React from "react"
import { Card, CardContent, Typography, Stack, Link as MuiLink } from "@mui/material"
import GradientButton from "@/components/common/button"

interface InquiryCardProps {
  title: string
  subtitle: string
  description: string
  href?: string
}

export default function InquiryCard({ 
  title,
  subtitle,
  description,
  href
}: InquiryCardProps) {
  const buttonContent = (
    <GradientButton>
      Make an Inquiry
    </GradientButton>
  )

  return (
    <Card
      sx={{
        borderRadius: 2,
        width: "100%",
        boxShadow: "0px 2px 4px rgba(0,0,0,0.08), 0px 0px 6px rgba(0,0,0,0.03)",
      }}
    >
      <CardContent sx={{ p: 4, textAlign: "left" }}>
        <Stack spacing={1.5} alignItems="flex-start">
          <Typography variant="h5" component="h5" color="black" sx={{ marginBottom: "1rem !important" }}>
            {title}
          </Typography>
          <Typography variant="h6" color="grey.800">
            {subtitle}
          </Typography>
          <Typography variant="body2" color="grey.800" sx={{ marginBottom: "1rem !important" }}>
            {description}
          </Typography>

          {href ? (
            <MuiLink href={href} underline="none">
              {buttonContent}
            </MuiLink>
          ) : (
            buttonContent
          )}
        </Stack>
      </CardContent>
    </Card>
  )
}
