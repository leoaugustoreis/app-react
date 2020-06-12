import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiCard: {
      root: {
        borderRadius: 10
      }
    }
  },
  palette: {
    primary: {
      main: '#8198A6'
    },
    secondary: {
      main: '#D9C5C5',
    },
  },
  typography: {
    fontFamily: 'Arial',
    h4: {
      fontWeight: 500,
      fontSize: 24,
      letterSpacing: 0.17
    },
    h5: {
      fontWeight: 700,
      fontSize: 16
    },
    h6: {
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: 0.17
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: 16,
      letterSpacing: 0.15
    },
    body1: {
      fontWeight: 400,
      fontSize: 14,
      letterSpacing: 0.25,
      lineHeight: '1.25rem'
    }
  }
});

function TemaProvider(
  {
    children
  }
) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

export default TemaProvider;