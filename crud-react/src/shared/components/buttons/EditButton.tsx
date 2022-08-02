import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useDialogContext } from "../../../contexts/DialogContext";
import { UserData } from "../table/ShowData";

interface Props {
    element: UserData;
}

export const EditButton = (props: Props) => {
    const { handleClickOpen, handleButtonType } = useDialogContext();
    const { element } = props;
    

    return (
        <>
            <IconButton
                aria-label="edit"
                color="primary"
                onClick={function(event){ handleClickOpen(element); handleButtonType("edit"); }}
            >
                <EditIcon />
            </IconButton>
        </>
    );
};


