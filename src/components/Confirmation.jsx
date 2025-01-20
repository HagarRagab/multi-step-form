import styles from "./Confirmation.module.css";
import thankImg from "../assets/images/icon-thank-you.svg";

function Confirmation() {
    return (
        <div className={`mainContent ${styles.thankScreen}`}>
            <img
                src={thankImg}
                alt="check mark in a circle"
                className={styles.icon}
            />
            <h1 className={styles.header}>Thank you!</h1>
            <p className={styles.text}>
                Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com.
            </p>
        </div>
    );
}

export default Confirmation;
