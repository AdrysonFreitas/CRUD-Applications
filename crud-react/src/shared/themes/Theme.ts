import { createTheme } from '@mui/material';
import { pink, red, teal } from '@mui/material/colors';

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: teal[500],
            dark: teal[700],
            light: teal[300],
            contrastText: '#ffffff',
        },
        secondary: {
            main: pink['A200'],
            dark: pink['A400'],
            light: pink['A100'],
            contrastText: '#ffffff',
        },
        error: {
            main: red[500],
            dark: red[700],
            light: red[300],
            contrastText: '#ffffff',
        }

    },
    typography: {
        fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(','),
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500
    }
});