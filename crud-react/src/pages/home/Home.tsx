import { Box } from "@mui/material";
import { LayoutBase } from "../../layouts/LayoutBase";
import { ShowData, TableData, WindowDialog } from "../../shared/components";
import { DialogProvider } from "../../contexts/DialogContext";

export const Home = () => {

    return (
        <LayoutBase>
            <Box>
                <DialogProvider>
                    <WindowDialog>
                        <ShowData></ShowData>
                    </WindowDialog>
                </DialogProvider>
            </Box>
        </LayoutBase>
    );
};