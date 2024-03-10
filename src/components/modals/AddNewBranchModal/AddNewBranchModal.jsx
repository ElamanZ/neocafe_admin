import React, { useState } from "react";
import { newBranch } from "../../../api";
import {
  Modal,
  Form,
  Input,
  TimePicker,
  Button,
  Checkbox,
  Upload,
  message,
} from "antd";
import ruRu from "antd/es/locale/ru_RU";
// import { Formik, Form, Field } from "formik";
import cloudUpload from "../../../assets/images/modals/cloudUpload.svg";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../../../redux/slices/modalSlice";
import { addBranch } from "../../../redux/slices/branchSlice";
import mdi_closeBlack from "../../../assets/images/appHeader/mdi_closeBlack.svg";
import styles from "./AddNewBranchModal.module.scss";

const { RangePicker } = TimePicker;
// const { Dragger } = Upload;

const AddNewBranchModal = ({ onCancel, isModalOpen }) => {
  const [form] = Form.useForm();
  const [selectedImage, setSelectedImage] = useState(null);
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

  const handleUpload = (info) => {
    if (info.file.status === "done") {
      setSelectedImage(info.file.originFileObj);
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

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

  const onFinish = async (values) => {
    // console.log("Received values:", values);

    // e.preventDefault();

    const formData = new FormData();
    formData.append("branchImg", values.branchImg);
    formData.append("branchName", values.branchName);
    formData.append("branchAddress", values.branchAddress);
    formData.append("phoneNumber", values.phoneNumber);
    formData.append("gisLink", values.gisLink);
    formData.append("tableCount", values.tableCount);

    if (values.schedule) {
      Object.entries(values.schedule).forEach(([day, details]) => {
        formData.append(`schedule[${day}].checked`, details.checked);
        if (details.checked) {
          formData.append(`schedule[${day}].startTime`.details.startTime);
          formData.append(`schedule[${day}].endTime`.details.endTime);
        }
      });
    }

    try {
      const response = await newBranch(formData);
      console.log("New branch added:", response.data);
    } catch (error) {
      console.log("Error adding new branch", error);
    }

    // dispatch(addBranch());
    // handleModalClose();
  };

  const closeIcon = (
    <img
      src={mdi_closeBlack}
      alt="Close"
      className={styles.modalClose_btn}
      onClick={handleModalClose}
    />
  );

  return (
    <Modal
      title={<h3 className={styles.modal__title}>Новый филиал</h3>}
      visible={true}
      open={isModalOpen}
      onCancel={onCancel}
      footer={null}
      className={styles.modal}
      closeIcon={closeIcon}
    >
      <div className={styles.modalContainer}>
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item
            name="branchImg"
            label={
              <p className={styles.imgUploadTitle}>
                Добавьте фотографию филиала
              </p>
            }
          >
            <div className={styles.dragger_container}>
              <Upload.Dragger
                name="file"
                // multiple={false}
                listType="picture"
                // showUploadList={false}
                beforeUpload={() => false}
                showUploadList={{ showRemoveIcon: false }}
                onChange={handleUpload}
                className={styles.draggerInline_container}
              >
                <div>
                  {selectedImage ? (
                    <img
                      src={URL.createObjectURL(selectedImage)}
                      alt="Selected"
                      style={{ maxWidth: "100%" }}
                    />
                  ) : (
                    <>
                      <img src={cloudUpload} />
                      <p className={styles.upload_text}>
                        Перетащите изображение для <br /> изменения или{" "}
                        <span className={styles.upload_link}>обзор</span>
                      </p>
                    </>
                  )}
                </div>
              </Upload.Dragger>
            </div>
          </Form.Item>
          <h3 className={styles.modal__subtitle}>Название и адрес</h3>
          <Form.Item
            name="branchName"
            label={
              <span className={styles.modal__label}>Название кофейни</span>
            }
          >
            <Input
              placeholder="Введите название филиала"
              className={styles.modal__input}
            />
          </Form.Item>
          <Form.Item
            name="branchAddress"
            label={<span className={styles.modal__label}>Адрес</span>}
          >
            <Input
              placeholder="Введите адрес филиала"
              className={styles.modal__input}
            />
          </Form.Item>
          <Form.Item
            name="phoneNumber"
            label={<span className={styles.modal__label}>Номер телефона</span>}
          >
            <Input
              placeholder="Введите номер телефона"
              className={styles.modal__input}
            />
          </Form.Item>
          <Form.Item
            name="gisLink"
            label={<span className={styles.modal__label}>Ссылка на 2ГИС</span>}
          >
            <Input
              placeholder="Вставьте ссылку на 2ГИС"
              className={styles.modal__input}
            />
          </Form.Item>
          <Form.Item
            name="tableCount"
            label={
              <span className={styles.modal__label}>Количество столиков</span>
            }
          >
            <Input
              type="number"
              placeholder="Введите количество столиков"
              className={styles.modal__input}
            />
          </Form.Item>

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
                    onChange={(time) => handleTimeChange(time, day, "endTime")}
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

          <Form.Item>
            <div className={styles.modal__btnWrapper}>
              <Button
                className={classNames(styles.modal__btn, styles.cancel__btn)}
                onClick={handleModalClose}
              >
                Отмена
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                className={classNames(styles.modal__btn, styles.submit__btn)}
              >
                Сохранить
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default AddNewBranchModal;

// const AddNewBranchModal = ({}) => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const { isModalOpen } = useSelector((state) => state.modal);
//   const dispatch = useDispatch();

//   const handleUpload = (info) => {
//     if (info.file.status === "done") {
//       setSelectedImage(info.file.originFileObj);
//       message.success(`${info.file.name} file uploaded successfully`);
//     } else if (info.file.status === "error") {
//       message.error(`${info.file.name} file upload failed.`);
//     }
//   };

//   const onSubmit = (values) => {
//     // Handle form submission
//     console.log("Received values:", values);
//   };

//   const handleModalClose = () => {
//     dispatch(hideModal());
//   };
//   return;
//   <Modal
//     title={<h3 className="modal__title">Новый филиал</h3>}
//     visible={isModalOpen}
//     onCancel={handleModalClose}
//     footer={null}
//     className="add-branch-modal"
//   >
//     <Formik
//       initialValues={{
//         image: "",
//         name: "",
//         address: "",
//         phoneNumber: "",
//         gisLink: "",
//         tableCount: 0,
//       }}
//       onSubmit={onSubmit}
//     >
//       {({ values, setFieldValue }) => (
//         <Form>
//           <Field name="image">
//             {({ field }) => (
//               <div className={styles.imageuploadcontainer}>
//                 {/* Your image upload component */}
//                 hi
//               </div>
//             )}
//           </Field>
//         </Form>
//       )}
//     </Formik>
//   </Modal>;
// };

// export default AddNewBranchModal;
