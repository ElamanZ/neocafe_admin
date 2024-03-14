import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { showModal, hideModal } from "../../../redux/slices/modalSlice";
import mdi_closeBlack from "../../../assets/images/appHeader/mdi_closeBlack.svg";
import classNames from "classnames";
import styles from "./CreateNewProductModal.module.scss";

const CreateNewProductModal = ({ isModalOpen }) => {
  const dropDownOptions = ["гр", "мл", "л", "кг"];
  const categoryOptions = ["Готовая продукция", "Сырье"];
  const branchOptions = ["Филармония", "Дзержинка", "ЦУМ"];

  const dispatch = useDispatch();
  const initialValues = {
    productName: "",
  };

  const handleModalClose = () => {
    dispatch(hideModal());
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modal__overlay}>
        <div className={styles.modal__wrapper}>
          <div className={styles.modal__content}>
            <div className={styles.modal__header}>
              <h3 className={styles.modal__title}>Новая продукция</h3>
              <img
                src={mdi_closeBlack}
                alt="Close"
                onClick={handleModalClose}
                className={styles.modal__close}
              />
            </div>

            <p className={styles.modal__subtitle}>
              Наименование, категория и стоимость
            </p>

            <Formik initialValues={initialValues}>
              <Form>
                <div className={styles.input_wrapper}>
                  <label htmlFor="name" className={styles.input_label}>
                    Наименование
                  </label>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Введите название продукции"
                    className={classNames(styles.input, styles.input_name)}
                  />
                </div>

                <div className={styles.inputs_container}>
                  <div className={styles.input_wrapper}>
                    <label htmlFor="amount" className={styles.input_label}>
                      Кол-во (в гр, мл, л, кг)
                    </label>
                    <div className={styles.amount_wrapper}>
                      <Field
                        placeholder="70"
                        name="amount"
                        className={classNames(
                          styles.input,
                          styles.amount_input
                        )}
                      />
                      <Field
                        as="select"
                        name="selectOption"
                        className={classNames(
                          styles.input,
                          styles.amount_choose
                        )}
                      >
                        <option value="">мл</option>
                        {dropDownOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </Field>
                    </div>
                  </div>

                  <div className={styles.input_wrapper}>
                    <label htmlFor="category" className={styles.input_label}>
                      Категория
                    </label>
                    <Field
                      as="select"
                      name="selectCategoryOption"
                      className={classNames(
                        styles.input,
                        styles.category_input
                      )}
                    >
                      <option>Выберите категорию</option>
                      {categoryOptions.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </Field>
                  </div>

                  <div className={styles.input_wrapper}>
                    <label htmlFor="limit" className={styles.input_label}>
                      Минимальный лимит
                    </label>
                    <Field
                      type="text"
                      name="limit"
                      placeholder="Например 2кг"
                      className={classNames(styles.input, styles.limit_input)}
                    />
                  </div>

                  <div className={styles.input_wrapper}>
                    <label htmlFor="date" className={styles.input_label}>
                      Дата прихода
                    </label>
                    <Field
                      type="text"
                      name="date"
                      placeholder="Напишите дату"
                      className={classNames(styles.input, styles.date_input)}
                    />
                  </div>

                  <div className={styles.input_wrapper}>
                    <label htmlFor="branch" className={styles.input_label}>
                      Филиал
                    </label>
                    <Field
                      as="select"
                      name="selectBranchOption"
                      className={classNames(styles.input, styles.branch_input)}
                    >
                      <option>Выберите филиал</option>
                      {branchOptions.map((option, index) => (
                        <option
                          key={index}
                          value={option}
                          className={styles.branch_option}
                        >
                          {option}
                        </option>
                      ))}
                    </Field>
                  </div>
                </div>

                <div className={styles.modal__btns}>
                  <button
                    className={classNames(styles.modal__btn, styles.cancel_btn)}
                    onClick={handleModalClose}
                  >
                    Отмена
                  </button>
                  <button
                    className={classNames(styles.modal__btn, styles.submit_btn)}
                  >
                    Сохранить
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewProductModal;
