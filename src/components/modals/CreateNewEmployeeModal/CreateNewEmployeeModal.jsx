import React, { useState } from "react";
import { hideModal } from "../../../redux/slices/modalSlice";
import mdi_closeBlack from "../../../assets/images/appHeader/mdi_closeBlack.svg";
import { Formik, Form, Field } from "formik";
import classNames from "classnames";
import styles from "./CreateNewEmployeeModal.module.scss";
import { useDispatch } from "react-redux";
import { TimePicker } from "antd";
import ruRu from "antd/es/locale/ru_RU";

const CreateNewEmployeeModal = () => {
  const [schedule, setSchedule] = useState({
    Понедельник: { checked: false, startTime: null, endTime: null },
    Вторник: { checked: false, startTime: null, endTime: null },
    Среда: { checked: false, startTime: null, endTime: null },
    Четверг: { checked: false, startTime: null, endTime: null },
    Пятница: { checked: false, startTime: null, endTime: null },
    Суббота: { checked: false, startTime: null, endTime: null },
    Воскресенье: { checked: false, startTime: null, endTime: null },
  });

  const dispatch = useDispatch();
  const handleModalClose = () => {
    dispatch(hideModal());
  };

  const handleTimeChange = (time, day, type) => {
    setSchedule({
      ...schedule,
      [day]: {
        ...schedule[day],
        [type]: time,
      },
    });
  };

  const handleCheckboxChange = (e, day) => {
    setSchedule({
      ...schedule,
      [day]: {
        ...schedule[day],
        checked: e.target.checked,
      },
    });
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

                <h3 className={styles.schedule_title}>График работы</h3>

                <div className={styles.schedule_type}>
                  <h4>День недели</h4>
                  <h4>Время работы</h4>
                </div>
                <div className={styles.schedule_line}></div>

                {Object.entries(schedule).map(([day, details]) => (
                  <div key={day} className={styles.schedule}>
                    <div className={styles.dayAndCheckbox}>
                      <div className={styles.day}>{day}</div>
                      <input
                        type="checkbox"
                        name={`schedule[${day}].checked`}
                        checked={details.checked}
                        onChange={(e) => handleCheckboxChange(e, day)}
                        className={styles.checkbox}
                      />
                    </div>
                    <div className={styles.timePicker_wrapper}>
                      {details && (
                        <TimePicker
                          name={`schedule[${day}].startTime`}
                          locale={ruRu}
                          format="HH:mm"
                          placeholder="11:00"
                          onChange={(time) =>
                            handleTimeChange(time, day, "startTime")
                          }
                          className={styles.timePicker}
                        />
                      )}
                      <span className={styles.timePicker_line}> - </span>
                      {details && (
                        <TimePicker
                          name={`schedule[${day}].endTime`}
                          locale={ruRu}
                          format="HH:mm"
                          placeholder="22:00"
                          onChange={(time) =>
                            handleTimeChange(time, day, "endTime")
                          }
                          className={styles.timePicker}
                          inputStyle={{
                            fontWeight: "400",
                            fontSize: "20px",
                            color: "#2a3440",
                          }}
                        />
                      )}
                    </div>
                  </div>
                ))}

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

export default CreateNewEmployeeModal;
