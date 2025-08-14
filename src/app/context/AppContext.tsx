"use client"
import { createContext,useState,ReactNode, useContext } from "react"
import { allIconsArray } from "../data/AllIcons";
import { IconData } from "../types/type";

// Define the shape of the context state
interface AppState {
    openExpenseDialogObject:{
        openExpenseDialog: boolean;
        setOpenExpenseDialog: React.Dispatch<React.SetStateAction<boolean>>;
    },
    openIconDialogObject:{
        openIconDialog: boolean;
        setOpenIconDialog: React.Dispatch<React.SetStateAction<boolean>>;
    },
    allIconsArrayObject: {
        allIcons: IconData[];
        setAllIcons: React.Dispatch<React.SetStateAction<IconData[]>>;
    }

}

// Create a default state
const defaultState: AppState = {
    openExpenseDialogObject: {
        openExpenseDialog: false,
        setOpenExpenseDialog: () => {},
    },
    openIconDialogObject:{
        openIconDialog: false,
        setOpenIconDialog: () => {},
    },
    allIconsArrayObject : {
        allIcons: allIconsArray,
        setAllIcons: () => {},
    }
};

// Create the context with default values
const AppContext = createContext<AppState>(defaultState)

// Create a provider component
export const AppProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [openExpenseDialog, setOpenExpenseDialog] = useState(false);
    const [openIconDialog, setOpenIconDialog] = useState(false);
    const [allIcons, setAllIcons] = useState(allIconsArray);
    return (
        <AppContext.Provider
        value={{
            openExpenseDialogObject: { openExpenseDialog, setOpenExpenseDialog},
            openIconDialogObject: { openIconDialog, setOpenIconDialog},
            allIconsArrayObject: {allIcons,setAllIcons}
        }}
        > {children}
    </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
