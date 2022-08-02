import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDialogContext } from "../../../contexts/DialogContext";
import { UserData } from "../table/ShowData";

interface Props {
    element: UserData;
}

export const DeleteButton = (props: Props) => {
    const { handleDelete} = useDialogContext();
    const { element } = props;

    return (
        <>
            <IconButton
                aria-label="delete"
                color="error"
                onClick={function(event){ handleDelete(element) }}
            >
                <DeleteIcon />
            </IconButton>
        </>
    );
};


