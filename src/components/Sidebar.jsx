import styles from "./sidebar.module.css";
import Step from "./Step";

function Sidebar({ steps }) {
    return (
        <aside className={styles.sidebar}>
            {steps.map((step, i) => (
                <Step step={step} stepNum={i} key={i} />
            ))}
        </aside>
    );
}

export default Sidebar;
