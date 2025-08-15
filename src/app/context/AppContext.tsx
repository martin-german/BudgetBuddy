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
    },
    openWalletDropDownObject: {
        openWalletDropDown: boolean;
        setOpenWalletDropDown: React.Dispatch<React.SetStateAction<boolean>>;
    },
    walletDropDownPositionsObject : {
        walletDropDownPositions: {top:number; left:number; width?: number};
        setWalletDropDownPositions: React.Dispatch<
            React.SetStateAction<{ top: number; left: number; width?: number}>
        >;
    };
    openWalletDialogObject: {
        openWalletDialog:boolean;
        setOpenWalletDialog: React.Dispatch<React.SetStateAction<boolean>>;
    }

};

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
    },
    openWalletDropDownObject: {
        openWalletDropDown:false,
        setOpenWalletDropDown: () => {},
    },
    walletDropDownPositionsObject:{
        walletDropDownPositions: {top: 0, left: 0},
        setWalletDropDownPositions: () => {},
    },
    openWalletDialogObject: {
        openWalletDialog: false,
        setOpenWalletDialog: () => {}
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

    const [openWalletDropDown, setOpenWalletDropDown] = useState(false);
    const [walletDropDownPositions, setWalletDropDownPositions] = useState({
        top:0,
        left:0,
    })

    const [openWalletDialog, setOpenWalletDialog] = useState(false);

    return (
        <AppContext.Provider
        value={{
            openExpenseDialogObject: { openExpenseDialog, setOpenExpenseDialog},
            openIconDialogObject: { openIconDialog, setOpenIconDialog},
            allIconsArrayObject: { allIcons,setAllIcons },

            openWalletDropDownObject: { openWalletDropDown,setOpenWalletDropDown },

            walletDropDownPositionsObject: { walletDropDownPositions, setWalletDropDownPositions },
            
            openWalletDialogObject: { openWalletDialog, setOpenWalletDialog }
        }}
        > {children}
    </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
