import './Footer.css';
import { Box } from "@mui/system";
import { BottomNavigation, Typography, useTheme } from '@mui/material';

export const Footer = () => {
    const theme = useTheme();

    return (
        <>
            <Box height="100%" display="flex" flexDirection="column">
                <div style={{ position: "static", bottom: 0 }} className="container">
                    <Typography sx={{ color: 'primary.main', fontSize: "" }} component="span">2022</Typography>
                </div>
            </Box>
        </>
    );
};