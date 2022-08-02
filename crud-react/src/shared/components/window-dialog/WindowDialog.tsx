import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from "@mui/material"
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import { IProviderProps, useDialogContext } from "../../../contexts/DialogContext";

export const WindowDialog = (props: IProviderProps) => {
    const { open, handleClose, buttonType, element, handleInputChange, handleSubmit } = useDialogContext();
    console.log(element, "userdata in dialog")

    return (
        <>
            <Box>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    disableEscapeKeyDown={true}
                    sx={{
                        "& .MuiDialog-container": {
                            "& .MuiPaper-root": {
                                width: "100%",
                                maxWidth: "300px"
                            },
                        },
                    }}
                >
                    <DialogTitle>
                        {buttonType === "add" &&
                            <Typography color="primary" sx={{ textTransform: "uppercase", fontSize: "20px" }}>Add user</Typography>
                        }
                        {buttonType === "edit" &&
                            <Typography color="primary" sx={{ textTransform: "uppercase", fontSize: "20px" }}>Edit user</Typography>
                        }
                    </DialogTitle>
                    <form onSubmit={handleSubmit}>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Name"
                                type="text"
                                fullWidth
                                variant="filled"
                                value={element.name}
                                onChange={handleInputChange}
                                inputProps={{ style: { fontSize: 14 } }}
                                InputLabelProps={{ style: { fontSize: 14 } }}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="progress"
                                label="Progress (0 to 100)"
                                type="number"
                                fullWidth
                                variant="filled"
                                value={element.progress === null ? undefined : element.progress}
                                onChange={handleInputChange}
                                inputProps={{ style: { fontSize: 14 }, max: 100, min: 0 }}
                                InputLabelProps={{ style: { fontSize: 14 } }}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="fruit"
                                label="Fruit"
                                type="text"
                                fullWidth
                                variant="filled"
                                value={element.fruit}
                                onChange={handleInputChange}
                                inputProps={{ style: { fontSize: 14 } }}
                                InputLabelProps={{ style: { fontSize: 14 } }}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Box width="100%" display="flex" flexDirection="row" justifyContent='center' sx={{ pb: "7px" }}>
                                <Button color="error" sx={{ textTransform: "none" }} onClick={handleClose}><CloseIcon /> Cancel</Button>
                                {buttonType === "add" &&
                                    <Button color="primary" sx={{ textTransform: "none" }} onClick={handleClose} type="submit"><CheckIcon /> Add</Button>
                                }
                                {buttonType === "edit" &&
                                    <Button color="primary" sx={{ textTransform: "none" }} onClick={handleClose} type="submit"><CheckIcon /> Edit</Button>
                                }
                            </Box>
                        </DialogActions>
                    </form>
                </Dialog>
            </Box>

            <Box>
                {props.children}
            </Box>
        </>
    );

}