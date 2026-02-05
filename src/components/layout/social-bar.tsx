"use client"

import { Box, IconButton, Stack } from "@mui/material"
import Image from "next/image"

const socialLinks = [
  { icon: <Image src="/socials/facebook.svg" alt="facebook" width={24} height={24} />, href: "#" },
  { icon: <Image src="/socials/instagram.svg" alt="instagram" width={24} height={24} />, href: "#" },
  { icon: <Image src="/socials/linkedin.svg" alt="linkedin" width={24} height={24} />, href: "#" },
  { icon: <Image src="/socials/youtube.svg" alt="youtube" width={24} height={24} />, href: "#" },
]

export default function SocialBar() {
  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        isolation: "isolate",
        "&::after": {
          content: '""',
          position: "absolute",
          left: "50%",
          bottom: 0,
          transform: "translateX(-50%)",
          width: "120%",
          height: { xs: 120, md: 160 },
          backgroundImage: 'url("/gradient.png")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
          backgroundSize: "cover",
          WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,.9), rgba(0,0,0,0))",
          maskImage: "linear-gradient(to top, rgba(0,0,0,.9), rgba(0,0,0,0))",
          pointerEvents: "none",
          zIndex: 0,
        },
        background: "#FFFFFF4D",
        border: "1px solid #FAFAFACF",
        borderRadius: 0,
        backdropFilter: "blur(24px)",
        py: { xs: 2, md: 3 },
        px: { xs: 2, md: 3 },
        zIndex: 1,
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="center" spacing={1.5}>
        {socialLinks.map((s, i) => (
          <IconButton
            key={i}
            href={s.href}
            sx={{
              backgroundColor: "#FFFFFF80",
              border: "1px solid #FFF",
              color: "primary.main",
              borderRadius: 1,
              width: { xs: 40, sm: 44, md: 48 },
              height: { xs: 40, sm: 44, md: 48 },
              "&:hover": { backgroundColor: "#f5f5f5" },
            }}
          >
            {s.icon}
          </IconButton>
        ))}
      </Stack>
    </Box>
  )
}
