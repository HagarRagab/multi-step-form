import styles from "./ContentHeader.module.css";

function ContentHeader({ children, title }) {
    return (
        <div className={styles.header}>
            <h1>{title}</h1>
            <p>{children}</p>
        </div>
    );
}

export default ContentHeader;
