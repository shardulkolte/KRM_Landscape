import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#388e3c', // Green (you can tweak this)
    },
    secondary: {
      main: '#8d6e63', // Earthy tone
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial',
  },
});

export default theme;
