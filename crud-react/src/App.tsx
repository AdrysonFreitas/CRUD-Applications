import './App.css';
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from './routes';
import { ThemeProvider } from '@mui/material';
import { LightTheme } from './shared/themes/Theme';
import { Box } from '@mui/system';

export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <Box width='100vw' height='100vh'>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

