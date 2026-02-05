import type React from "react"
import { Card, CardContent, Avatar, Typography, Box, Link } from "@mui/material"
import Image from "next/image"

interface TestimonialCardProps {
  avatar: string
  name: string
  tagline: string
  linkedinUrl: string
  testimonialText: string
  date: string
}

export default function TestimonialCard({
  avatar,
  name,
  tagline,
  linkedinUrl,
  testimonialText,
  date,
}: TestimonialCardProps) {
  return (
    <Card
      sx={{
        width: "100%",
        p: "1.25rem",
        borderRadius: 1,
        boxShadow: "0px 2px 4px 0px #00000014, 0px 0px 6px 0px #00000005",
        position: "relative",
        backgroundColor: "#ffffff",
      }}
    >
    <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
      <Image
        src="/icons/quote.svg"
        alt="Quote Icon"
        width={48}
        height={48}
      />
    </Box>


      <CardContent sx={{ p: 0, paddingBottom: "0 !important", textAlign: "left" }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <Avatar
            src={avatar}
            alt={name}
            sx={{
              width: 40,
              height: 40,
              mr: 2,
              borderRadius: "0.5rem"
            }}
          />
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" component="h3" color="black" sx={{ mb: 0.5 }}>
              {name}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="body2" color="grey.700" sx={{ mx: 0.5 }}>{tagline} | </Typography>
              <Link
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="body2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "grey.700",
                  "&:hover": {
                    color: "#0077b5",
                  },
                }}
              >
                LinkedIn
              </Link>
            </Box>
          </Box>
        </Box>
        <Typography variant="body1" component="p" color="black" sx={{ mb: 3 }}>
          {testimonialText}
        </Typography>
        <Typography variant="body2" color="grey.700">{date}</Typography>
      </CardContent>
    </Card>
  )
}