import { Stack, Typography, Container, Grid, Link } from "@mui/material"
import FeatureCard from "./feature-card"

const features = [
  {
    title: <>Low transaction fees<br />via Layer 2 architecture</>,
    svgPath: "/features/fees.svg"
  },
  {
    title: <>High throughput<br />and scalability</>,
    svgPath: "/features/throughput.svg"
  },
  {
    title: <>EVM-proof<br />compatibility</>,
    svgPath: "/features/evm.svg"
  },
  {
    title: <>Developer-first<br />tooling and SDKs</>,
    svgPath: "/features/sdk.svg"
  },
  {
    title: <>Modular smart<br />contract support</>,
    svgPath: "/features/contract.svg"
  },
  {
    title: <>Native token<br />utility and staking</>,
    svgPath: "/features/token.svg"
  },
]

export default function Features() {
  return (
    <Container maxWidth="lg" sx={{ mt: "4rem", overflowY: "hidden" }}>
      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        alignContent={{ xs: "center", md: "flex-start" }}
        justifyContent={{ xs: "center", md: "space-between" }}
        textAlign={{ xs: "center", md: "left" }}
      >
        <Stack
          direction={{ xs: "row", md: "column" }}
          spacing={{ xs: 1, md: 0 }} justifyContent="center"
          alignItems={{ xs: "center", md: "flex-start" }}
          sx={{
            marginBottom: { xs: "1rem", md: 0 },
            textAlign: { xs: "center", md: "left" }, lineHeight: 1,
          }}
        >
          <Typography variant="h1" component="h2" color="primary" marginBottom={0} sx={{ lineHeight: 1 }}>
            Colichain
          </Typography>
          <Typography variant="h1" component="h2" color="black" marginBottom={0} sx={{ lineHeight: 1 }}>
            Under the Hood
          </Typography>
        </Stack>

        <Stack>
          <Typography component="h3" variant="h6" color="grey.700"
            textAlign={{ xs: "center", md: "left" }}
            sx={{ mt: {xs: '1rem', md: "0"}, maxWidth: { xs: "sm", md: "700px" } }}
          >
            Colichain is a FinTech-native blockchain engineered for performance, security, and developer-first tooling—a
            foundation for the next generation of financial products.
          </Typography>

          <Stack sx={{ display: { xs: "none", md: "block" } }} mt="0.5rem">
            <Link href="#" color="primary"
              sx={{
                fontWeight: 400,
                fontSize: "1.5rem",
                lineHeight: "34px",
                letterSpacing: "0px",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Explore more technical insights
            </Link>
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <Grid container spacing={3} marginTop={4} marginBottom={2}>
          {features.map((feature, index) => (
            <Grid key={index} size={{ xs: 12, md: 6 }}>
              <FeatureCard
                title={feature.title}
                svgPath={feature.svgPath}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  )
}