import { Container, Stack, Typography } from "@mui/material"
import ProductFeatureCard from "./product-feature-card"

const productFeatureProps = [
  {
    title: "Low transaction fees via Layer 2 architecture",
    description: "Efficient execution with minimal gas overhead, enabled by our high-performance rollup-based design layer.",
    detail: "Our Layer 2 solution leverages a rollup-based architecture to dramatically reduce transaction costs while maintaining the security and decentralization of the Ethereum mainnet. By batching transactions and settling them on-chain periodically, we eliminate the need for users to pay high gas fees for every single action. This design allows even micro-investments or fractional transactions to remain economically viable, opening new opportunities for wider participation.",
    ctaText: "Review our Layer 2 approach to cost-optimized performance",
    svgPath: "/features/fees.svg"
  },
  {
    title: "High throughput and scalability",
    description: "Process thousands of transactions per second with a network designed to scale effortlessly.",
    detail: "Our Layer 2 solution leverages a rollup-based architecture to dramatically reduce transaction costs while maintaining the security and decentralization of the Ethereum mainnet. By batching transactions and settling them on-chain periodically, we eliminate the need for users to pay high gas fees for every single action. This design allows even micro-investments or fractional transactions to remain economically viable, opening new opportunities for wider participation.",
    ctaText: "Examine throughput benchmarks and architecture choices",
    svgPath: "/features/throughput.svg"
  },
  {
    title: "EVM-proof compatibility",
    description: "Full Solidity and Ethereum tooling support out of the box, ensuring fast migration and seamless smart contract deployment.",
    detail: "Our Layer 2 solution leverages a rollup-based architecture to dramatically reduce transaction costs while maintaining the security and decentralization of the Ethereum mainnet. By batching transactions and settling them on-chain periodically, we eliminate the need for users to pay high gas fees for every single action. This design allows even micro-investments or fractional transactions to remain economically viable, opening new opportunities for wider participation.",
    ctaText: "Understand how EVM compatibility ensures seamless deployment",
    svgPath: "/features/evm.svg"
  },
  {
    title: "Developer-first tooling and SDKs",
    description: "Accessible APIs, CLI support, and complete SDKs enable rapid prototyping, testing, and mainnet integration.",
    detail: "Our Layer 2 solution leverages a rollup-based architecture to dramatically reduce transaction costs while maintaining the security and decentralization of the Ethereum mainnet. By batching transactions and settling them on-chain periodically, we eliminate the need for users to pay high gas fees for every single action. This design allows even micro-investments or fractional transactions to remain economically viable, opening new opportunities for wider participation.",
    ctaText: "Explore developer tooling purpose-built for productivity",
    svgPath: "/features/sdk.svg"
  },
  {
    title: "Modular smart contract support",
    description: "Composable contract layers built for customization, reuse, and scalability — ideal for complex financial workflows.",
    detail: "Our Layer 2 solution leverages a rollup-based architecture to dramatically reduce transaction costs while maintaining the security and decentralization of the Ethereum mainnet. By batching transactions and settling them on-chain periodically, we eliminate the need for users to pay high gas fees for every single action. This design allows even micro-investments or fractional transactions to remain economically viable, opening new opportunities for wider participation.",
    ctaText: "Learn how modularity powers maintainable smart systems",
    svgPath: "/features/contract.svg"
  },
  {
    title: "Native token utility and staking",
    description: "$CMAX enables governance, liquidity provisioning, staking rewards, and fuels interactions across Coliseum’s ecosystem.",
    detail: "Our Layer 2 solution leverages a rollup-based architecture to dramatically reduce transaction costs while maintaining the security and decentralization of the Ethereum mainnet. By batching transactions and settling them on-chain periodically, we eliminate the need for users to pay high gas fees for every single action. This design allows even micro-investments or fractional transactions to remain economically viable, opening new opportunities for wider participation.",
    ctaText: "Dive into token mechanics and staking infrastructure",
    svgPath: "/features/token.svg"
  },
]

export default function ProductHero() {
  return (
    <Container maxWidth="lg" sx={{ marginTop: "8rem", overflowY: "hidden" }}>
      <Stack
        flexDirection="column"
        alignContent="center"
        justifyContent="center"
        textAlign="center"
        marginBottom={2}
      >
        <Typography variant="h1" component="h1" color="primary" textAlign={{ xs: "center", md: "left" }} mb={0.5}>
          Inside Coliseum
        </Typography>
        <Typography variant="h1" component="h1" color="black" marginBottom={4} textAlign={{ xs: "center", md: "left" }}>
          The Technologies That Make It Possible
        </Typography>
        <Typography variant="h5" component="h2" maxWidth="sm" color="grey.700" marginBottom={4} textAlign={{ xs: "center", md: "left" }}>
          Layer 2 blockchain designed for tokenized real-world assets, frictionless DeFi, and developer-first scalability.
        </Typography>
        <Stack alignItems="center" justifyContent="center" gap={2}>
          {productFeatureProps.map((feature, i) => (
            <ProductFeatureCard
              key={i}
              title={feature.title}
              description={feature.description}
              detail={feature.detail}
              ctaText={feature.ctaText}
              svgPath={feature.svgPath}
            />
          ))}
        </Stack>
      </Stack>
    </Container>
  )
}