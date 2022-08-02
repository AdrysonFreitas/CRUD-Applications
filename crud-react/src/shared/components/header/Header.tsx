import { AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from '@mui/icons-material/Menu';
import './Header.css';

export const Header = () => {
    return (
        <>
            <AppBar position="static" sx={{ boxShadow: 0 }}>
                <Box display="flex" width="100%">
                    <Toolbar>
                        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', p: 0, ml: -2.5 }}>
                            <Typography variant="h6" component="span" sx={{ mb: -1 }}>
                                Users Data
                            </Typography>
                            <Typography variant="subtitle2" component="span">
                                Progress and favorite fruits made in React
                            </Typography>
                        </Box>
                    </Toolbar>
                </Box>
            </AppBar >
        </>
    );
};