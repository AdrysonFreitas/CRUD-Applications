import { AddButton } from "../buttons";
import { TableData } from "./TableData";

export interface UserData {
    code: number | null;
    name: string;
    progress: number | null;
    fruit: string;
}

export function createUserData(
    code: number | null,
    name: string,
    progress: number | null,
    fruit: string,
): UserData {
    return { code, name, progress, fruit };
}

export const rowsDefault = [
    createUserData(1, 'Tillie Knox', 20, 'Avocado'),
    createUserData(2, 'Tymon Xiong', 40, 'Apple'),
    createUserData(3, 'Rebekka Farrow', 69, 'Pineapple'),
    createUserData(4, 'Lottie Dalby', 90, 'Pear'),
    createUserData(5, 'Kerys Guzman', 10, 'Orange'),
    createUserData(6, 'Eren Fields', 12, 'Banana'),
    createUserData(7, 'Ellouise Jaramillo', 14, 'Tangerine'),
    createUserData(8, 'Leonidas Soto', 59, 'Orange'),
    createUserData(9, 'Lewys Sheridan', 87, 'Cashew'),
    createUserData(10, 'Allison Swift', 23, 'Tangerine'),
]

export const ShowData = () => {
    return (
        <>
            <TableData>
                <AddButton></AddButton>
            </TableData>
        </>
    )
}