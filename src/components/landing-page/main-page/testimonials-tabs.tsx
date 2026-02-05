"use client"

import type React from "react"
import { useState } from "react"
import { Box, Tab, Tabs, styled } from "@mui/material"

const StyledTabs = styled(Tabs)(() => ({
  "& .MuiTabs-indicator": {
    display: "none",
  },
  "& .MuiTabs-flexContainer": {
    gap: "20px",
    display: "flex",
    width: "100%",
  },
}))

const StyledTab = styled(Tab)(({ theme }) => ({
  fontFamily: "Host Grotesk, sans-serif",
  fontWeight: 400,
  fontSize: "1.5rem",
  lineHeight: "34px",
  letterSpacing: "0px",
  textAlign: "center",
  textTransform: "none",
  minHeight: "auto",
  padding: "12px 24px",
  borderRadius: "12px",
  border: "1px solid transparent",
  color: theme.palette.grey[700],
  transition: "all 0.2s ease-in-out",
  flex: 1,
  maxWidth: "none",

  "&.Mui-selected": {
    backgroundColor: "#FFF5F0",
    border: "1px solid #FADBCE",
    color: theme.palette.primary.main,
  },

  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },

  "&.Mui-selected:hover": {
    backgroundColor: "#FFF5F0",
  },
}))

interface TestimonialsTabsProps {
  value?: number
  onChange?: (event: React.SyntheticEvent, newValue: number) => void
  tabs: string[]
}

export default function TestimonialsTabs({ value = 0, onChange, tabs }: TestimonialsTabsProps) {
  const [tabValue, setTabValue] = useState(value)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
    if (onChange) {
      onChange(event, newValue)
    }
  }

  return (
    <Box
      maxWidth="lg"
      sx={{
        width: "100%",
        margin: "0 auto",
        backgroundColor: "white",
        padding: "1.25rem",
        borderRadius: "12px",
        boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.08), 0px 0px 6px 0px rgba(0, 0, 0, 0.02)",
      }}
    >
      <StyledTabs value={tabValue} onChange={handleChange} aria-label="custom tabs">
        {tabs.map((tab, index) => (
          <StyledTab key={index} label={tab} />
        ))}
      </StyledTabs>
    </Box>
  )
}
