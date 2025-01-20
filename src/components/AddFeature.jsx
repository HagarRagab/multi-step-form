import { useInfo } from "../contexts/InfoContext";
import styles from "./AddFeature.module.css";

function AddFeature({ feature, register }) {
    const { features, planDuration, durationStr } = useInfo();

    return (
        <div className={`${styles.option}`}>
            <input
                id={feature.id}
                name="add-ons"
                type="checkbox"
                defaultChecked={features[feature.id]}
                {...register(feature.id)}
            />
            <label htmlFor={feature.id}>
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
            </label>
            <span>{`+$${feature[planDuration]}/${durationStr}`}</span>
        </div>
    );
}

export default AddFeature;
