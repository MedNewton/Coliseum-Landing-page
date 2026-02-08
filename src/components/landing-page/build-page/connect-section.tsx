import { Container, Divider, Stack } from "@mui/material"
import WalletCard from "./wallet-card"

export default function ConnectSection() {
  return (
    <Container maxWidth="lg" sx={{ overflowY: "hidden" }}>
      <Stack
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        marginBottom={2}
      >
        <Divider sx={{ width: "100%", borderColor: "#BDBDBD", borderBottomWidth: "1px", my: 12 }}/>
        <Stack flexDirection={{ xs: "column", md: "row" }} alignItems="center" justifyContent="center" gap={3} width="100%">
          <WalletCard svgPath="/icons/rabbit.svg" title="Add Colichain to your wallet Rabbit" href="https://sepolia.coliscan.com/" />
        </Stack>
      </Stack>
    </Container>
  )
}