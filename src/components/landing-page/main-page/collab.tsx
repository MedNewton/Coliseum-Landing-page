import { Container, Stack, Typography } from "@mui/material"
import CollabLogos from "./collab-logos"

const sampleLogos = [
  { name: "Blockscout", path: "/collab/blockscout.svg" },
  { name: "Optimism", path: "/collab/op.svg" },
  { name: "Chainlink", path: "/collab/link.svg" },
  { name: "Mood Global Services", path: "/collab/mgs.svg" },
  { name: "Alchemy", path: "/collab/alchemy.svg" },
]

export default function Collab() {
  return (
    <Container maxWidth="lg" sx={{ marginTop: "8rem", overflowY: "hidden" }}>
      <Stack
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        width="100%"
        marginBottom={2}
      >
        <Typography variant="h1" component="h2" color="primary" marginBottom={4}>
          Built with the best
        </Typography>
        <Typography variant="h5" component="h2" color="grey.700" maxWidth="650px">
          Our ecosystem thrives through strategic partnerships with top-tier tech providers and innovators across Web3.
        </Typography>
        <CollabLogos logos={sampleLogos} />
      </Stack>
    </Container>
  )
}