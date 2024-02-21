import React from 'react';
import closeModal from "../../../assets/images/modals/modalClose.svg"
import styles from "../HeaderModal/HeaderModal.module.scss"
function HeaderModal({text, onClick}) {
    return (
        <div className={styles.headerModal}>
            <h2>{text}</h2>
            <button className={styles.btnClose} onClick={onClick}><img src={closeModal} alt="closeModal-img"/></button>
        </div>
    );
}

export default HeaderModal;