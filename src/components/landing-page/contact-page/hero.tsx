import { Container, Stack, Typography } from "@mui/material"

export default function ContactHero() {
  return (
    <Container maxWidth="lg" sx={{ marginTop: "8rem", overflowY: "hidden" }}>
      <Stack
        flexDirection="column"
        alignContent="center"
        justifyContent="center"
        textAlign="center"
        marginBottom={2}
        width="100%"
      >
        <Typography variant="h1" component="h1" color="primary" textAlign="center">
          Get in touch with the team<br />
          behind Coliseum Blockchain
        </Typography>
        <Typography variant="h5" component="h2" color="grey.700" textAlign="center" sx={{ my: "3rem" }}>
          We’re building the infrastructure for the tokenized economy. Let’s talk.
        </Typography>
      </Stack>
    </Container>
  )
}