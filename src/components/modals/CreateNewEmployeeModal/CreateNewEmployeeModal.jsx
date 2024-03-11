import React from "react";
import { hideModal } from "../../../redux/slices/modalSlice";
import mdi_closeBlack from "../../../assets/images/appHeader/mdi_closeBlack.svg";
import { Formik, Form, Field } from "formik";
import classNames from "classnames";
import styles from "./CreateNewEmployeeModal.module.scss";
import { useDispatch } from "react-redux";

const CreateNewEmployeeModal = () => {
  const dispatch = useDispatch();
  const handleModalClose = () => {
    dispatch(hideModal());
  };

  const initialValues = {
    username: "",
    password: "",
    firstname: "",
    email: "",
    role: "",
    birthday: "",
    workSchedule: {
      dayOfWeek: "",
      startTime: "",
      endTime: "",
    },
    branchId: 0,
  };

  const roleOptions = ["Официант", "Бармен"];
  const branchOptions = ["Bishkek Park", "Dzerzhinka"];

  return (
    <div className={styles.modal}>
      <div className={styles.modal__overlay}>
        <div className={styles.modal__wrapper}>
          <div className={styles.modal__content}>
            <div className={styles.modal__header}>
              <h3 className={styles.modal__title}>Новый сотрудник</h3>
              <img
                src={mdi_closeBlack}
                alt="Close"
                onClick={handleModalClose}
                className={styles.modal__close}
              />
            </div>
            <p className={styles.modal__subtitle}>Личные данные</p>

            <Formik initialValues={initialValues}>
              <Form>
                <div className={styles.input_wrapper}>
                  <label htmlFor="username" className={styles.input_label}>
                    Логин
                  </label>
                  <Field
                    type="text"
                    name="username"
                    placeholder="Придумайте логин"
                    className={classNames(styles.input, styles.input_name)}
                  />
                </div>
                <div className={styles.input_wrapper}>
                  <label htmlFor="password" className={styles.input_label}>
                    Пароль
                  </label>
                  <Field
                    type="text"
                    name="password"
                    placeholder="Придумайте пароль"
                    className={classNames(styles.input, styles.input_name)}
                  />
                </div>
                <div className={styles.input_wrapper}>
                  <label htmlFor="firstname" className={styles.input_label}>
                    Имя
                  </label>
                  <Field
                    type="text"
                    name="firstname"
                    placeholder="Как зовут сотрудника"
                    className={classNames(styles.input, styles.input_name)}
                  />
                </div>
                <div className={styles.input_wrapper}>
                  <label htmlFor="email" className={styles.input_label}>
                    Электронная почта
                  </label>
                  <Field
                    type="text"
                    name="email"
                    placeholder="Напишите электронную почту сотрудника"
                    className={classNames(styles.input, styles.input_name)}
                  />
                </div>
                <div className={styles.input_wrapper}>
                  <label htmlFor="role" className={styles.input_label}>
                    Должность
                  </label>
                  <Field
                    as="select"
                    name="role"
                    placeholder="Выберите должность"
                    className={classNames(styles.input, styles.input_name)}
                  >
                    {/* <option>Выберите должность</option> */}

                    {roleOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </Field>
                </div>

                <div className={styles.input_wrapper}>
                  <label htmlFor="birthday" className={styles.input_label}>
                    День рождения
                  </label>
                  <Field
                    type="text"
                    name="birthday"
                    placeholder="01.01.1991"
                    className={classNames(styles.input, styles.input_name)}
                  />
                </div>

                <div className={styles.input_wrapper}>
                  <label htmlFor="branchId" className={styles.input_label}>
                    Филиал
                  </label>
                  <Field
                    as="select"
                    name="branchId"
                    placeholder="Выберите филиал"
                    className={classNames(styles.input, styles.input_name)}
                  >
                    {/* <select>
                      <option value="">мл</option>
                      {branchOptions.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select> */}

                    <option value="" selected>
                      Выберите филиал
                    </option>
                    {branchOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </Field>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewEmployeeModal;
