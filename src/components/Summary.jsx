import { useInfo } from "../contexts/InfoContext";
import styles from "./Summary.module.css";
import ContentHeader from "./ContentHeader";
import Feature from "./Feature";
import Navigation from "./Navigation";

function Summary() {
    const {
        selectedPlan,
        planDuration,
        durationStr,
        dispatch,
        selectedFeatures,
        selectedPlanCost,
        totalCost,
    } = useInfo();

    return (
        <div className="mainContent">
            <ContentHeader title="Finishing up">
                Double-check everything looks Ok before confirming.
            </ContentHeader>
            <div className={styles.summary}>
                <div>
                    <div className={styles.details}>
                        <div>
                            <h2>
                                {selectedPlan} ({planDuration})
                            </h2>
                            <button
                                className={styles.change}
                                onClick={() =>
                                    dispatch({ type: "changePlanDuration" })
                                }
                            >
                                Change
                            </button>
                        </div>
                        <span className={styles.planPrice}>
                            ${selectedPlanCost}/{durationStr}
                        </span>
                        {selectedFeatures.map((feature) => (
                            <Feature
                                key={feature.id}
                                feature={feature}
                                durationStr={durationStr}
                            />
                        ))}
                    </div>
                    <div className={styles.total}>
                        <p>Total (per month)</p>
                        <span>
                            +${totalCost}/{durationStr}
                        </span>
                    </div>
                </div>
                <Navigation step="last" />
            </div>
        </div>
    );
}

export default Summary;
