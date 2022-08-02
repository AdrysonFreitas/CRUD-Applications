import { Box } from "@mui/system";
import { Header, Footer } from "../shared/components";


export const LayoutBase: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Box height="100%" display="flex" flexDirection="column" justifyContent='space-between'>
            <Box display="flex" flexDirection="column">
                <Box>
                    <Header />
                </Box>

                <Box padding="2% 5%">
                    {children}
                </Box>
            </Box>

            <Box>
                <Footer />
            </Box>
        </Box>
    );
};