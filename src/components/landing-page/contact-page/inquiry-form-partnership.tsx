"use client"

import type React from "react"
import { useState } from "react"
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Link,
  type SelectChangeEvent,
  Stack,
} from "@mui/material"
import GradientButton from "@/components/common/button"

interface FormData {
  fullName: string
  email: string
  company: string
  businessType: string
  jobTitle: string
  issueDescription: string
}

export default function InquiryForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    company: "",
    businessType: "",
    jobTitle: "",
    issueDescription: "",
  })
  const [privacyAccepted, setPrivacyAccepted] = useState(false)

  const handleInputChange =
    (field: keyof FormData) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: event.target.value,
      }))
    }

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setFormData((prev) => ({
      ...prev,
      businessType: event.target.value,
    }))
  }

  const handlePrivacyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrivacyAccepted(event.target.checked)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (privacyAccepted) {
      console.log("Form submitted:", formData)
    }
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 600,
        mx: "auto",
        p: 4,
        backgroundColor: "#ffffff",
        borderRadius: 3,
        boxShadow: "0px 2px 4px 0px #00000014, 0px 0px 6px 0px #00000005",
        textAlign: "left",
      }}
    >
      <Typography variant="h5" sx={{ color: "grey.900", mb: 4 }}>
        Submit a Support Request
      </Typography>

      <TextField
        fullWidth
        label="Full Name"
        placeholder="Enter your full name"
        value={formData.fullName}
        onChange={handleInputChange("fullName")}
        sx={{ mb: 3 }}
      />

      <TextField
        fullWidth
        label="Email Address"
        placeholder="Enter your email"
        type="email"
        value={formData.email}
        onChange={handleInputChange("email")}
        sx={{ mb: 3 }}
      />

      <TextField
        fullWidth
        label="Company"
        placeholder="Enter company name"
        value={formData.company}
        onChange={handleInputChange("company")}
        sx={{ mb: 3 }}
      />

      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel>Type of Business</InputLabel>
        <Select
          value={formData.businessType}
          label="Type of Business"
          onChange={handleSelectChange}
          displayEmpty
          renderValue={(selected) => (selected ? selected : "")}
        >
          <MenuItem value="">
            <em>Select from dropdown</em>
          </MenuItem>
          <MenuItem value="startup">Startup</MenuItem>
          <MenuItem value="enterprise">Enterprise</MenuItem>
          <MenuItem value="individual">Individual</MenuItem>
          <MenuItem value="nonprofit">Non-profit</MenuItem>
          <MenuItem value="government">Government</MenuItem>
        </Select>
      </FormControl>

      <TextField
        fullWidth
        label="Job Title"
        placeholder="Enter your position"
        value={formData.jobTitle}
        onChange={handleInputChange("jobTitle")}
        sx={{ mb: 3 }}
      />

      <TextField
        fullWidth
        label="Issue Description"
        placeholder="Describe the problem or what you're trying to do..."
        multiline
        rows={4}
        value={formData.issueDescription}
        onChange={handleInputChange("issueDescription")}
        sx={{ mb: 4 }}
      />

      <Box sx={{ display: "flex", alignItems: "flex-start", mb: 4 }}>
        <FormControlLabel
          control={<Checkbox checked={privacyAccepted} onChange={handlePrivacyChange} />}
          label={
            <Typography variant="body2" sx={{ color: "grey.800" }}>
              I agree to the processing of my personal data in accordance with the{" "}
              <Link
                href="#"
                sx={{
                  color: "grey.800",
                  textDecoration: "underline",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Privacy Policy
              </Link>
              .
            </Typography>
          }
          sx={{ alignItems: "flex-start", m: 0 }}
        />
      </Box>

      <Stack direction="row" width="100%" alignItems="center" justifyContent="flex-end">
        <GradientButton type="submit" disabled={!privacyAccepted} sx={{ alignSelf: "flex-end" }}>
          Make an Inquiry
        </GradientButton>
      </Stack>
    </Box>
  )
}
