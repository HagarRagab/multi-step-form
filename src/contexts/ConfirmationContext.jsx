import { createContext, useContext, useReducer } from "react";

const initialState = {
    isConfirmed: false,
    isLoading: false,
};

function reducer(state, action) {
    switch (action.type) {
        case "sendingData":
            return { ...state, isLoading: true };
        case "confirmed":
            return { ...state, isConfirmed: true, isLoading: false };
        case "rejected":
            return { ...initialState };

        default:
            throw new Error("Unknown type");
    }
}

const StepsContext = createContext();

function ConfirmProvider({ children }) {
    const [{ isConfirmed, isLoading }, dispatch] = useReducer(
        reducer,
        initialState
    );

    return (
        <StepsContext.Provider
            value={{
                isConfirmed,
                isLoading,
                dispatch,
            }}
        >
            {children}
        </StepsContext.Provider>
    );
}

function useConfirm() {
    const context = useContext(StepsContext);
    if (context === undefined)
        throw new Error("StepsContext was used outside ConfirmProvider");

    return context;
}

export { ConfirmProvider, useConfirm };
