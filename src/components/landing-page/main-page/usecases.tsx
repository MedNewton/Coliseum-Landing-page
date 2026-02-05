import { Container, Grid, Stack, Typography } from "@mui/material"
import UseCaseCard from "./usecase-card"

export default function UseCases() {
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
          Real-World Use Cases, Seamless Workflows
        </Typography>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 6 }}>
                <UseCaseCard
                  videoPath="/usecases/dex.mp4"
                  title={<>Cross-Chain DEX<br />(Coliseum DEX)</>}
                  description="Swap assets across chains — secure, fast, decentralized."
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <UseCaseCard
                  videoPath="/usecases/dapp.mp4"
                  title={<>DApps<br />(DeFi, GameFi)</>}
                  description="Build lending protocols, yield optimizers, and on-chain games."
                />
              </Grid>
              <Grid size={{ xs: 12, md: 12 }}>
                <UseCaseCard
                  videoPath="/usecases/nft.mp4"
                  title={<>NFTs & Creator Economies</>}
                  description="Empower creators with on-chain royalties, fan tokens, and digital collectibles."
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <UseCaseCard
                  videoPath="/usecases/dao.mp4"
                  title={<>DAO<br />Tooling</>}
                  description="Govern with clarity — multi-sig treasuries, off-chain voting."
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <UseCaseCard
                  videoPath="/usecases/stables.mp4"
                  title={<>Stablecoin<br />integrations</>}
                  description="USDC, EUROC, or custom regional coins — natively integrated."
                />
              </Grid>
            </Grid>

          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack flexDirection="column" alignContent="center" justifyContent="center" gap={3} height="100%">
              <UseCaseCard
                videoPath="/usecases/identity.mp4"
                title={<>Digital Identity<br />& Passports</>}
                description="Create verifiable, self-sovereign identity systems."
              />
              <UseCaseCard
                videoPath="/usecases/marketplace.mp4"
                title={<>Tokenized Assets<br />(RWA Marketplace)</>}
                description="Real estate, equity, luxury goods — all fractional, liquid, and compliant."
              />
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  )
}