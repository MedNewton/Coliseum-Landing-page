import { createTheme } from '@mui/material/styles'
import '@mui/material/styles'
import { Shadows } from '@mui/material/styles'

export default createTheme({
  cssVariables: { colorSchemeSelector: 'class' },
  shadows: [
    ...createTheme().shadows.slice(0, 2),
    '0px 3px 1px -2px #00000033, 0px 2px 2px 0px #00000024, 0px 1px 5px 0px #0000001F', // Custom shadow for elevation 2
    ...createTheme().shadows.slice(3),
  ] as Shadows,
  components: {},
  shape: {
    borderRadius: 12
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#F8601F',
          light: '#42A5F5',
          dark: '#1565C0',
          contrastText: '#FFFFFF'
        },
        error: {
          main: '#D32F2F',
          light: '#EF5350',
          dark: '#C62828',
          contrastText: '#FFFFFF',
        },
        warning: {
          main: '#EF6C00',
          light: '#FF9800',
          dark: '#E65100',
          contrastText: '#FFFFFF',
        },
        success: {
          main: '#2E7D32',
          light: '#4CAF50',
          dark: '#1B5E20',
          contrastText: '#FFFFFF',
        },
        action: {
          active: 'rgba(0,0,0,0.56)',
          hover: 'rgba(0,0,0,0.04)',
          selected: 'rgba(0,0,0,0.08)',
          disabledBackground: 'rgba(0,0,0,0.12)',
          focus: 'rgba(0,0,0,0.12)',
          disabled: 'rgba(0,0,0,0.38)',
        },
        common: {
          black: '#000000',
          white: '#FFFFFF',
        },
        background: {
          default: 'grey.50',
        },
        text: {
          primary: 'black',
          secondary: 'grey.700',
          disabled: '#9E9E9E'
        },
      },
    },
  },
  typography: {
    fontFamily: 'Host Grotesk, Helvetica', 
    h1: {
      fontWeight: 600,
      fontSize: "3.5rem",
      lineHeight: "90%",
      letterSpacing: "-1.5px",
      [createTheme().breakpoints.down("sm")]: {
        fontSize: "2rem",
        lineHeight: "110%",
        letterSpacing: "0%",
      },
      [createTheme().breakpoints.down("xs")]: {
        fontSize: "1.75rem",
        lineHeight: "120%",
        letterSpacing: "0%",
      },
    },
    h2: {
      fontWeight: 600,
      fontStyle: "normal",
      fontSize: "50px",
      lineHeight: "60px",
      letterSpacing: "-0.5px",
      textAlign: "center",
    },
    h3: {
      fontWeight: 400,
      fontSize: '2.125rem',
      lineHeight: 1.235,
      letterSpacing: '0'
    },
    h4: {
      fontWeight: 500,
      fontSize: '2.625rem',
      lineHeight: 1.235,
      letterSpacing: '0.01563rem'
    },
    h5: {
      fontWeight: 400,
      fontStyle: "normal",
      fontSize: "1.5rem",
      lineHeight: "34px",
      letterSpacing: "0px",
      verticalAlign: "middle",
    },
    h6: {
      fontFamily: "Host Grotesk",
      fontWeight: 400,
      fontStyle: "normal",
      fontSize: "1.25rem",
      lineHeight: "30px",
      letterSpacing: "0.15px",
      verticalAlign: "middle",
    },
    body1: {
      fontWeight: 400,
      fontStyle: "normal",
      fontSize: "1.125rem",
      lineHeight: "28px",
      letterSpacing: "0.15px",
      verticalAlign: "middle",
    },
    body2: {
      color: createTheme().palette.text.secondary,
      fontWeight: 400,
      fontSize: "1rem",
      display: "inline-block"
    },
    subtitle1: {
      fontSize: 'var(--font-size-075-rem, 0.75rem)',
      fontStyle: 'normal',
      fontWeight: 'var(--fontWeightMedium, 500)',
      lineHeight: '0.75rem',
      letterSpacing: '0.00938rem',
      textTransform: 'uppercase'
    },
    subtitle2: {
      fontSize: 'var(--font-size-0625-rem, 0.625rem)', 
      fontStyle: 'normal', fontWeight: 'var(--fontWeightMedium, 500)',
      lineHeight: '0.875rem'
    },
    button: {
      fontWeight: 500,
    },
  },
})