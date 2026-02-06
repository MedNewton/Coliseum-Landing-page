"use client"

import { Box, Card, CardContent, Container, Stack, Typography } from "@mui/material"
import { styled, keyframes } from "@mui/material/styles"
import GradientButton from "@/components/common/button"

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0px); }
`

const StyledCard = styled(Card)(() => ({
  width: "100%",
  boxShadow: "0px 2px 4px 0px #00000014, 0px 0px 6px 0px #00000005",
}))

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
        <Typography variant="h1" component="h2" color="black" marginBottom={4}>
          The Coliseum Marketplace
        </Typography>

        <StyledCard>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              p: { xs: 4, md: 6 },
              "&:last-child": { pb: { xs: 4, md: 6 } },
            }}
          >
            <Stack
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="center"
              textAlign="left"
              flex={1}
              sx={{ pr: { md: 6 }, mb: { xs: 4, md: 0 } }}
            >
              <Typography
                variant="h3"
                component="h3"
                sx={{ fontWeight: 600, lineHeight: 1.3, mb: 2 }}
              >
                Trade, Discover & Collect Digital Assets
              </Typography>
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

            <Box
              sx={{
                flex: 1,
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
          </CardContent>
        </StyledCard>
      </Stack>
    </Container>
  )
}
