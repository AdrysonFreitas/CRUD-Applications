import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useDialogContext } from "../../../contexts/DialogContext";

export const AddButton = () => {
    const { handleClickOpen, handleButtonType } = useDialogContext();

    return (
        <>
            <Button
                color="secondary"
                sx={{ textTransform: "none" }}
                onClick={function(event){ handleClickOpen(null); handleButtonType("add")}}>
                <AddIcon />
                Add User
            </Button>
        </>
    );
};