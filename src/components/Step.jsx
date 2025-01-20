import { useInfo } from "../contexts/InfoContext";
import styles from "./Step.module.css";

function Step({ step, stepNum }) {
    const { currentStepIndex } = useInfo();

    return (
        <div className={styles.step}>
            <span className={stepNum === currentStepIndex ? styles.active : ""}>
                {stepNum + 1}
            </span>
            <div>
                <p>step {stepNum + 1}</p>
                <h2>{step.stepTitle}</h2>
            </div>
        </div>
    );
}

export default Step;
