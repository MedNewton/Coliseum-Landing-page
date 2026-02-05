import { Stack, Typography, Container } from "@mui/material"
import IconWall from "@/components/landing-page/main-page/icon-wall";

const row1 = Array.from({length:12}, (_,i)=>`/icons/wall/${i+1}.svg`)
const row2 = Array.from({length:12}, (_,i)=>`/icons/wall/${i+13}.svg`)
const row3 = Array.from({length:12}, (_,i)=>`/icons/wall/${i+25}.svg`)
const row4 = Array.from({length:12}, (_,i)=>`/icons/wall/${i+37}.svg`)

export default function Hero() {
  return (
    <Container maxWidth="lg">
      <Stack alignItems="center" justifyContent="center" mt="8rem">
      <Typography component="h1" gutterBottom textAlign="center">
        <Typography component="span" color="primary"
          sx={{
            fontSize: { xs: "2.25rem", sm: "2.5rem", md: "3.5rem" },
            fontWeight: 600, display: "inline-block", lineHeight: {xs: "110%", md: "90%"}, mb: {xs: "0.25rem", md: "0"}
          }}
        >
          Coliseum Blockchain
        </Typography>
        <br />
        <Typography
          component="span"
          sx={{
            fontSize: { xs: "1.75rem", sm: "2rem", md: "3.5rem" },
            fontWeight: 500, display: "inline-block", lineHeight: {xs: "110%", md: "90%"}
          }}
        >
          L2 Infrastructure for the
          <br />
          Real-World Token Economy
        </Typography>
      </Typography>
        <Typography
          component="h2"
          maxWidth="sm"
          textAlign="center"
          color='grey.700'
          sx={{
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
            fontWeight: 400, display: "inline-block", mt: '1rem'
          }}
        >
          Layer 2 blockchain designed for tokenized real-world assets, frictionless DeFi, and developer-first scalability.
        </Typography>
        <IconWall rows={[row1, row2, row3, row4]} centerSvgSrc="/icons/wall/center-tile.svg" centerSvgAlt="Coliseum Logo"/>
      </Stack>
    </Container>
  )
}