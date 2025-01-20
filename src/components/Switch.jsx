import styles from "./Switch.module.css";

function Switch({ register, value }) {
    return (
        <div
            className={`${styles.switch} ${
                styles[value ? "yearly" : "monthly"]
            }`}
        >
            <span>monthly</span>
            <input type="checkbox" id="switch" {...register("isYearlyPlan")} />
            <label htmlFor="switch"></label>
            <span>yearly</span>
        </div>
    );
}

export default Switch;
