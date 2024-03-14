import React from "react";
import styles from "./DeleteBranchModal.module.scss";
import mdi_closeBlack from "../../../assets/images/appHeader/mdi_closeBlack.svg";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { hideModal } from "../../../redux/slices/modalSlice";
import { logoutSuccess } from "../../../redux/slices/UserSlice";
import { useNavigate, NavLink } from "react-router-dom";

const DeleteBranchModal = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const handleModalClose = () => {
    dispatch(hideModal());
  };

  // const handleLogout = () => {
  //   dispatch(logoutSuccess());
  //   navigate("/login");
  // };

  return (
    <div className={styles.modal}>
      <div className={styles.modal__overlay}>
        <div className={styles.modal__wrapper}>
          <div className={styles.modal__content}>
            <div className={styles.modal__header}>
              <h3>Выход</h3>
              <img
                src={mdi_closeBlack}
                alt="Close"
                className={styles.modal__close}
                onClick={handleModalClose}
              />
            </div>
            <p>Вы действительно хотите выйти?</p>

            <div className={styles.modal__btns}>
              <button
                className={classNames(styles.modal__btn, styles.modal__yes)}
                // onClick={handleLogout}
              >
                Да
              </button>
              <button
                className={classNames(styles.modal__btn, styles.modal__no)}
                onClick={handleModalClose}
              >
                Нет
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteBranchModal;
