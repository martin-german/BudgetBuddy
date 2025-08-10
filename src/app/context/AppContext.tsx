"use client"
import { createContext,useState,ReactNode, useContext } from "react"

// Define the shape of the context state
interface AppState {
    openExpenseDialogObject:{
        openExpenseDialog: boolean;
        setOpenExpenseDialog: React.Dispatch<React.SetStateAction<boolean>>;
    }
}

// Create a default state
const defaultState: AppState = {
    openExpenseDialogObject: {
        openExpenseDialog: false,
        setOpenExpenseDialog: () => {},
    },
};

// Create the context with default values
const AppContext = createContext<AppState>(defaultState)

// Create a provider component
export const AppProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [openExpenseDialog, setOpenExpenseDialog] = useState(false);
    return (
        <AppContext.Provider
        value={{
            openExpenseDialogObject: { openExpenseDialog, setOpenExpenseDialog},
        }}
        > {children}
    </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
