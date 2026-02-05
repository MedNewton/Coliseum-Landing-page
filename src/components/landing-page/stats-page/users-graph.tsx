"use client"

import {
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  Paper,
} from "@mui/material"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts"
import {
  TrendingUpRounded as TrendingUp,
  KeyboardArrowDownRounded as ChevronDown
} from "@mui/icons-material"

const data = [
  { month: "Aug", users: 18000 },
  { month: "Sep", users: 25000 },
  { month: "Oct", users: 26000 },
  { month: "Nov", users: 28000 },
  { month: "Dec", users: 29000 },
  { month: "Jan", users: 32000 },
  { month: "Feb", users: 33000 },
  { month: "Mar", users: 29000 },
  { month: "Apr", users: 55000 },
]

export default function UsersGraph() {
  return (
    <Paper
      sx={{
        boxShadow: "0px 2px 4px 0px #00000014, 0px 0px 6px 0px #00000005",
        padding: "1.25rem",
        borderRadius: 2,
        width: "100%",
        height: "100%"
      }}
    >
      <Box display="flex" alignItems="flex-start" justifyContent="space-between" mb={4}>
        <Box>
          <Typography variant="h2" component="h2" sx={{ color: "black", fontWeight: "bold", mb: 1 }}>
            55,000
          </Typography>
          <Typography variant="h6" component="h6" sx={{ color: "grey.700" }}>
            Total user
          </Typography>
        </Box>

        <Box display="flex" flexDirection="column" alignItems="flex-end" gap={1.5} width="120px">
          <FormControl size="small">
            <Select
              value="this-month"
              displayEmpty
              sx={{
                width: "100%",
                "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                "& .MuiSelect-select": {
                  borderBottom: "1px solid #D1D5DB",
                  paddingBottom: "4px",
                  color: "#6B7280",
                },
              }}
              IconComponent={ChevronDown}
            >
              <MenuItem value="this-month">This month</MenuItem>
            </Select>
          </FormControl>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
              background: "linear-gradient(93.17deg, #FF530A 3.48%, #FFAB00 100%)",
              color: "white",
              px: 2,
              py: 1,
              borderRadius: 1.5,
              alignItems: "center",
              gap: 1,
              fontWeight: 500,
            }}
          >
            <Typography variant="body2" component="span" color="white" fontWeight={600}>
              16,40%
            </Typography>
            <TrendingUp />
          </Box>
        </Box>
      </Box>

      <Box sx={{ height: 320, width: "100%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 60, left: 20, bottom: 20 }}>
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 14 }}
              dy={10}
            />
            <YAxis
              orientation="right"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 14 }}
              tickFormatter={(value) => `${(value / 1000).toFixed(0)},000`}
              domain={[10000, 60000]}
              ticks={[10000, 20000, 30000, 40000, 50000, 60000]}
              dx={10}
            />
            <Line
              type="monotone"
              dataKey="users"
              stroke={"#F8601F"}
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 4, fill: "#F8601F" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  )
}
