import { Container, Stack, Typography } from "@mui/material"
import InquiryForm from "@/components/landing-page/contact-page/inquiry-form-technical"
import Footer from "@/components/common/footer"

export default function Page() {
  return (
    <>
    <Container maxWidth="lg" sx={{ marginTop: "8rem", overflowY: "hidden" }}>
      <Stack
        flexDirection={{xs: "column", md: "row" }}
        alignContent="center"
        justifyContent="center"
        textAlign="center"
        marginBottom={2}
      >
        <Stack flexDirection="column" alignContent="center" justifyContent="flex-start" textAlign="center">
          <Typography variant="h1" component="h1" color="primary" textAlign={{ xs: "center", md: "left" }} sx={{lineHeight: "110%"}}>
            Technical Support & Developer Questions
          </Typography>
          <Typography variant="h5" component="h2" maxWidth="sm" color="grey.700" textAlign={{ xs: "center", md: "left" }} sx={{ my: "3rem" }}>
            We’re here to support your development. Whether you’re integrating our SDK, deploying contracts, or running into a bug — our team is ready to assist.
          </Typography>
        </Stack>
        <InquiryForm />
      </Stack>
    </Container>
    <Footer />
    </>
  )
}
