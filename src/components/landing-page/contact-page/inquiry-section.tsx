import { Container, Stack } from "@mui/material"
import InquiryCard from "./inquiry-card"

export default function InquirySection() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, overflowY: "hidden" }}>
      <Stack
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        marginBottom={2}
      >
        <Stack flexDirection={{ xs: "column", md: "row" }} alignItems="center" justifyContent="center" gap={3} width="100%">
          <InquiryCard
            title="Technical Support & Developer Questions"
            subtitle="Running into issues or need help building on Coliseum?"
            description="We’re here to support your dev journey with docs"
            href="/contact/technical"
          />
          <InquiryCard
            title="Partnerships & Integrations"
            subtitle="Want to integrate Coliseum into your dApp or exchange?"
            description="Let’s explore how we can collaborate"
            href="/contact/partnership"
          />
        </Stack>
      </Stack>
    </Container>
  )
}