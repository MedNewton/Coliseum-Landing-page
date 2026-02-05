"use client"

import type React from "react"
import { Card, CardContent, Typography, Box, Stack } from "@mui/material"
import Image from 'next/image'
import GradientButton from "@/components/common/button"

interface WalletCardProps {
  svgPath: string
  title: string
  onAddWallet?: () => void
}

export default function WalletCard({ svgPath, title }: WalletCardProps) {
  return (
    <Card
      sx={{
        borderRadius: 2,
        width: "100%",
        margin: "auto",
        boxShadow: "0px 2px 4px rgba(0,0,0,0.08), 0px 0px 6px rgba(0,0,0,0.03)",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: 4,
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="center">
          <Box sx={{ mb: 2, mr: 2 }}>
            <Image src={svgPath} alt="Wallet Icon" width={32} height={32}/>
          </Box>
          <Typography variant="h5" component="h5" color="black" sx={{ mb: 3 }}>
            {title}
          </Typography>
        </Stack>
        <GradientButton
          sx={(theme) => ({
            border: { xs: `1px solid ${theme.palette.primary.main}`, md: 'none' },
            background: { xs: 'transparent', md: undefined },
            boxShadow: { xs: 'none', md: undefined },
            width: { xs: '100%', md: 'auto' }
          })}
        >Add Wallet</GradientButton>
      </CardContent>
    </Card>
  )
}