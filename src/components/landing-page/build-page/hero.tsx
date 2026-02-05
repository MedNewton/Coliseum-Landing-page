import { Container, Stack, Typography } from "@mui/material"

export default function BuildHero() {
  return (
    <Container maxWidth="lg" sx={{ marginTop: "8rem", overflowY: "hidden" }}>
      <Stack
        flexDirection="column"
        alignContent="center"
        justifyContent="center"
        textAlign="center"
        marginBottom={2}
      >
        <Typography variant="h1" component="h1" color="primary" textAlign={{ xs: "center", md: "left" }}>
          Build with confidence on Coliseum
        </Typography>
        <Typography variant="h5" component="h2" maxWidth="sm" color="grey.700" textAlign={{ xs: "center", md: "left" }} sx={{ my: "3rem" }}>
          Access essential developer tools, SDKs, APIs, and documentation — everything you need to start building scalable and secure Web3 applications on Coliseum.
        </Typography>
      </Stack>
    </Container>
  )
}