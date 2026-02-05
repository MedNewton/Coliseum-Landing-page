import GradientButton from "@/components/common/button"
import { Box, Container, Divider, Grid, IconButton, Link, Stack, Typography } from "@mui/material"
import Image from "next/image"

interface FooterProps {
  hasCTA?: boolean
}

const footerLinks = {
    Product: [
      { label: "Features", href: "#" },
      { label: "Use Cases", href: "#" },
      { label: "Technical Overview", href: "#" },
    ],
    Developers: [
      { label: "Docs", href: "#" },
      { label: "SDKs", href: "#" },
      { label: "GitHub", href: "#" },
    ],
    Company: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Use", href: "#" },
      { label: "Contact", href: "#" },
    ],
  }

const socialLinks = [
  { icon: <Image src="/socials/facebook.svg" alt="facebook" width={24} height={24} />, href: "#", color: "primary" },
  { icon: <Image src="/socials/instagram.svg" alt="instagram" width={24} height={24} />, href: "#", color: "primary" },
  { icon: <Image src="/socials/linkedin.svg" alt="linkedin" width={24} height={24} />, href: "#", color: "primary" },
  { icon: <Image src="/socials/youtube.svg" alt="youtube" width={24} height={24} />, href: "#", color: "primary" },
]

export default function Footer({ hasCTA = false }: FooterProps) {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        isolation: "isolate",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "140px",
          background: `linear-gradient(
            to bottom,
            #FAFAFA 0%,
            rgba(250,250,250,0.92) 12%,
            rgba(250,250,250,0.0) 45%
          )`,
          pointerEvents: "none",
          zIndex: 1,
        },

        "&::after": {
          content: '""',
          position: "absolute",
          left: "30%",
          bottom: hasCTA ? {xs: "-20%", md: "-140%" } : {xs: "-20%", md: "-280%" },
          transform: "translateX(-50%) rotate(164deg) scale(3.5)",
          width: "clamp(1200px, 160vw, 2200px)",
          aspectRatio: "16 / 11",
          backgroundImage: 'url("/gradient.png")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
          backgroundSize: "contain",
          opacity: 1,
          pointerEvents: "none",
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        {
          hasCTA &&
          <Stack alignItems="center" justifyContent="center" textAlign="center" width="100%" marginTop="8rem">
            <Typography variant="h1" component="h2" color="black" mb={4}>
              Ready to build<br />the future of finance?
            </Typography>
            <GradientButton href="http://coliseum-marketplace.vercel.app/" sx={{ mt: "0.5rem", height: "3.5625rem", maxWidth: "12rem", width: "100%" }}>
              Try Now
            </GradientButton>
          </Stack>
        }
        <Box
          component="footer"
          maxWidth="lg"
          sx={{
            background: "#FFFFFF4D",
            border: "1px solid #FAFAFACF",
            borderRadius: 2, mb: "3rem", mt: "8rem",
            backdropFilter: "blur(93px)",
            py: 6, position: "relative", zIndex: 1, px: 3
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 4 }}>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2, mb: 3 }}>
                  <Box
                    component="img"
                    src="/logo-footer.svg"
                    alt="Colosseum Logo"
                    sx={{ width: 60, height: 60 }}
                  />
                  <Typography variant="body2" color="#212121CC" sx={{ maxWidth: 280, lineHeight: 1.5 }}>
                    High-performance blockchain powering scalable, secure, and developer-first financial products.
                  </Typography>
                </Box>
                <Stack direction="row" spacing={1}>
                  {socialLinks.map((social, index) => (
                    <IconButton
                      key={index}
                      href={social.href}
                      sx={{
                        backgroundColor: "white",
                        color: social.color,
                        width: 40,
                        height: 40,
                        "&:hover": {
                          backgroundColor: "#f5f5f5",
                        },
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Stack>
              </Grid>
              {Object.entries(footerLinks).map(([category, links]) => (
                <Grid size={{ xs: 6, sm: 3, md: 2 }} key={category}>
                  <Typography variant="h6" color="black" sx={{ mb: 2, fontWeight: 600 }}>
                    {category}
                  </Typography>
                  <Stack spacing={1}>
                    {links.map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                        variant="body2" color="#212121CC"
                        sx={{
                          textDecoration: "none",
                          "&:hover": {
                            textDecoration: "underline",
                          },
                        }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </Stack>
                </Grid>
              ))}
            </Grid>
            <Divider sx={{ width: "100%", borderColor: "#0000001A", borderBottomWidth: "1px", my: 4 }}/>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap", gap: 2,
              }}
            >
              <Typography variant="body2" color="#212121CC">
                © 2025 Coliseum Foundation. All rights reserved.
              </Typography>
              <Typography variant="body2" color="#212121CC">
                This page uses cookies.{" "}
                <Link href="#" sx={{ color: "#212121CC", textDecoration: "underline" }}>
                  See cookies details here
                </Link>
              </Typography>
            </Box>
          </Container>
        </Box>
      </Container>
    </Box>
  )
}
