import styles from "./Form.module.css";
import Navigation from "./Navigation";

function Form({ children, onSubmit, className = "", step }) {
    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <div className={className}>{children}</div>
            <Navigation step={step} />
        </form>
    );
}

export default Form;
