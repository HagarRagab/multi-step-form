import { useInfo } from "../contexts/InfoContext";
import { useConfirm } from "../contexts/ConfirmationContext";
import styles from "./Navigation.module.css";
import Button from "./Button";

const BASE_SERVER = "http://localhost:8000";

// step => first, mid, last
function Navigation({ step }) {
    const { dispatch } = useConfirm();

    const {
        userName,
        email,
        phoneNumber,
        selectedPlan,
        isYearlyPlan,
        selectedFeatures,
        selectedPlanCost,
        totalCost,
    } = useInfo();

    async function sendData() {
        try {
            dispatch({ type: "sendingData" });
            const res = await fetch(`${BASE_SERVER}/subscriptions`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userName,
                    email,
                    phoneNumber,
                    selectedPlan,
                    isYearlyPlan,
                    selectedPlanCost,
                    selectedFeatures,
                    totalCost,
                }),
            });
            if (!res.ok) throw new Error("Failed to send your data.");
            else dispatch({ type: "confirmed" });
        } catch {
            dispatch({ type: "rejected" });
            alert("Something went wrong. Please try again later.");
        }
    }

    return (
        <>
            <div className={styles.actionsContainer}>
                {step === "first" && <Button type="primary">next step</Button>}
                {step === "mid" && (
                    <>
                        <Button type="back">go back</Button>
                        <Button type="primary">next step</Button>
                    </>
                )}
                {step === "last" && (
                    <>
                        <Button type="back">go back</Button>
                        <Button type="confirm" onSendData={sendData}>
                            confirm
                        </Button>
                    </>
                )}
            </div>
        </>
    );
}

export default Navigation;
