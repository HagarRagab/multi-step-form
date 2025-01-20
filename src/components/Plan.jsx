import { useInfo } from "../contexts/InfoContext";
import styles from "./Plan.module.css";

function Plan({ plan, register, isYearlyPlan }) {
    const { selectedPlan } = useInfo();
    const { planName, imgSrc } = plan;

    const planDuration = isYearlyPlan ? "yearly" : "monthly";
    const durationStr = isYearlyPlan ? "yr" : "mo";

    return (
        <>
            <input
                id={planName}
                name="plan"
                type="radio"
                className={styles.planInput}
                value={planName}
                defaultChecked={planName === selectedPlan}
                {...register("plan")}
            />
            <label htmlFor={planName} className={styles.planLabel}>
                <img src={imgSrc} alt={planName} />
                <div>
                    <h2>{planName}</h2>
                    <p className={styles.amount}>
                        {`$${plan[planDuration]}/${durationStr}`}
                    </p>
                    {planDuration === "yearly" && (
                        <p className={styles.free}>2 months free</p>
                    )}
                </div>
            </label>
        </>
    );
}

export default Plan;
