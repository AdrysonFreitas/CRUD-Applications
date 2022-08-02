import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TablePagination, useTheme, Button, IconButton, LinearProgress, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { Box } from "@mui/system";
import { IProviderProps, useDialogContext } from "../../../contexts/DialogContext";
import { DeleteButton, EditButton } from "../buttons";
import { rowsDefault, UserData, createUserData } from "./ShowData";

interface Column {
    id: 'code' | 'name' | 'progress' | 'fruit';
    label: string;
    minWidth?: number;
    align?: 'center';
    format?: (value: number) => string;
};

const columns: readonly Column[] = [
    { id: 'code', label: 'ID', minWidth: 25 },
    { id: 'name', label: 'Name', minWidth: 25 },
    {
        id: 'progress',
        label: 'Progress',
        minWidth: 25,
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'fruit',
        label: 'Fruit',
        minWidth: 25,
    },
];

export const TableData = (props: IProviderProps) => {
    const { rowsContext, handleRows } = useDialogContext();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(20);
    const [rows,setRows] = React.useState(rowsDefault);
    const theme = useTheme()
    let colorvalue = "#222222"
    
    console.log(rows, "entrou no table data")

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <>
            {props.children}

            <Box>
                <Paper sx={{ width: '100%', overflow: 'hidden', mt: '2%'}} elevation={7}>
                    <TableContainer>
                        <Table>
                            <TableHead sx={{ textTransform: "uppercase" }}>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{
                                                minWidth: column.minWidth + '%',
                                                color: theme.palette.primary.main,
                                                borderBottomColor: theme.palette.primary.main,
                                                borderBottomWidth: "2px",
                                                fontSize: "12px",
                                                padding: column.id === "code" ? "0px 0px 0px 24px" : "0px"

                                            }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                    <TableCell align="left" style={{
                                        color: theme.palette.primary.main,
                                        borderBottomColor: theme.palette.primary.main,
                                        borderBottomWidth: "2px",
                                        fontSize: "12px",
                                        paddingRight: "24px"
                                    }}>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.length !== 0 ? rows
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        return (
                                            <TableRow tabIndex={-1} key={row.code}>
                                                {columns.map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                        <TableCell key={column.id} align={column.align} style={{ color: column.id === "name" ? theme.palette.primary.main : colorvalue, height: "48px", padding: column.id === "code" ? "0px 24px" : "0px 0px" }}>
                                                            {column.id === "progress" && typeof value === 'number'
                                                                ? <LinearProgress variant="determinate" value={value} color="secondary" sx={{ width: "70%" }} />
                                                                : value}
                                                        </TableCell>
                                                    );
                                                })}
                                                <TableCell style={{ height: "48px", padding: "0px 24px" }}>
                                                    <Box width="100%" display="flex" flexDirection="row" justifyContent='center'>
                                                        <EditButton element={row}></EditButton>
                                                        <DeleteButton element={row}></DeleteButton>
                                                    </Box>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    }) : <TableRow>
                                            <TableCell colSpan={5} sx={{color: colorvalue, height: "48px", padding: "0px 24px" }}>
                                                No results.
                                            </TableCell>
                                        </TableRow>}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 40, 60, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage} />

                </Paper>
            </Box>
            {useEffect(() => {setPage(0),setRows(rowsContext)}, [handleRows])}
        </>
    );
};