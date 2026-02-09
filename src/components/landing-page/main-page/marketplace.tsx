"use client"

import { Box, Card, CardContent, Container, Stack, Typography } from "@mui/material"
import { styled, keyframes } from "@mui/material/styles"
import GradientButton from "@/components/common/button"

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0px); }
`

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`

const StyledCard = styled(Card)(() => ({
  width: "100%",
  boxShadow: "0px 2px 4px 0px #00000014, 0px 0px 6px 0px #00000005",
}))

const assetClasses = [
  "Gold",
  "Rally Cars",
  "Ferrari",
  "Fine Art",
  "Watches",
  "Motors",
]

export default function Marketplace() {
  return (
    <Container maxWidth="lg" sx={{ marginTop: "8rem", overflowY: "hidden" }}>
      <Stack
        flexDirection="column"
        alignContent="center"
        justifyContent="center"
        textAlign="center"
        marginBottom={2}
      >
        <Typography variant="h1" component="h2" color="black" marginBottom={4} px={6}>
          The Coliseum Marketplace
        </Typography>

        {/* Asset Classes Scrolling Section */}
        <Box
          sx={{
            position: "relative",
            mb: 6,
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: 100,
              background: "linear-gradient(to right, #FAFAFA, transparent)",
              zIndex: 2,
              pointerEvents: "none",
            },
            "&::after": {
              content: '""',
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: 100,
              background: "linear-gradient(to left, #FAFAFA, transparent)",
              zIndex: 2,
              pointerEvents: "none",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 3,
              animation: `${scroll} 35s linear infinite`,
              width: "max-content",
              py: 2,
              "&:hover": {
                animationPlayState: "paused",
              },
            }}
          >
            {/* Duplicate the array for seamless infinite scroll */}
            {[...assetClasses, ...assetClasses, ...assetClasses].map((assetClass, index) => (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  px: 5,
                  py: 2.5,
                  borderRadius: "16px",
                  background: "linear-gradient(145deg, #FFFFFF 0%, #FAFAFA 100%)",
                  border: "1px solid",
                  borderColor: "rgba(0, 0, 0, 0.06)",
                  boxShadow: `
                    0px 1px 2px rgba(0, 0, 0, 0.04),
                    0px 4px 8px rgba(0, 0, 0, 0.06),
                    inset 0px 1px 0px rgba(255, 255, 255, 0.8)
                  `,
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: "16px",
                    padding: "1px",
                    background: "linear-gradient(145deg, rgba(255,255,255,0.8), rgba(255,255,255,0.1))",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    opacity: 0,
                    transition: "opacity 0.4s ease",
                  },
                  "&:hover": {
                    transform: "translateY(-4px) scale(1.02)",
                    borderColor: "rgba(0, 0, 0, 0.08)",
                    boxShadow: `
                      0px 2px 4px rgba(0, 0, 0, 0.06),
                      0px 8px 16px rgba(0, 0, 0, 0.1),
                      0px 16px 32px rgba(0, 0, 0, 0.08),
                      inset 0px 1px 0px rgba(255, 255, 255, 1)
                    `,
                    "&::before": {
                      opacity: 1,
                    },
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    color: "#1a1a1a",
                    letterSpacing: "-0.01em",
                    background: "linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {assetClass}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <StyledCard>
          <CardContent
            sx={{
              p: { xs: 4, md: 6 },
              "&:last-child": { pb: { xs: 4, md: 6 } },
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gridTemplateAreas: {
                  xs: `"title" "image" "content"`,
                  md: `"title image" "content image"`,
                },
                alignItems: "center",
                gap: { xs: 4, md: 6 },
              }}
            >
              <Typography
                variant="h3"
                component="h3"
                sx={{
                  gridArea: "title",
                  fontWeight: 600,
                  lineHeight: 1.3,
                  mb: { xs: 0, md: 2 },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Trade, Discover & Collect Digital Assets
              </Typography>

              <Box
                sx={{
                  gridArea: "image",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src="/marketplace.png"
                  alt="Coliseum Marketplace"
                  sx={{
                    maxWidth: "100%",
                    height: "auto",
                    maxHeight: 400,
                    borderRadius: "12px",
                    animation: `${float} 5s ease-in-out infinite`,
                  }}
                />
              </Box>

              <Stack
                sx={{ gridArea: "content" }}
                flexDirection="column"
                alignItems={{ xs: "center", md: "flex-start" }}
                justifyContent="center"
                textAlign={{ xs: "center", md: "left" }}
              >
                <Typography
                  variant="h6"
                  component="p"
                  color="grey.700"
                  sx={{ fontWeight: 400, lineHeight: 1.6, mb: 4 }}
                >
                  Explore a decentralized marketplace for NFTs, tokenized real-world assets, and digital collectibles — all powered by the Coliseum blockchain with low fees and instant settlement.
                </Typography>
                <GradientButton
                  href="https://coliseum-marketplace-live.vercel.app/"
                  sx={{ height: "3.5625rem", px: 4 }}
                >
                  Visit Marketplace
                </GradientButton>
              </Stack>
            </Box>
          </CardContent>
        </StyledCard>
      </Stack>
    </Container>
  )
}
