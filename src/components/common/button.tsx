'use client'

import { Button, ButtonProps } from "@mui/material"

export default function GradientButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      sx={{
        background: 'linear-gradient(90deg, #FF5A09 0%, #FFA302 100%)',
        border: 0,
        borderRadius: '0.875rem',
        color: 'white',
        padding: '0.5rem 1.375rem',
        textTransform: 'uppercase',
        fontSize: '1rem',
        fontFamily: 'Host Grotesk',
        fontWeight: 700,
        boxShadow: (theme) => theme.shadows[2],
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        '&:hover': {
          background: 'linear-gradient(90deg, #e65108 0%, #e69202 100%)',
          boxShadow: (theme) => theme.shadows[4],
          transform: 'scale(1.02)',
        },
        '&.Mui-disabled': {
            background: '#d3d3d3',
            color: '#a4a4a4',
            boxShadow: 'none',
        },        
        ...props.sx,
      }}
    >
      {props.children}
    </Button>
  )
}