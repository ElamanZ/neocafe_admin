import styles from "../buttons/Button.module.scss"
export default function Button({ children, disabled, isModalButton, onClick, isModalButtonBorder }) {
    const buttonClassName = `${styles.button} ${isModalButtonBorder? styles.buttonBorder__modal : styles.button__modal} ${isModalButton ? styles.button__modal : styles.button__login}`;
    return (
        <button className={buttonClassName} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    );
}
