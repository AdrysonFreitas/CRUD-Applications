import React, { useContext, useState } from "react";
import { createUserData, rowsDefault, UserData } from "../shared/components/table/ShowData";

export interface IProviderProps {
  children?: any;
}

interface InterfaceDialogContext {
  open: boolean;
  buttonType: string;
  handleClickOpen: (element: UserData | null) => void;
  handleClose: () => void;
  handleButtonType: (buttonType: string) => void;
  element: UserData;
  handleInputChange: (e: any) => void;
  handleSubmit: (event: any) => void;
  rowsContext: UserData[];
  handleRows: (rowsContext: UserData[]) => void;
  handleDelete: (element: UserData) => void;
}

const DialogContext = React.createContext({} as InterfaceDialogContext);

export const useDialogContext = () => {
  return useContext(DialogContext);
}

const nullUserData = createUserData(null, '', null, '');

export const DialogProvider = (props: IProviderProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [buttonType, setButtonType] = useState("add");
  const [element, setElement] = useState<UserData>(nullUserData);
  const [rowsContext, setRows] = useState<UserData[]>(rowsDefault);
  console.log(rowsContext, "rows")
  console.log(element, "userdata in provider")

  const handleClickOpen = (element: UserData | null) => {
    setOpen(true);
    if (element != null) {
      setElement(element);
    } else {
      setElement(nullUserData);
    }
  }

  const handleClose = () => {
    setOpen(false);
    
  };

  const handleButtonType = (buttonType: string) => {
    setButtonType(buttonType);
  };

  const handleRows = (rows: UserData[]) => {
    setRows(rows);
  }

  const handleInputChange = (e: any) => {
    let { id, value } = e.target;
    console.log(id, "name in handle input change");
    console.log(e.target.value, "value in handle input change");

    !isNaN(+e.target.value) ? value = (+value) : value = value;

    setElement({
      ...element,
      [id]: value,
    });
  };

  const handleDelete = (element: UserData) => {
    setElement(element);
    let data = rowsContext;
    data = data.filter(p => p.code !== element.code);
    setRows(data);
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(element, "dados submetidos");
    let tempRows = rowsContext;
    if (tempRows.map(p => p.code).includes(element.code)) {
      let index = 0;
      for (let i = 0; i < tempRows.length; i++) {
        if (tempRows[i].code == element.code) {
          index = i;
        }
      }
      tempRows[index] = element;
    } else if (tempRows.map(p => p.code).includes((tempRows.length)+1)){
      let tempEle = element;
      tempEle.code = (tempRows.length + 2);
      setElement(tempEle);
      tempRows.push(tempEle);
    } else {
      let tempEle = element;
      tempEle.code = (tempRows.length + 1);
      setElement(tempEle);
      tempRows.push(tempEle);
    }
    handleRows(tempRows);
    console.log(rowsContext, "row att");
  };
  return (
    <DialogContext.Provider value={{ open, handleClickOpen, handleClose, buttonType, handleButtonType, element, handleInputChange, handleSubmit, rowsContext, handleRows, handleDelete }}>
      {props.children}
    </DialogContext.Provider>
  );
}
/*
export interface IProviderProps {
  children?: any;
}

type DialogContextState = { open: boolean }

const DialogContextValue = {
  state: { open: true },
  setState: (state: DialogContextState) => { },
};

export const useDialogContext = () => {
  return useContext(DialogContext);
}

export const DialogContext = React.createContext(DialogContextValue);

export const DialogProvider = (props: IProviderProps) => {
  const [state, setState] = useState(DialogContextValue.state);
  console.log(state.open,"i")

  return (
      <DialogContext.Provider value={{ state, setState }}>
          {props.children}
      </DialogContext.Provider>
  );
}; */