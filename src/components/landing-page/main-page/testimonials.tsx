"use client"

import { useMemo, useState } from "react"
import { Container, Stack, Typography, Grid } from "@mui/material"
import { AnimatePresence, motion } from "framer-motion"

import TestimonialsTabs from "./testimonials-tabs"
import TestimonialCard from "./testimonial-card"
import { retailTestimonials } from "@/constants/retail-testimonials"
import { businessTestimonials } from "@/constants/business-testimonials"

const MotionStack = motion(Stack)

export default function Testimonials() {
  const [tab, setTab] = useState<number>(0) // 0 = Retail, 1 = Business

  const handleChange = (_e: React.SyntheticEvent, newValue: number) => {
    setTab(newValue)
  }

  const data = useMemo(
    () => (tab === 0 ? retailTestimonials : businessTestimonials),
    [tab]
  )

  const col = (start: number, end: number) => data.slice(start, end)
  const containerVariants = {
    hidden: { opacity: 0, x: 60 },
    show: {
      opacity: 1, x: 0,
      transition: { duration: 0.35, ease: "easeOut" as const, when: "beforeChildren", staggerChildren: 0.05 }
    },
    exit: { opacity: 0, x: -40, transition: { duration: 0.25, ease: "easeIn" as const } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    show: { 
      opacity: 1, y: 0, 
      transition: { duration: 0.25, ease: "easeOut" as const }
    }
  }

  return (
    <Container maxWidth="lg" sx={{ mt: "8rem", overflowX: "hidden" }}>
      <Stack
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        width="100%"
        mb={2}
      >
        <Typography variant="h1" component="h2" color="primary">
          From Retail to Enterprise
        </Typography>
        <Typography variant="h1" component="h2" color="black" mb={4}>
          Voices That Shape Coliseum
        </Typography>

        <TestimonialsTabs
          tabs={["Retail users", "Business users"]}
          value={tab}
          onChange={handleChange}
        />
        <AnimatePresence mode="wait">
          <MotionStack
            key={tab}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            width="100%"
          >
            <Grid container spacing={2} mt={2}>
              <Grid size={{ xs: 12, md: 4 }}>
                <Stack direction="column" alignItems="center" justifyContent="center" gap={2}>
                  {col(0, 3).map((t, i) => (
                    <motion.div key={`${tab}-c1-${i}`} variants={itemVariants}>
                      <TestimonialCard
                        avatar={t.avatar}
                        name={t.name}
                        tagline={t.tagline}
                        linkedinUrl={t.linkedinUrl}
                        testimonialText={t.testimonialText}
                        date={t.date}
                      />
                    </motion.div>
                  ))}
                </Stack>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <Stack direction="column" alignItems="center" justifyContent="center" gap={2}>
                  {col(3, 6).map((t, i) => (
                    <motion.div key={`${tab}-c2-${i}`} variants={itemVariants}>
                      <TestimonialCard
                        avatar={t.avatar}
                        name={t.name}
                        tagline={t.tagline}
                        linkedinUrl={t.linkedinUrl}
                        testimonialText={t.testimonialText}
                        date={t.date}
                      />
                    </motion.div>
                  ))}
                </Stack>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <Stack direction="column" alignItems="center" justifyContent="center" gap={2}>
                  {col(6, 9).map((t, i) => (
                    <motion.div key={`${tab}-c3-${i}`} variants={itemVariants}>
                      <TestimonialCard
                        avatar={t.avatar}
                        name={t.name}
                        tagline={t.tagline}
                        linkedinUrl={t.linkedinUrl}
                        testimonialText={t.testimonialText}
                        date={t.date}
                      />
                    </motion.div>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </MotionStack>
        </AnimatePresence>
      </Stack>
    </Container>
  )
}
