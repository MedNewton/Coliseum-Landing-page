import * as React from "react"
import { Box, Container } from "@mui/material"

type IconWallGridProps = {
  rows: [string[], string[], string[], string[]]
  gap?: number
  /** Fine‑tune the fade strength; the center is intentionally small by default */
  fade?: {
    /** % center width (0–100) Lower = more fade area */
    horizontalCore?: number
    /** % center height (0–100). Lower = more fade area */
    verticalCore?: number
  }
  centerSvgSrc?: string
  centerSvgAlt?: string
}

export default function IconWall({
  rows,
  gap = 2,
  fade,
  centerSvgSrc,
  centerSvgAlt = "center-logo",
}: IconWallGridProps) {
  const hCore = Math.min(100, Math.max(0, fade?.horizontalCore ?? 22))
  const vCore = Math.min(100, Math.max(0, fade?.verticalCore ?? 20))

  const hEdge = (100 - hCore) / 2
  const vEdge = (100 - vCore) / 2

  const mkLinear = (dir: "right" | "bottom", edge: number) => {
    const a0 = 0
    const a1 = edge * 0.35
    const a2 = edge * 0.62
    const a3 = edge * 0.85
    const s  = 100 - edge

    return `linear-gradient(to ${dir},
      rgba(0,0,0,0) ${a0}%,
      rgba(0,0,0,0.25) ${a1}%,
      rgba(0,0,0,0.6) ${a2}%,
      rgba(0,0,0,0.85) ${a3}%,
      black ${edge}%,
      black ${s}%,
      rgba(0,0,0,0.85) ${s + (edge * 0.15)}%,
      rgba(0,0,0,0.6) ${s + (edge * 0.38)}%,
      rgba(0,0,0,0.25) ${s + (edge * 0.65)}%,
      rgba(0,0,0,0) 100%)`
  }

  const maskLinearX = mkLinear("right", hEdge)
  const maskLinearY = mkLinear("bottom", vEdge)

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 } }}>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          bgcolor: "background.paper",
          p: { xs: 2, md: 3 },
          maskImage: `${maskLinearX}, ${maskLinearY}`,
          WebkitMaskImage: `${maskLinearX}, ${maskLinearY}`,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      >
        {centerSvgSrc && (
          <Box
            component="img"
            src={centerSvgSrc}
            alt={centerSvgAlt}
            sx={{
              position: "absolute",
              top: "50%",
              left: "48.7%",
              transform: "translate(-50%, -50%)",
              width: {xs: 223, md: 362},
              height: {xs: 223, md: 362},
              objectFit: "contain",
              zIndex: 2,
              pointerEvents: "none",
              display: "block",
            }}
          />
        )}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gridTemplateRows: "repeat(4, auto)",
            gap,
          }}
        >
          {rows.map((icons, rIdx) =>
            icons.map((src, cIdx) => {
              const alt =
                src.split("/").pop()?.replace(/\.[a-z0-9]+$/i, "")?.replace(/[-_]/g, " ") ||
                `icon-${rIdx}-${cIdx}`
              return (
                <Box
                  key={`${rIdx}-${cIdx}-${src}`}
                  sx={{
                    display: "grid",
                    placeItems: "center",
                    minHeight: { xs: 32, sm: 38, lg: 88 },
                    minWidth:  { xs: 32, sm: 38, lg: 88 },
                  }}
                >
                  <Box
                    component="img"
                    src={src}
                    alt={alt}
                    loading="lazy"
                    sx={{
                      height: { xs: 32, sm: 38, lg: 88 },
                      width: "auto",
                      maxWidth: "100%",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                </Box>
              )
            })
          )}
        </Box>
      </Box>
    </Container>
  )
}
