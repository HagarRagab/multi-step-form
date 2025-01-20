import { useConfirm } from "../contexts/ConfirmationContext";
import { useInfo } from "../contexts/InfoContext";
import styles from "./Main.module.css";
import Confirmation from "./Confirmation";
import Spinner from "./Spinner";

function Main({ steps }) {
    const { currentStepIndex } = useInfo();
    const { isConfirmed, isLoading } = useConfirm();

    return (
        <main className={styles.content}>
            {isLoading ? (
                <Spinner />
            ) : isConfirmed ? (
                <Confirmation />
            ) : (
                <>{steps[currentStepIndex].element}</>
            )}
        </main>
    );
}

export default Main;
