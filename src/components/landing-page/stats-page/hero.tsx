import { Container, Stack, Typography, Box } from "@mui/material"
import UsersGraph from "./users-graph"
import TradesGraph from "./trades-graph"

export default function StatsHero() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: "8rem",
      }}
    >
      <Stack
        flexDirection="column"
        alignContent="center"
        justifyContent="center"
        textAlign="center"
        mb={2}
        sx={{ position: "relative", zIndex: 1 }}
      >
        <Typography
          variant="h1"
          component="h1"
          color="primary"
          textAlign={{ xs: "center", md: "left" }}
          sx={{ mb: 0.5 }}
        >
          Coliseum Stats:
        </Typography>

        <Typography
          variant="h1"
          component="h1"
          color="black"
          textAlign={{ xs: "center", md: "left" }}
        >
          Powering the Future of Web3
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          color="grey.700"
          textAlign={{ xs: "center", md: "left" }}
          sx={{ my: "2rem" }}
        >
          A closer look at the numbers driving our high-performance blockchain infrastructure.
        </Typography>

        <Box
          component="img"
          src="/stats-splash.svg"
          alt="Splash Hero"
          sx={{
            width: "100%",
            height: "auto",
            display: "block",
            mx: "auto",
            maxWidth: "100%",
          }}
        />
        <Stack
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="stretch"
          justifyContent="center"
          gap={3}
          sx={{
            mt: "2rem",
            mb: 2,
            height: { xs: "auto", md: 480 },
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              flex: 1,
              width: "100%",
              minWidth: 0,
              minHeight: { xs: "auto", md: 0 },
              height: { xs: 260, sm: 320, md: "100%" },
              overflow: "hidden",
            }}
          >
            <UsersGraph />
          </Box>
          <Box
            sx={{
              flex: 1,
              width: "100%",
              minWidth: 0,
              minHeight: { xs: "auto", md: 0 },
              height: { xs: 260, sm: 320, md: "100%" },
              overflow: "hidden",
            }}
          >
            <TradesGraph />
          </Box>
        </Stack>
      </Stack>
    </Container>
  )
}
