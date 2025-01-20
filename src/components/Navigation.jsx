import { useConfirm } from "../contexts/ConfirmationContext";
import styles from "./Navigation.module.css";
import Button from "./Button";

// step => first, mid, last
function Navigation({ step }) {
    const { dispatch } = useConfirm();

    function sendData() {
        dispatch({ type: "sendingData" });
        setTimeout(() => {
            dispatch({ type: "confirmed" });
        }, 1500);
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
