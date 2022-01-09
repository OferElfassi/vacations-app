import createTheme from '@mui/material/styles/createTheme';

const theme = createTheme({
  typography: {
    fontFamily: "'Alef' sans-serif",
    h4: {
      fontSize: 25,
      textShadow: '0px 2px 80px #FFFFFF',
      fontWeight: 400,
      color: '#000001',
    },
    h5: {
      fontSize: 16,
      fontWeight: 700,
    },
  },
  palette: {
    type: 'light',
    primary: {
      main: '#FF6647',
      light: '#F86549',
      lighter: '#f67d66',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#E5E5E5',
      paper: '#fff',
    },
    info: {
      main: '#34A59F',
    },
    text: {
      primary: '#353646',
      secondary: 'rgba(53,54,70,0.4)',
      hint: '#F6F7FB',
    },
  },
  components: {
    // Name of the component
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '25px',
          boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: 12,
          fontWeight: 700,
          color: '#77787B',
          '&.Mui-focused': {
            color: '#34A59F',
          },
        },
      },
    },
  },
});

export default theme;
