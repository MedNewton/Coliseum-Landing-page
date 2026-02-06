"use client"

import {
  Box,
  Typography,
  Paper,
  Divider,
} from "@mui/material"
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  BarShapeProps,
} from "recharts"

const data = [
  { label: "Fractional Trades", value: 8200 },
  { label: "Asset Sales", value: 4300 },
]

export default function FractionalTradingCard() {
  return (
    <Paper
      sx={{
        boxShadow: "0px 2px 4px 0px #00000014, 0px 0px 6px 0px #00000005",
        p: { xs: 2, sm: 3 },
        borderRadius: 2,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <Box sx={{ mb: 3 }} textAlign="left">
        <Typography
          variant="h5"
          component="h2"
          sx={{ color: "black", fontWeight: 700, mb: 1 }}
        >
          Fractional trading made effortless:
        </Typography>
        <Typography variant="body1" sx={{ color: "grey.700", lineHeight: 1.6 }}>
          100% paperless — list in 30 seconds,<br />
          deal confirmed in 3 minutes.
        </Typography>
      </Box>

      <Divider sx={{ my: { xs: 6, sm: 8 } }} />

      <Box sx={{ height: 240, width: "100%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 16, right: 24, left: 16, bottom: 16 }}
            barCategoryGap={16}
          >
            <YAxis
              dataKey="label"
              type="category"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#4B5563", fontSize: 16 }}
              width={180}
            />
            <XAxis
              type="number"
              domain={[1000, 9000]}
              ticks={[1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]}
              tickFormatter={(v) => `${Math.round(v / 1000)}k`}
              axisLine={{ stroke: "#E5E7EB" }}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 14 }}
              height={40}
            />
            <Bar
              dataKey="value"
              barSize={31}
              shape={(props: BarShapeProps) => {
                const { x, y, width, height, index } = props
                const fill = index === 0 ? "#F8601F" : "#3F51B5"
                return (
                  <rect
                    x={x ?? 0}
                    y={y ?? 0}
                    width={width ?? 0}
                    height={height ?? 0}
                    rx={5}
                    ry={5}
                    fill={fill}
                  />
                )
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  )
}
