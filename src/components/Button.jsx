import { useInfo } from "../contexts/InfoContext";
import styles from "./Button.module.css";

function Button({ children, type, onSendData }) {
    const { dispatch } = useInfo();

    function handleClick() {
        switch (type) {
            case "primary":
                break;
            case "back":
                dispatch({ type: "goToPrevStep" });
                break;
            case "confirm":
                onSendData();
                break;
            default:
                throw new Error("Unknown button type");
        }
    }

    return (
        <button
            className={`${styles.btn} ${styles[type]}`}
            onClick={handleClick}
        >
            {children}
        </button>
    );
}

export default Button;
