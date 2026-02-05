"use client"
import { useState } from "react"
import { Card, Typography, Button, Box, useTheme, Modal, IconButton } from "@mui/material"
import { ArrowForward, Close } from "@mui/icons-material"

interface FeatureCardProps {
  title: string
  description: string
  detail: string
  ctaText: string
  svgPath: string
  onClick?: () => void
}

export default function ProductFeatureCard({ title, detail, description, ctaText, svgPath, onClick }: FeatureCardProps) {
  const theme = useTheme()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCardClick = () => {
    setIsModalOpen(true)
    onClick?.()
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Card
        onClick={handleCardClick}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "stretch", md: "stretch" },
          justifyContent: "space-between",
          gap: { xs: 2.5, md: 4 },
          p: { xs: 1.5, sm: 2, md: 3 },
          cursor: "pointer",
          transition: "all 0.3s ease-in-out",
          borderRadius: 1,
          boxShadow: "0px 2px 4px 0px #00000014, 0px 0px 6px 0px #00000005",
          width: '100%',
          "&:hover": {
            "& .feature-svg": { opacity: 1 },
            "& .cta-button": {
              borderColor: theme.palette.primary.main,
              "& .arrow-icon": { color: theme.palette.primary.main },
            },
          },
        }}
      >
        <Box
          sx={{
            flex: { md: "0 0 300px" },
            alignSelf: { xs: "center", md: "stretch" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "70%",
            mr: { md: 2 },
          }}
        >
          <Box
            component="img"
            src={svgPath}
            alt={`${title} illustration`}
            className="feature-svg"
            sx={{
              width: "auto",
              height: "auto",
              objectFit: "contain",
              opacity: 0.6,
              transition: "opacity 0.3s ease-in-out",
            }}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            textAlign: "left",
            gap: 2,
          }}
        >
          <Box>
            <Typography
              component="h3"
              color="black"
              sx={{
                mb: 1,
                fontWeight: 600,
                fontSize: { xs: "1.25rem", sm: "1.375rem", md: "1.5rem" },
                lineHeight: 1.25,
                maxWidth: { xs: "100%", md: 400 },
              }}
            >
              {title}
            </Typography>

            <Typography
              sx={{
                color: "grey.800",
                lineHeight: 1.6,
                fontSize: { xs: "0.95rem", md: "1rem" },
                maxWidth: { xs: "100%", md: 400 },
              }}
            >
              {description}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "#00000099",
                flex: 1,
                maxWidth: { xs: "100%", md: 400 },
              }}
            >
              {ctaText}
            </Typography>

            <Button
              className="cta-button"
              variant="outlined"
              sx={{
                minWidth: 48,
                width: 48,
                height: 48,
                borderRadius: 1,
                borderColor: "grey.600",
                transition: "all 0.3s ease-in-out",
                "&:hover": { backgroundColor: "transparent" },
                flexShrink: 0,
              }}
            >
              <ArrowForward
                className="arrow-icon"
                sx={{ color: "grey.600", transition: "color 0.3s ease-in-out" }}
              />
            </Button>
          </Box>
        </Box>
      </Card>
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Box
          sx={{
            position: "relative",
            backgroundColor: "white",
            borderRadius: 2,
            boxShadow: 24,
            p: { xs: 3, sm: 4, md: 6 },
            maxWidth: { xs: "90vw", sm: "80vw", md: "70vw", lg: "60vw" },
            maxHeight: "90vh",
            overflow: "auto",
            outline: "none",
          }}
        >
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              color: "grey.600",
              "&:hover": {
                backgroundColor: "grey.100",
              },
            }}
          >
            <Close />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
              }}
            >
              <Box
                component="img"
                src={svgPath}
                alt={`${title} illustration`}
                sx={{
                  width: "auto",
                  height: "auto",
                  maxWidth: { xs: "250px", sm: "300px", md: "350px" },
                  objectFit: "contain",
                }}
              />
            </Box>
            <Typography
              component="h2"
              sx={{
                fontWeight: 600,
                fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
                lineHeight: 1.25,
                color: "black",
                maxWidth: "100%",
              }}
            >
              {title}
            </Typography>
            <Typography
              component="h5"
              sx={{
                color: "grey.800",
                lineHeight: 1.6,
                fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
                fontWeight: 400,
                maxWidth: "100%",
              }}
            >
              {detail}
            </Typography>
          </Box>
        </Box>
      </Modal>
    </>
  )
}
