import { createContext, useContext, useReducer } from "react";
import { plans, features as featuresData } from "../purchaseData";

const initialState = {
    userName: "",
    email: "",
    phoneNumber: "",
    currentStepIndex: 0,
    selectedPlan: "arcade",
    isYearlyPlan: false,
    features: {},
};

function reducer(state, action) {
    switch (action.type) {
        case "addUserInfo":
            return {
                ...state,
                userName: action.payload.userName,
                email: action.payload.email,
                phoneNumber: action.payload.phoneNumber,
                currentStepIndex: state.currentStepIndex + 1,
            };
        case "selectPlan":
            return {
                ...state,
                selectedPlan: action.payload.selectedPlan,
                isYearlyPlan: action.payload.isYearlyPlan,
                currentStepIndex: state.currentStepIndex + 1,
            };
        case "addFeatures":
            return {
                ...state,
                features: {
                    ...action.payload,
                },
                currentStepIndex: state.currentStepIndex + 1,
            };
        case "goToPrevStep":
            return { ...state, currentStepIndex: state.currentStepIndex - 1 };
        case "changePlanDuration":
            return {
                ...state,
                isYearlyPlan: !state.isYearlyPlan,
            };

        default:
            throw new Error("Unknown type");
    }
}

const InfoContext = createContext();

function InfoProvider({ children }) {
    const [
        {
            currentStepIndex,
            userName,
            email,
            phoneNumber,
            selectedPlan,
            isYearlyPlan,
            features,
        },
        dispatch,
    ] = useReducer(reducer, initialState);

    const planDuration = isYearlyPlan ? "yearly" : "monthly";
    const durationStr = isYearlyPlan ? "yr" : "mo";

    const selectedFeaturesIds = Object.entries(features)
        .filter(([, value]) => value)
        .map(([key]) => key);
    const selectedFeatures = selectedFeaturesIds.map((id) =>
        featuresData.find((current) => current.id === id)
    );
    const totalFeaturesCost = selectedFeaturesIds
        .map((id) => featuresData.find((current) => current.id === id))
        .reduce((acc, cur) => acc + cur[planDuration], 0);

    const selectedPlanCost = plans.find(
        (current) => current.planName === selectedPlan
    )[planDuration];

    const totalCost = selectedPlanCost + totalFeaturesCost;

    return (
        <InfoContext.Provider
            value={{
                currentStepIndex,
                userName,
                email,
                phoneNumber,
                selectedPlan,
                isYearlyPlan,
                planDuration,
                durationStr,
                selectedFeaturesIds,
                selectedFeatures,
                selectedPlanCost,
                totalCost,
                features,
                dispatch,
            }}
        >
            {children}
        </InfoContext.Provider>
    );
}

function useInfo() {
    const context = useContext(InfoContext);
    if (context === undefined)
        throw new Error("InfoContext was used outside InfoProvider");

    return context;
}

export { InfoProvider, useInfo };
