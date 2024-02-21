import styles from "../buttons/Button.module.scss"
export default function Button({ children, disabled, isModalButton, onClick }) {
    const buttonClassName = `${styles.button} ${isModalButton ? styles.button__modal : styles.button__login}`;
    return (
        <button className={buttonClassName} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    );
}
